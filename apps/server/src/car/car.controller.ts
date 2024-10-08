import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common'
import { CarService } from './car.service'
import { CreateCarDto } from './dto/create-car.dto'
import { UpdateCarDto } from './dto/update-car.dto'
import { User } from '../auth/interfaces'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Auth, GetUser } from '../auth/decorator'

@ApiTags('Car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiOperation({
    description: 'This endpoint is for create new Car',
  })
  @Post()
  @Auth()
  async create(@Body() createCarDto: CreateCarDto, @GetUser() user: User) {
    return await this.carService.create(createCarDto, user)
  }

  @ApiOperation({
    description: 'This endpoint is for find all Car',
  })
  @Get()
  @Auth()
  async findAll(@GetUser() user: User) {
    return await this.carService.findAll(user)
  }

  @ApiOperation({
    description: 'This endpoint is for update a Car',
  })
  @Patch()
  @Auth()
  async update(@Body() updateCarDto: UpdateCarDto) {
    return await this.carService.update(updateCarDto)
  }

  @ApiOperation({
    description: 'This endpoint is for "remove" a Car',
  })
  @Auth()
  @Delete('remove/:id')
  async updateIsActive(@Param('id', ParseUUIDPipe) id: string) {
    return await this.carService.isActive(id)
  }

  @ApiOperation({
    description: 'This endpoint is for find Car for ID',
  })
  @Auth()
  @Get('findCar/:id')
  async findForID(@Param('id', ParseUUIDPipe) id: string) {
    return await this.carService.findForID(id)
  }
}
