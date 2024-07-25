import { Controller, Post, Body } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { Auth, GetUser } from '../auth/decorator'
import { User } from '../auth/interfaces'

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('mercadopago')
  @Auth()
  mercadoPago(@Body() createPaymentDto: CreatePaymentDto, @GetUser() user: User) {
    return this.paymentService.createMercadoPago(createPaymentDto, user)
  }
}
