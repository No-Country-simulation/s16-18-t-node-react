import { Controller, Get, Query } from '@nestjs/common'

import { TravelService } from './travel.service'
import { TravelQueryParamsDto } from './dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Travel')
@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @ApiOperation({ description: 'This find all travels with optional query params' })
  @Get('search')
  async findTravels(@Query() travelQueryParamsDto: TravelQueryParamsDto) {
    return await this.travelService.findTravelsByQueryParams(travelQueryParamsDto)
  }
}
