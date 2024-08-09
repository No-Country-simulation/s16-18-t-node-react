import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common'
import { handleErrorException } from 'src/common/utils'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class WalletsService {
  constructor(private readonly prisma: PrismaService) {}

  async createWallet(userID: string) {
    const user = await this.findOneUser(userID)

    if (user) throw new BadGatewayException('El usuario ya dispone de una wallet')

    return await this.prisma.wallet.create({ data: { userID, amount: 0 } })
  }

  async updateAmount(userID: string, amount: number) {
    const user = await this.findOneUser(userID)
    if (!user) throw new BadGatewayException('El usuario no se encontró')

    return await this.prisma.wallet
      .update({
        where: { userID },
        data: {
          userID,
          amount: user.amount + amount,
        },
      })
      .catch((e) => handleErrorException(e))
  }

  async findAll() {
    return await this.prisma.wallet.findMany().catch((e) => handleErrorException(e))
  }

  async findOne(id: string) {
    const wallet = await this.prisma.wallet
      .findFirst({
        where: { id },
      })
      .catch((e) => handleErrorException(e))
    if (!wallet) throw new NotFoundException('La wallet no existe')

    return wallet
  }

  async findOneUserService(userID: string) {
    const wallet = await this.findOneUser(userID)
    if (!wallet) throw new NotFoundException('La wallet no existe')
    return wallet
  }

  private async findOneUser(userID: string) {
    const user = await this.prisma.wallet.findFirst({
      where: { userID },
    })
    return user
  }
}
