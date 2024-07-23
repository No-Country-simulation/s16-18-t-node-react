import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateRatingDto } from './dto/create-rating.dto'
import { UpdateRatingDto } from './dto/update-rating.dto'
import { handleErrorException } from 'src/common/utils'
import { PrismaService } from 'src/prisma/prisma.service'
import { PaginationRatingDto } from './dto/pagination-rating.dto'
import { RatingInterface } from './interfaces/rating.interface'

@Injectable()
export class RatingsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createRatingDto: CreateRatingDto, passengerID: string) {
    try {
      const rating = await this.prisma.rating.create({
        data: {
          rating: createRatingDto.rating,
          review: createRatingDto.review,
          driver: { connect: { id: createRatingDto.driverID } },
          passenger: { connect: { id: passengerID } },
        },
      })
      return rating
    } catch (error) {
      handleErrorException(error)
    }
  }

  async findAll(pagination: PaginationRatingDto) {
    const { limit = 10, size = 1, rating, review } = pagination

    return await this.prisma.rating
      .findMany({
        where: {
          rating,
          review,
        },
        skip: (size - 1) * limit,
        take: limit,
      })
      .catch((e) => handleErrorException(e))
  }

  async findOne(id: string) {
    const rating = await this.prisma.rating
      .findFirst({
        where: { id },
      })
      .catch((e) => handleErrorException(e))
    if (!rating) throw new NotFoundException('La clasificación no existe')

    return rating
  }

  async findOneAverageDriver(driverID: string) {
    const ratings = await this.prisma.rating
      .findMany({
        where: { driverID },
      })
      .catch((e) => handleErrorException(e))

    const average = this.averageRating(ratings)
    return { average }
  }

  async findOneAveragePassenger(passengerID: string) {
    const ratings = await this.prisma.rating
      .findMany({
        where: { passengerID },
      })
      .catch((e) => handleErrorException(e))
    const average = this.averageRating(ratings)
    return { average }
  }

  async update(id: string, updateRatingDto: UpdateRatingDto) {
    try {
      await this.findOne(id)

      const updateCar = await this.prisma.rating.update({
        where: { id: id },
        data: updateRatingDto,
      })

      return updateCar
    } catch (error) {
      handleErrorException(error)
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id)

      return await this.prisma.rating.delete({
        where: { id },
      })
    } catch (e) {
      handleErrorException(e)
    }
  }

  private averageRating(ratings: RatingInterface[]) {
    const sumRating = ratings.reduce((previousValue: number, currentValue: RatingInterface) => {
      return previousValue + currentValue.rating
    }, 0)
    return parseFloat((sumRating / ratings.length).toFixed(2));
  }
}
