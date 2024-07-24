import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsOptional, IsString, MaxLength } from 'class-validator'
import { PaginationDto } from 'src/common/dto/pagination.dto'

export class PaginationPreferenceDto extends PartialType(PaginationDto) {


    @ApiProperty({
        example: 'Smoke',
        description: 'Only smokes',
        nullable: false,
        minLength: 1,
        maxLength: 255,
    })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    readonly name?: string
}
