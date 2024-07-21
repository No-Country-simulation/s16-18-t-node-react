import { IsEmail, IsString } from 'class-validator'

import { ApiProperty } from '@nestjs/swagger'

export class LoginUserDto {
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
