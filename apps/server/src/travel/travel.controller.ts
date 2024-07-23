import { Body, Controller, Get, Post, Query } from '@nestjs/common'

import { TravelService } from './travel.service'
import { CreateTravelDto, TravelQueryParamsDto } from './dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Auth, GetUser } from '../auth/decorator'
import { User } from '../auth/interfaces'

@ApiTags('Travel')
@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @ApiOperation({ description: 'This find all travels with optional query params' })
  @Get('search')
  async findTravels(@Query() travelQueryParamsDto: TravelQueryParamsDto) {
    return await this.travelService.findTravelsByQueryParams(travelQueryParamsDto)
  }

  @ApiOperation({ description: 'This create a travel' })
  @Auth()
  @Post('create')
  async create(@Body() createTravelDto: CreateTravelDto) {
    return await this.travelService.create(createTravelDto)
  }
}
