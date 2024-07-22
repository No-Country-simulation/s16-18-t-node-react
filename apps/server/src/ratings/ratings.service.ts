import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { handleErrorException } from 'src/common/utils';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

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
      return rating;
    } catch (error) {
      handleErrorException(error)
    }

  }

  async findAll(pagination: PaginationDto) {
    const { limit = 10, size = 1 } = pagination;
    return await this.prisma.rating
      .findMany({
        // where: { },
        skip: (size - 1) * limit,
        take: limit
      })
      .catch((e) => handleErrorException(e))
  }

  async findOne(id: string) {
    const rating = await this.prisma.rating
      .findFirst({
        where: { id },
      })
      .catch((e) => handleErrorException(e));
    if (!rating) throw new NotFoundException("La clasificación no existe");

    return rating;
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

}
