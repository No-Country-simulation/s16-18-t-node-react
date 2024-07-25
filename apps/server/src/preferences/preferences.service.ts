import { Injectable, NotFoundException } from '@nestjs/common'
import { PaginationDto } from 'src/common/dto/pagination.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { PaginationPreferenceDto } from './dto/pagination-preference.dto'
import { handleErrorException } from 'src/common/utils'

@Injectable()
export class PreferencesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: PaginationPreferenceDto) {
    const { limit = 10, size = 1, name } = pagination

    return await this.prisma.preference
      .findMany({
        where: {
          name,
        },
        skip: (size - 1) * limit,
        take: limit,
      })
      .catch((e) => handleErrorException(e))
  }

  async findOne(id: string) {
    const rating = await this.prisma.preference
      .findFirst({
        where: { id },
      })
      .catch((e) => handleErrorException(e))
    if (!rating) throw new NotFoundException('La preferencia no existe')

    return rating
  }
}
