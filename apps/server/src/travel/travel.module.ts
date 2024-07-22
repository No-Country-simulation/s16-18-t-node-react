import { Module } from '@nestjs/common'
import { TravelService } from './travel.service'
import { TravelController } from './travel.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
