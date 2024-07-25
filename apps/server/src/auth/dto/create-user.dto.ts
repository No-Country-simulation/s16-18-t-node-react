import { IsEmail, IsEnum, IsString } from 'class-validator'

import { ApiProperty } from '@nestjs/swagger'
import { $Enums } from '@prisma/client'

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The username',
    nullable: false,
    minLength: 1,
    type: String,
  })
  @IsString()
  readonly name: string

  @ApiProperty({
    example: 'Male',
    description: 'The gender user',
    nullable: false,
    minLength: 1,
    type: String,
  })
  @IsString()
  @IsEnum($Enums.GenderUser)
  readonly gender: $Enums.GenderUser

  @ApiProperty({
    example: '+569 33442211',
    description: 'The user phone number',
    nullable: false,
    minLength: 8,
    type: String,
  })
  @IsString()
  readonly phone_number: string

  @ApiProperty({
    example: '12345678A',
    description: 'The user dni',
    nullable: false,
    minLength: 7,
    type: String,
  })
  @IsString()
  readonly dni: string

  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'The user email',
    nullable: false,
    minLength: 5,
    type: String,
  })
  @IsEmail()
  readonly email: string

  @ApiProperty({
    example: 'asecret@password33',
    description: 'The user password',
    nullable: false,
    minLength: 8,
    type: String,
  })
  @IsString()
  readonly password: string
}
