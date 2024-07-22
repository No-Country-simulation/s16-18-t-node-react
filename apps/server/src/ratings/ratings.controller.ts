import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common'
import { RatingsService } from './ratings.service'
import { CreateRatingDto } from './dto/create-rating.dto'
import { UpdateRatingDto } from './dto/update-rating.dto'
import { ApiOperation } from '@nestjs/swagger'
import { Auth, GetUser } from 'src/auth/decorator'
import { User } from 'src/auth/interfaces'
import { PaginationDto } from 'src/common/dto/pagination.dto'

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  @Auth()
  @ApiOperation({ description: 'This create rating' })
  create(@Body() createRatingDto: CreateRatingDto, @GetUser() user: User) {
    return this.ratingsService.create(createRatingDto, user.id)
  }

  @Get()
  @Auth()
  @ApiOperation({ description: 'This find one rating' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.ratingsService.findAll(paginationDto)
  }

  @Get(':id')
  @Auth()
  @ApiOperation({ description: 'This find all rating' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ratingsService.findOne(id)
  }

  @Patch(':id')
  @Auth()
  @ApiOperation({ description: 'This update rating' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingsService.update(id, updateRatingDto)
  }

  @Delete(':id')
  @Auth()
  @ApiOperation({ description: 'This delete one rating' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ratingsService.remove(id)
  }
}
