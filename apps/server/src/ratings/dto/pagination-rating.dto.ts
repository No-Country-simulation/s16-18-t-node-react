import { ApiProperty, PartialType } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNumber, IsOptional, IsPositive, IsString, Max, MaxLength, Min } from 'class-validator'
import { PaginationDto } from 'src/common/dto/pagination.dto'

export class PaginationRatingDto extends PartialType(PaginationDto) {
  @ApiProperty({
    example: 5,
    description: 'The rating number',
    nullable: false,
    minLength: 1,
    maxLength: 5,
  })
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  @Max(5)
  @Type(() => Number)
  readonly rating?: number

  @ApiProperty({
    example: 'The travel was positive',
    description: 'The review',
    nullable: false,
    minLength: 1,
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly review?: string
}
