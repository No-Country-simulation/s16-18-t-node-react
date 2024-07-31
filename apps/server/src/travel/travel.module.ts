import { Module } from '@nestjs/common'
import { TravelService } from './travel.service'
import { TravelController } from './travel.controller'
import { PrismaModule } from '../prisma/prisma.module'
import { CarModule } from '../car/car.module'
import { PaymentModule } from 'src/payment/payment.module'
import { RatingsModule } from 'src/ratings/ratings.module'

@Module({
  imports: [PrismaModule, CarModule, PaymentModule, RatingsModule],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
