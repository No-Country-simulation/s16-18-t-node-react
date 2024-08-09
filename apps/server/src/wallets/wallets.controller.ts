import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common'
import { WalletsService } from './wallets.service'
import { Auth } from 'src/auth/decorator'
import { ApiOperation } from '@nestjs/swagger'

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @ApiOperation({ description: 'List all wallet' })
  @Get()
  @Auth()
  findAll() {
    return this.walletsService.findAll()
  }

  @ApiOperation({ description: 'Find one user wallet' })
  @Get('user/:userID')
  @Auth()
  findOneUser(@Param('userID', ParseUUIDPipe) userID) {
    return this.walletsService.findOneUserService(userID)
  }

  @ApiOperation({ description: 'Find one Id wallet' })
  @Get(':id')
  @Auth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.walletsService.findOne(id)
  }
}
