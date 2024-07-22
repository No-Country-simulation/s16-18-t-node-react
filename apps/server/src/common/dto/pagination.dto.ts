import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator'
import { PaginationRequest } from '../interfaces/pagination.request';

export class PaginationDto implements PaginationRequest {
    @ApiProperty({
        example: '1',
        description: 'The pagine selected',
        nullable: true,
        minLength: 1,
    })
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Type(() => Number)
    readonly size?: number;

    @ApiProperty({
        example: '10',
        description: 'The limit size',
        nullable: true,
        minLength: 1,
    })
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Type(() => Number)
    readonly limit: number;


}
