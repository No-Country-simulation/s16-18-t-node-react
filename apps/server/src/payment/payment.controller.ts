import { Controller, Param, ParseIntPipe, Get, ParseUUIDPipe } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { Auth } from '../auth/decorator'
import { ApiOperation } from '@nestjs/swagger'

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiOperation({ description: 'get payment detail for id mercadopago' })
  @Get('mercadopago/payment/:id')
  @Auth()
  findPaymentId(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.findPaymentId(id)
  }

  @ApiOperation({ description: 'get payment for id' })
  @Get(':id')
  @Auth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.paymentService.findOne(id)
  }
  @ApiOperation({ description: 'get all payment' })
  @Get()
  @Auth()
  findAll() {
    return this.paymentService.findAll()
  }
}
