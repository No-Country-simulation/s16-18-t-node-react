import { BadRequestException, ConflictException, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
// import { JsonWebTokenError } from 'jsonwebtoken'

export const handleErrorException = (error: unknown) => {
  if (error instanceof NotFoundException) throw new NotFoundException(error.message)
  if (error instanceof UnauthorizedException) throw new UnauthorizedException(error.message)
  if (error instanceof ConflictException) throw new ConflictException(error.message)
  // if (error instanceof JsonWebTokenError) throw new UnauthorizedException(error.message)
  if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') throw new ConflictException('Data already exist')
  if (error instanceof PrismaClientKnownRequestError && error.code === 'P2005') throw new ConflictException('Record to delete does not exist.')
  if (error instanceof BadRequestException) throw new BadRequestException(error.message)

  throw new InternalServerErrorException('An unexpected error occurred')
}
