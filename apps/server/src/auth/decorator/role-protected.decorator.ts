import { SetMetadata } from '@nestjs/common'

import { $Enums } from '@prisma/client'

export const META_ROLE = 'role'

export const RoleProtected = (...role: $Enums.Role[]) => {
  return SetMetadata(META_ROLE, role)
}
