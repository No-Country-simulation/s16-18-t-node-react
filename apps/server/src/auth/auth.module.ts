import { Module } from '@nestjs/common'

import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

import { PrismaModule } from '../prisma/prisma.module'

import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { WalletsModule } from 'src/wallets/wallets.module'

@Module({
  imports: [
    PrismaModule,

    PassportModule.register({ defaultStrategy: 'jwt' }),

    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET_KEY'),
          signOptions: {
            expiresIn: '1h',
          },
        }
      },
    }),
    WalletsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
