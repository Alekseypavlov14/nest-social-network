import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TokensService } from './tokens.service';

@Module({
  providers: [TokensService],
  imports: [ConfigModule]
})
export class TokensModule {}
