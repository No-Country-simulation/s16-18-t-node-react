import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt, Strategy } from 'passport-jwt'

import { type User, type IJwtPayload } from '../interfaces'
import { PrismaService } from '../../prisma/prisma.service'
import { Request } from 'express'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly prismaService: PrismaService,
    configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRET_KEY'),
      jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWTFromCookies]),
    })
  }

  private static extractJWTFromCookies(req: Request): string | null {
    if (req.cookies && req.cookies.access_token) {
      return req.cookies.access_token
    }
    return null
  }

  async validate({ id }: IJwtPayload): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true,
      },
    })

    const { id: detaildId, ...restDetail } = await this.prismaService.userDetail.findFirst({
      where: { userID: id },
    })

    if (!user) throw new UnauthorizedException('Token not valid')

    const { id: idUser, ...rest } = user

    return { id: user.id, ...restDetail, ...rest }
  }
}
