import { IsNumber, IsString } from 'class-validator'

export class CreatePaymentDto {
  @IsString()
  methodPayment: string

  @IsString()
  token: string

  @IsNumber()
  transaction: number
}
