import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { NextServer } from 'next/dist/server/next';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle(configService.get('SWAGGER_TITLE'))
    .setDescription(configService.get('SWAGGER_DESC'))
    .setVersion(configService.get('SWAGGER_VERSION'))
    .addBearerAuth()
    .build();

  const option: SwaggerDocumentOptions = {
    include: [AuthModule, UserModule],
    deepScanRoutes: false,
  };

  const document = SwaggerModule.createDocument(app, config, option);
  SwaggerModule.setup(configService.get('SWAGGER_PATH'), app, document);

  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
