import { Module } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { PaymentController } from './payment.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { WalletsModule } from 'src/wallets/wallets.module'

@Module({
  imports: [PrismaModule, WalletsModule],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
