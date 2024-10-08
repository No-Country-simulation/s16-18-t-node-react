import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString, IsUrl } from 'class-validator'

export class CreateCarDto {
  @ApiProperty({
    example: 'Susuki',
    description: 'The brand of the car',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  brand: string

  @ApiProperty({
    example: 'green',
    description: 'The color of the car',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  color: string

  @ApiProperty({
    example: '2',
    description: 'The capacity of the car',
    nullable: false,
    minLength: 1,
  })
  @IsNumber()
  capacity: number

  @ApiProperty({
    example: 'http://...',
    description: 'The photo of the car',
    nullable: false,
    minLength: 1,
  })
  @IsUrl()
  photo: string

  @ApiProperty({
    example: '568-gwq',
    description: 'The patent of the car',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  patent: string

  @ApiProperty({
    example: '568-gwq',
    description: 'The driving Record of the car',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  drivingRecord: string

  @ApiProperty({
    example: '568-gwq',
    description: 'The vehicle Insurance of the car',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  vehicleInsurance: string
}
