import { ConflictException, Injectable } from '@nestjs/common'

import { hashSync } from 'bcrypt'

import { CreateUserDto } from './dto'
import { PrismaService } from '../prisma/prisma.service'
import { handleErrorException } from '../common/utils'

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
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

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({ where: { email } })
    return user
  }

  async findByDni(dni: string) {
    const user = await this.prisma.userDetail.findFirst({ where: { dni } })
    return user
  }
}
