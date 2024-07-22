import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString, IsUUID, Max, MaxLength, Min, MinLength } from 'class-validator'

export class CreateRatingDto {
    @ApiProperty({
        example: 5,
        description: 'The rating number',
        nullable: false,
        minLength: 1,
        maxLength: 5
    })
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly rating: number;

    @ApiProperty({
        example: 'The travel was positive',
        description: 'The review',
        nullable: false,
        minLength: 1,
        maxLength: 255,
    })
    @IsString()
    @MaxLength(255)
    readonly review: string;

    @ApiProperty({
        example: '12d1e7c99-4a0f-4013-afa8-e3a25ec1e445',
        description: 'The driver user identification',
        nullable: false,
    })
    @IsString()
    @IsUUID()
    readonly driverID: string;
}
