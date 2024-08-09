import { Module } from '@nestjs/common'
import { CarService } from './car.service'
import { CarController } from './car.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [CarController],
  providers: [CarService],
  imports: [PrismaModule],
  exports: [CarService],
})
export class CarModule {}
