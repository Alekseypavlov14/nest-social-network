import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { TokensModule } from 'src/tokens/tokens.module'

@Module({
  imports: [TokensModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
