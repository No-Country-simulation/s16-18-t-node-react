import { Controller, Post, Body, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto, LoginUserDto } from './dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: 'This creates a new user inside the database' })
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const { user, token } = await this.authService.create(createUserDto)

    return res.cookie('access_token', token).send(user)
  }

  @ApiOperation({ description: 'This return an user with their token' })
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const { user, token } = await this.authService.login(loginUserDto)

    return res.cookie('access_token', token).send(user)
  }
}
