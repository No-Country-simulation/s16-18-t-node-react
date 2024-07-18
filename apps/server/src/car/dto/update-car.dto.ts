import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateCarDto } from './create-car.dto'
import { IsUUID } from 'class-validator'

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'The UUID of the Car',
    nullable: false,
    minLength: 1,
  })
  @IsUUID()
  id: string
}
