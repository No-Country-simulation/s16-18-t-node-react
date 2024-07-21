import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from './dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: 'This creates a new user inside the database' })
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto)
  }
}
