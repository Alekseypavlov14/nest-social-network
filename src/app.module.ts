import { UserModel } from 'src/users/entities/user.model';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { configuration } from 'src/config';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { ArticleModel } from './articles/entities/article.model';

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
        models: [ArticleModel, UserModel],
      })
    }),
    AuthModule,
    ArticlesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
