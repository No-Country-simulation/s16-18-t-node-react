import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common'

import { User } from '../auth/interfaces'
import { CarService } from '../car/car.service'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTravelDto, TravelQueryParamsDto } from './dto'
import { getDateWithTime, getFormatedPrice, getSeparatedDate } from './utils'
import { handleErrorException } from 'src/common/utils'
import { $Enums } from '@prisma/client'
import { CreatePreferenceTravelDto } from './dto/preference-travel.dto'
import { DefaultPreference } from 'src/preferences/enums/default-preference'
import { RatingsService } from 'src/ratings/ratings.service'

@Injectable()
export class TravelService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly carService: CarService,
    private readonly ratingService: RatingsService,
  ) {}

  async findTravelsByQueryParams(travelQueryParamsDto: TravelQueryParamsDto) {
    const { destination = '', hour, origin = '', min_price, max_price, start_date, state, currency, locale, limit = 10, size = 1 } = travelQueryParamsDto

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
      skip: (size - 1) * limit,
      take: limit,
      include: {
        PreferenceTravel: {
          include: {
            preference: true,
          },
        },
      },
    })

    const resolve = travelsFound.map(async (travel) => {
      const driver = await this.findDataDriver(travel.id)
      return {
        ...travel,
        startDate: getSeparatedDate(travel.startDate).date,
        hour: getSeparatedDate(travel.hour).hour,
        price: currency ? getFormatedPrice({ currency, value: travel.price, locale }) : travel.price,
        disponibility: await this.findDisponibilityTravel(travel.id, travel.carID),
        ...driver,
      }
    })

    return await Promise.all(resolve)
  }

  async create(createTravelDto: CreateTravelDto, user: User) {
    const { hour, start_date, carId, preferences, ...travelData } = createTravelDto
    await this.validatePreferenceFemale(preferences, user)

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

      await prismaClient.preferenceTravel.createMany({
        data: preferences.map((_) => ({
          preferenceID: _.preferenceID,
          travelID: newTravel.id,
          state: _.state,
        })),
      })

      return newTravel
    })

    return travel
  }

  async NewPassenger(travelID: string, user: User) {
    try {
      const repitePassenger = await this.findPassengerByID(user.id, travelID)
      if (repitePassenger) {
        if (repitePassenger.state === 'OK') throw new ConflictException('Already registed')
        if (repitePassenger.state === 'CANCELLED') {
          return await this.changeStatePassenger(user.id, travelID, 'OK')
        }
      }

      const { carID } = await this.findTravelByID(travelID)

      const capacity = await this.findDisponibilityTravel(travelID, carID)
      if (capacity === 0) throw new ConflictException('There are no hundreds available')

      return await this.prisma.passengerTravel.create({
        data: {
          passengerID: user.id,
          travelID,
        },
      })
    } catch (error) {
      handleErrorException(error)
    }
  }

  async findDisponibilityTravel(travelID: string, carID: string) {
    // const travel = await this.findTravelByID(travelID)

    const { capacity } = await this.carService.findForID(carID)

    const cantPassenger = await this.prisma.passengerTravel.findMany({
      where: {
        travelID,
        state: 'OK',
      },
    })

    const restCapacity = capacity - cantPassenger.length

    return restCapacity
  }

  async findTravelByID(travelID: string) {
    try {
      const travel = await this.prisma.travel.findUnique({
        where: { id: travelID },
      })

      if (!travel) throw new NotFoundException('Travel not fou nd')

      const date = getSeparatedDate(travel.startDate).date
      const hour = getSeparatedDate(travel.hour).hour

      const disponibility = await this.findDisponibilityTravel(travelID, travel.carID)
      const driver = await this.findDataDriver(travelID)

      return {
        ...travel,
        startDate: date,
        hour,
        disponibility,
        ...driver,
      }
    } catch (e) {
      handleErrorException(e)
    }
  }

  async findPassengerByID(passengerID: string, travelID: string) {
    return await this.prisma.passengerTravel
      .findFirst({
        where: {
          passengerID,
          travelID,
        },
      })
      .catch((e) => handleErrorException(e))
  }

  async cancelleTravelPassenger(user: User, travelID: string) {
    const { id } = await this.findPassengerByID(user.id, travelID)
    return this.prisma.passengerTravel.update({
      where: {
        id,
        travelID,
        passengerID: user.id,
      },
      data: {
        state: 'CANCELLED',
      },
    })
  }

  async changeStatePassenger(passengerID: string, travelID: string, state: $Enums.StatePassenger) {
    const { id } = await this.findPassengerByID(passengerID, travelID)

    return await this.prisma.passengerTravel.update({
      where: {
        id,
        passengerID,
      },
      data: {
        state: state,
      },
    })
  }

  async findAllPassenger(travelID: string) {
    const consult = await this.prisma.passengerTravel.findMany({
      where: {
        state: 'OK',
        travelID: travelID,
      },
      select: {
        passenger: {
          select: {
            userDetail: {
              select: {
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    })

    const passenger = consult.flatMap((a) => a.passenger.userDetail)

    return passenger
  }

  private async validatePreferenceFemale(preferencesDto: CreatePreferenceTravelDto[], passenger: User) {
    const preferences = await Promise.all(
      preferencesDto.map((_) =>
        this.prisma.preference.findFirst({
          where: { id: _.preferenceID },
        }),
      ),
    )

    preferences.forEach((_) => {
      const data = preferencesDto.find((preference) => preference.preferenceID === _.id)
      if (DefaultPreference.FEMALE === _.name && data.state) {
        if (passenger.gender === 'MALE') throw new BadRequestException('El pasajero no puede ser un hombre en un viaje para mujeres')
      }
    })
  }

  async findDataDriver(travelID: string) {
    const data = await this.prisma.travel.findUnique({
      where: { id: travelID },
      select: {
        car: {
          select: {
            user: {
              select: {
                id: true,
                userDetail: true,
              },
            },
          },
        },
      },
    })

    const rating = await this.ratingService.findOneAverageDriver(data.car.user.id)

    const driver = data.car.user.userDetail

    return {
      driver,
      rating,
    }
  }
}
