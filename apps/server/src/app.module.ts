import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { CarModule } from './car/car.module'
import { TravelModule } from './travel/travel.module'
import { RatingsModule } from './ratings/ratings.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    CarModule,
    RatingsModule,
    TravelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
