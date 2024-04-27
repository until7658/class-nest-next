import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
    }),
    RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'service',
      password: 'service1234!@#',
      database: 'MY_SERVICE',
      // entities[],
      synchronize: false,
    }),
    UserModule,
  ],
})
export class AppModule {}
