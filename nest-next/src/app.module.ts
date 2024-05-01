import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import DatabaseLogger from './common/logger/database.logger';
import { UserEntity } from './user/entities/user.entity';
import { UserRepository } from './user/repository/user.repository';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
    }),
    RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [UserEntity],
          // synchronize: true,
          synchronize: configService.get('DB_SYNCHRONIZE') === 'true',
          logging: true,
          logger: new DatabaseLogger(process.env.NODE_ENV),
        } as TypeOrmModuleAsyncOptions;
      },
      inject: [ConfigService],
    }),
    // swagger 의 경우 모듈을 import 하는 순서대로 노출됨
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
