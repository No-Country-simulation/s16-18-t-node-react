import { BadGatewayException, Injectable } from '@nestjs/common'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { MercadoPagoConfig, Payment } from 'mercadopago'
import { User } from '../auth/interfaces'
import { handleErrorException } from 'src/common/utils'
import { PaymentMPDto } from './dto/payment-mp.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { WalletsService } from 'src/wallets/wallets.service'

@Injectable()
export class PaymentService {
  private client: MercadoPagoConfig
  constructor(
    private readonly prisma: PrismaService,
    private readonly walletsService: WalletsService,
  ) {
    this.client = new MercadoPagoConfig({ accessToken: process.env.TK_MP })
  }

  async createMercadoPago(createPaymentDto: CreatePaymentDto, user: User) {
    const client = new MercadoPagoConfig({ accessToken: process.env.TK_MP })
    console.log(createPaymentDto.methodPayment)

    const payment = new Payment(client)

    return payment
      .create({
        body: {
          // additional_info: {
          //   items: [
          //     {
          //       id: crypto.randomUUID(),
          //       title: 'travel',
          //       quantity: 1,
          //       unit_price: 10,
          //     },
          //   ],
          //   payer: {
          //     first_name: user.name,
          //     phone: {
          //       number: user.phone,
          //     },
          //   },
          // },
          capture: true,
          description: 'Payment for travel',
          payer: {
            email: user.email,
            first_name: user.name,
            phone: { number: user.phone },
          },
          payment_method_id: 'master',
          token: createPaymentDto.token,
          transaction_amount: createPaymentDto.transaction,
        },
      })
      .then((r) => r)
      .catch((e) => console.log(e))
  }

  async paymentMP(PaymentMPDto: PaymentMPDto, user: User) {
    try {
      const { formData } = PaymentMPDto
      const { issuer_id, ...rest } = formData
      const payment = new Payment(this.client)
      const responseMP = await payment.create({
        body: {
          ...rest,
          capture: true,
        },
      })

      const response = await this.prisma.payment.create({
        data: {
          referenceId: responseMP.id,
          price: responseMP.transaction_amount,
          state: responseMP.status,
          customerID: user.id,
        },
      })

      await this.walletsService.updateAmount(user.id, responseMP.transaction_amount * 0.9)

      return response
    } catch (error) {
      handleErrorException(error)
    }
  }

  async findPaymentId(id: number) {
    const payment = new Payment(this.client)
    try {
      return payment.get({ id })
    } catch (error) {
      console.log(error)
      handleErrorException(error)
    }
  }

  async findAll() {
    return await this.prisma.payment.findMany().catch((e) => handleErrorException(e))
  }

  async findOne(id: string) {
    const payment = await this.prisma.payment.findFirst({ where: { id } }).catch((e) => handleErrorException(e))

    if (!payment) throw new BadGatewayException('El pago no existe')
    return payment
  }
}
