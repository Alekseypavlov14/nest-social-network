import { TokensService } from './tokens.service';
import { Body, Controller, Post } from '@nestjs/common';
import { RefreshTokensDto } from './dto/RefreshTokens.dto';
import { TokensPair } from './types/TokensPair.interface';

@Controller('tokens')
export class TokensController {
  constructor(private TokensService: TokensService) {}

  @Post('refresh')
  async refreshTokens(@Body() body: RefreshTokensDto): Promise<TokensPair> {
    const refreshToken = body.refreshToken
    return await this.TokensService.refreshTokenPair(refreshToken)
  }
}
