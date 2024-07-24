import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { PaginationPreferenceDto } from './dto/pagination-preference.dto';
import { Auth } from 'src/auth/decorator';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) { }

  @Get()
  @Auth()
  findAll(@Query() pagination: PaginationPreferenceDto) {
    return this.preferencesService.findAll(pagination);
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.preferencesService.findOne(id);
  }
}
