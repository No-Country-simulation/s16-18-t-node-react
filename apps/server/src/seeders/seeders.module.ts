import { Module } from '@nestjs/common'
import { SeedersService } from './seeders.service'
import { SeedersController } from './seeders.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [SeedersController],
  providers: [SeedersService],
})
export class SeedersModule {}
