import { Module } from '@nestjs/common'
import { TravelService } from './travel.service'
import { TravelController } from './travel.controller'
import { PrismaModule } from '../prisma/prisma.module'
import { CarModule } from '../car/car.module'

@Module({
  imports: [PrismaModule, CarModule],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
