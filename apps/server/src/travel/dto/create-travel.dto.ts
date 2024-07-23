import { ArrayNotEmpty, IsArray, IsISO8601, IsNumber, IsString, IsUUID, Matches, MinLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateTravelDto {
  @IsString()
  @MinLength(4)
  readonly origin: string

  @IsString()
  @MinLength(4)
  readonly destination: string

  @IsISO8601()
  readonly start_date: Date

  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
  readonly hour: string

  @IsNumber()
  @Type(() => Number)
  readonly price: number

  @IsUUID()
  readonly carId: string

  @IsUUID('4', { each: true })
  readonly preferences: string[]
}
