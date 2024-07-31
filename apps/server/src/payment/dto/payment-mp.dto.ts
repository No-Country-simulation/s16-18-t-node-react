import { Type } from 'class-transformer'
import { IsEmail, IsNumber, IsString, ValidateNested } from 'class-validator'

class IdentificationDto {
  @IsString()
  readonly type: string
  @IsString()
  readonly number: string
}

class PayerDto {
  @IsEmail()
  readonly email: string

  @Type(() => IdentificationDto)
  @ValidateNested()
  readonly identification: IdentificationDto
}

class FormDataDto {
  @IsString()
  token: string
  @IsString()
  issuer_id: string
  @IsString()
  payment_method_id: string
  @IsNumber()
  transaction_amount: 500
  @IsNumber()
  installments: 1
  @Type(() => PayerDto)
  @ValidateNested()
  payer: PayerDto
}

export class PaymentMPDto {
  @IsString()
  paymentType: string
  @IsString()
  selectedPaymentMethod: string
  @Type(() => FormDataDto)
  @ValidateNested()
  formData: FormDataDto
}
