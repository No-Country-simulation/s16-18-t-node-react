import { IsEnum, IsISO8601, IsOptional, IsString, Matches } from 'class-validator'
import { Type, Transform } from 'class-transformer'

import { ApiProperty } from '@nestjs/swagger'
import { $Enums } from '@prisma/client'

export class TravelQueryParamsDto {
  @ApiProperty({
    example: 'San Fernando',
    description: 'The origin city or place',
    nullable: true,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly origin?: string

  @ApiProperty({
    example: 'Santiago',
    description: 'The destination city or place',
    nullable: true,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly destination?: string

  @ApiProperty({
    example: '2024-07-20',
    default: 'The current date',
    description: 'The start date for travel in ISO 8601 format',
    nullable: true,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsISO8601({ strict: true, strictSeparator: true })
  readonly start_date?: string

  @ApiProperty({
    example: '15:30',
    description: 'The hour of travel in HH:mm format',
    nullable: true,
    type: String,
    required: false,
  })
  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
  readonly hour?: string

  @ApiProperty({
    example: 'PENDING',
    description: 'The state of the travel',
    nullable: true,
    enum: $Enums.StateTravel,
    type: $Enums,
    required: false,
  })
  @IsOptional()
  @IsEnum($Enums.StateTravel)
  readonly state?: $Enums.StateTravel

  @ApiProperty({
    example: 'CLP',
    description: 'The currency code',
    nullable: true,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly currency?: string

  @ApiProperty({
    example: 'es-CL',
    description: 'The locale for localization',
    nullable: true,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly locale?: string

  @ApiProperty({
    example: 5000,
    description: 'The minimum price for the travel',
    nullable: true,
    type: Number,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => (isNaN(value) ? undefined : +value))
  @Type(() => Number)
  readonly min_price?: number

  @ApiProperty({
    example: 9000,
    description: 'The maximum price for the travel',
    nullable: true,
    type: Number,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => (isNaN(value) ? undefined : +value))
  @Type(() => Number)
  readonly max_price?: number
}
