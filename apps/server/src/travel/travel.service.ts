import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'

import { User } from '../auth/interfaces'
import { CarService } from '../car/car.service'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTravelDto, TravelQueryParamsDto } from './dto'
import { getDateWithTime, getFormatedPrice, getSeparatedDate } from './utils'

@Injectable()
export class TravelService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly carService: CarService,
  ) {}

  async findTravelsByQueryParams(travelQueryParamsDto: TravelQueryParamsDto) {
    const { destination = '', hour, origin = '', min_price, max_price, start_date, state, currency, locale } = travelQueryParamsDto

    const fullDateFromDate = start_date ? new Date(start_date) : new Date()
    const fullDateFromHour = hour ? getDateWithTime(hour) : undefined

    if (currency) {
      if (!getFormatedPrice({ currency })) throw new BadRequestException(`The currency code ${currency} is invalid`)
    }

    const travelsFound = await this.prisma.travel.findMany({
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

    return travelsFound.map((travel) => ({
      ...travel,
      startDate: getSeparatedDate(travel.startDate).date,
      hour: getSeparatedDate(travel.hour).hour,
      price: currency ? getFormatedPrice({ currency, value: travel.price, locale }) : travel.price,
    }))
  }

  async create(createTravelDto: CreateTravelDto) {
    const { hour, start_date, carId, preferences, ...travelData } = createTravelDto

    const fullDateFromDate = start_date ? new Date(start_date) : new Date()
    const fullDateFromTime = getDateWithTime(hour)

    const carFound = await this.carService.findForID(carId)

    const travel = await this.prisma.$transaction(async (prismaClient) => {
      const newTravel = await prismaClient.travel.create({
        data: {
          ...travelData,
          startDate: fullDateFromDate,
          hour: fullDateFromTime,
          carID: carFound.id,
        },
      })

      const preferencePromises = preferences?.map(async (id) => {
        const preference = await prismaClient.preference.findUnique({ where: { id } })

        if (!preference) throw new NotFoundException(`Preference with ID ${id} not found`)

        return preference
      })

      await Promise.all(preferencePromises)

      await prismaClient.preferenceTravel.createMany({
        data: preferences.map((preferenceId) => ({
          preferenceID: preferenceId,
          travelID: newTravel.id,
        })),
      })

      return newTravel
    })

    return travel
  }
}
