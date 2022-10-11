import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { configuration } from 'src/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration]
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (ConfigService: ConfigService) => ({
        dialect: 'postgres',
        host: ConfigService.get('host'),
        port: ConfigService.get('port'),
        username: ConfigService.get('admin'),
        password: ConfigService.get('password'),
        database: ConfigService.get('database'),
        autoLoadModels: true,
        models: [],
      })
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
