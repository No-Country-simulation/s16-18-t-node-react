import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(cookieParser())

  app.enableCors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })

  app.setGlobalPrefix('api/v1')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  const config = new DocumentBuilder().setTitle('Cartpooling Api').setVersion('1.0').build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)

  const PORT = process.env.PORT

  await app.listen(PORT)

  console.log(`http://localhost:${PORT}/api/v1`)
}
bootstrap()
