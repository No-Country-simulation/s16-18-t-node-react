import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateCarDto } from './dto/create-car.dto'
import { UpdateCarDto } from './dto/update-car.dto'
import { PrismaService } from '../prisma/prisma.service'
import { handleErrorException } from '../common/utils'
import { User } from '../auth/interfaces'

@Injectable()
export class CarService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCarDto: CreateCarDto, user: User) {
    try {
      const patent = await this.findForPatent(createCarDto.patent)
      if (patent) throw new ConflictException('this car already exist')

      const { userID, isActive, ...rest } = await this.prisma.car.create({
        data: {
          brand: createCarDto.brand,
          capacity: createCarDto.capacity,
          color: createCarDto.color,
          patent: createCarDto.patent,
          photo: createCarDto.photo,
          userID: user.id,
          drivingRecord: createCarDto.drivingRecord,
          vehicleInsurance: createCarDto.vehicleInsurance,
        },
      })

      return { ...rest }
    } catch (error) {
      handleErrorException(error)
    }
  }

  async findAll(user: User) {
    return await this.prisma.car
      .findMany({
        where: { userID: user.id, isActive: true },
      })
      .catch((e) => handleErrorException(e))
  }

  async findForPatent(patent: string) {
    return await this.prisma.car
      .findFirst({
        where: { patent },
      })
      .catch((e) => handleErrorException(e))
  }
  async findForID(id: string) {
    const car = await this.prisma.car
      .findFirst({
        where: { id },
      })
      .catch((e) => handleErrorException(e))
    if (!car) throw new NotFoundException('Car not exist')

    return car
  }

  async update(updateCarDto: UpdateCarDto) {
    try {
      await this.findForID(updateCarDto.id)

      const updateCar = await this.prisma.car.update({
        where: { id: updateCarDto.id },
        data: updateCarDto,
      })

      return updateCar
    } catch (error) {
      handleErrorException(error)
    }
  }

  async isActive(id: string) {
    try {
      const { isActive } = await this.findForID(id)

      return await this.prisma.car.update({
        where: { id },
        data: { isActive: !isActive },
      })
    } catch (e) {
      handleErrorException(e)
    }
  }
}
