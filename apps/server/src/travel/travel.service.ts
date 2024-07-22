import { BadRequestException, Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { TravelQueryParamsDto } from './dto'
import { getDateWithTime, getFormatedPrice, getSeparatedDate } from './utils'

@Injectable()
export class TravelService {
  constructor(private readonly prisma: PrismaService) {}

  async findTravelsByQueryParams(travelQueryParamsDto: TravelQueryParamsDto) {
    const { destination = '', hour, origin = '', min_price, max_price, start_date, state, currency, locale } = travelQueryParamsDto

    const fullDateFromDate = start_date ? new Date(start_date) : new Date()
    const fullDateFromHour = hour ? getDateWithTime(hour) : undefined

    if (currency) {
      if (!getFormatedPrice({ currency })) throw new BadRequestException(`The currency code ${currency} is invalid`)
    }

    const travelFound = await this.prisma.travel.findMany({
      where: {
        origin: { contains: origin, mode: 'insensitive' },
        destination: { contains: destination, mode: 'insensitive' },
        hour: { gte: fullDateFromHour },
        startDate: { gte: fullDateFromDate },
        state,
        price: {
          gte: min_price,
          lte: max_price,
        },
      },
    })

    return travelFound.map((travel) => ({
      ...travel,
      startDate: getSeparatedDate(travel.startDate).date,
      hour: getSeparatedDate(travel.hour).hour,
      price: currency ? getFormatedPrice({ currency, value: travel.price, locale }) : travel.price,
    }))
  }
}
