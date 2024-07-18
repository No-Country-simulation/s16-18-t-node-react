import { ConflictException, InternalServerErrorException } from '@nestjs/common'

export const handleErrorException = (error: unknown) => {
  if (error instanceof ConflictException) throw error

  throw new InternalServerErrorException()
}
