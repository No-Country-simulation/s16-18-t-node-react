import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common'
import { PreferencesService } from './preferences.service'
import { PaginationPreferenceDto } from './dto/pagination-preference.dto'
import { Auth } from 'src/auth/decorator'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Preferences')
@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Get()
  @Auth()
  findAll(@Query() pagination: PaginationPreferenceDto) {
    return this.preferencesService.findAll(pagination)
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.preferencesService.findOne(id)
  }

  @ApiOperation({ description: 'This is for find all preferences of travel' })
  @Get('preference_travel/:travelID')
  async findPreferenceTravel(@Param('travelID', ParseUUIDPipe) travelID: string) {
    return await this.preferencesService.findPreferenceTravel(travelID)
  }
}
