import { Module } from '@nestjs/common'
import { WalletsService } from './wallets.service'
import { WalletsController } from './wallets.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [WalletsController],
  providers: [WalletsService],
  exports: [WalletsService],
})
export class WalletsModule {}
