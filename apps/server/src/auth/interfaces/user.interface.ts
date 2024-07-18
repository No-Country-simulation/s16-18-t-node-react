import { $Enums } from '@prisma/client'

export interface User {
  id: string
  email: string
  role: $Enums.Role
  name: string
  dni: string
  phone: string
  avatar: string
}
