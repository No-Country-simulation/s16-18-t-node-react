import { Controller, Post, Body, Res, Get } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto, LoginUserDto } from './dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { Auth, GetUser } from './decorator'
import { User } from './interfaces'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: 'This creates a new user inside the database' })
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const { user, token } = await this.authService.create(createUserDto)

    return res
      .cookie('access_token', token, {
        sameSite: 'strict',
        // httpOnly: true,
        maxAge: 3600000,
      })
      .send(user)
  }

  @ApiOperation({ description: 'This return an user with their token' })
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const { user, token } = await this.authService.login(loginUserDto)

    return res.cookie('access_token', token).send(user)
  }

  @Get('renew-token')
  @Auth()
  renewToken(@Res() res: Response, @GetUser() user: User) {
    const token = this.authService.generateJwt({ id: user.id })

    return res
      .cookie('access_token', token, {
        sameSite: 'strict',
        // httpOnly: true,
        maxAge: 3600000,
      })
      .send(user)
  }
}
