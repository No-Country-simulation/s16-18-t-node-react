import { type CanActivate, type ExecutionContext, Injectable, BadRequestException, ForbiddenException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { type Observable } from 'rxjs'
import { type User, type ValidRole } from '../interfaces'

import { META_ROLE } from '../decorator'

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const validRole: ValidRole[] = this.reflector.get(META_ROLE, context.getHandler())

    if (!validRole) return true
    if (validRole.length <= 0) return true

    const req = context.switchToHttp().getRequest()
    const user = req.user as User

    if (!user) throw new BadRequestException('User not found')

    if (validRole.includes(user.role)) {
      return true
    }

    throw new ForbiddenException(`User ${user.id} need a valid roles: ${JSON.stringify(validRole)}`)
  }
}
