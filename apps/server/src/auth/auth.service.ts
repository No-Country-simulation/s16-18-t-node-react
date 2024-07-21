import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compareSync, hashSync } from 'bcrypt'
import { handleErrorException } from '../common/utils'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto, LoginUserDto } from './dto'
import { IJwtPayload, User } from './interfaces'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...userData } = createUserDto

    try {
      const userFound = await this.findByEmail(userData.email)
      const userFoundByDni = await this.findByDni(userData.dni)

      if (userFound) throw new ConflictException(`User with email ${userData.email} already exists`)

      if (userFoundByDni) throw new ConflictException(`User with dni ${userData.dni} already exists`)

      const hashedPassword = hashSync(password, 10)

      const result = await this.prisma.$transaction(async (prismaClient) => {
        const newUser = await prismaClient.user.create({
          data: { email: userData.email, password: hashedPassword },
        })

        const { id, userID, ...userDetail } = await prismaClient.userDetail.create({
          data: {
            userID: newUser.id,
            dni: userData.dni,
            name: userData.name,
            phone: userData.phone_number,
          },
        })

        return {
          id: newUser.id,
          email: newUser.email,
          role: newUser.role,
          ...userDetail,
        }
      })

      return result
    } catch (error) {
      handleErrorException(error)
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<User & { token: string }> {
    const { email, password } = loginUserDto

    const userFound = await this.findByEmail(email)

    if (!userFound) throw new NotFoundException(`The user with email ${email} not exists`)

    const isPasswordMatch = compareSync(password, userFound.password)

    if (!isPasswordMatch) throw new UnauthorizedException('Incorrect email or password')

    const { id, userID, ...userDetail } = await this.prisma.userDetail.findFirst({ where: { userID: userFound.id } })

    const token = this.generateJwt({ id: userFound.id })

    return {
      ...userDetail,
      email: userFound.email,
      id: userFound.id,
      role: userFound.role,
      token,
    }
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({ where: { email } })
    return user
  }

  async findByDni(dni: string) {
    const user = await this.prisma.userDetail.findFirst({ where: { dni } })
    return user
  }

  private generateJwt(data: IJwtPayload): string {
    const token = this.jwtService.sign(data)
    return token
  }
}
