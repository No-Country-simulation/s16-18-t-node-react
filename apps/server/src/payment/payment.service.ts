import { Injectable } from '@nestjs/common'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { MercadoPagoConfig, Payment } from 'mercadopago'
import { User } from '../auth/interfaces'
import { handleErrorException } from 'src/common/utils'

@Injectable()
export class PaymentService {
  async createMercadoPago(createPaymentDto: CreatePaymentDto, user: User) {
    const client = new MercadoPagoConfig({ accessToken: process.env.TK_MP })
    console.log(process.env.TK_MP)

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
          payment_method_id: createPaymentDto.methodPayment,
          token: createPaymentDto.token,
          transaction_amount: createPaymentDto.transaction,
        },
      })
      .then((r) => r)
      .catch((e) => console.log(e))
  }
}
