import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Query } from '@nestjs/common'

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
  async create(@Body() createTravelDto: CreateTravelDto, @GetUser() user: User) {
    return await this.travelService.create(createTravelDto, user)
  }

  @ApiOperation({ description: 'This create a passenger' })
  @Auth()
  @Post('create-passenger/:travelID')
  async createPassenger(@Param('travelID', ParseUUIDPipe) travelID: string, @GetUser() user: User) {
    return await this.travelService.NewPassenger(travelID, user)
  }

  @ApiOperation({ description: 'This find disponibility' })
  @Get('passengerDisponibility/:id')
  async findDisponibility(@Param('id', ParseUUIDPipe) travelID: string) {
    return await this.travelService.findDisponibilityTravel(travelID)
  }

  @ApiOperation({ description: 'This is for cancell travel for passenger' })
  @Auth()
  @Delete('cancell-passenger/:travelID')
  async cancellTravelPassenger(@Param('travelID', ParseUUIDPipe) travelID: string, @GetUser() user: User) {
    return await this.travelService.cancelTravelPassenger(user, travelID)
  }

  @ApiOperation({ description: 'This is for find all passenger' })
  @Get('find-passengers/:travelID')
  @Auth()
  async findPassengers(@Param('travelID', ParseUUIDPipe) travelID: string) {
    return await this.travelService.findAllPassenger(travelID)
  }

  @ApiOperation({ description: 'This is for find travel' })
  @Get('find-travel/:travelID')
  async findTravel(@Param('travelID', ParseUUIDPipe) travelID: string) {
    return await this.travelService.findTravelByID(travelID)
  }
}
