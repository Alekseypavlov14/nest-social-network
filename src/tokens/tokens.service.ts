import { TokenModel } from './entities/token.model'
import { EncodedData } from './types/EncodedData.interface'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { sign, verify } from 'jsonwebtoken'
import { TokensPair } from './types/TokensPair.interface'
import { UserModel } from 'src/users/entities/user.model'

@Injectable()
export class TokensService {
  constructor(private ConfigService: ConfigService) {}

  verifyAccessToken(accessToken: string): EncodedData {
    const accessKey = this.ConfigService.get('accessKey')
    return verify(accessToken, accessKey) as EncodedData
  }

  async generateTokenPair(userId: number): Promise<TokensPair> {
    const accessKey = this.ConfigService.getOrThrow('accessKey')
    const refreshKey = this.ConfigService.getOrThrow('refreshKey')

    const accessToken = sign({ userId }, accessKey)
    const refreshToken = sign({ userId }, refreshKey)

    await this.updateRefreshTokenInDB(userId, refreshToken)

    return { accessToken, refreshToken }
  }

  async refreshTokenPair(refreshToken: string): Promise<TokensPair> {
    const token = await TokenModel.findOne({ where: { token: refreshToken } })

    if (!token) return

    const userId = token.user.id
    const tokensPair = await this.generateTokenPair(userId)

    await this.updateRefreshTokenInDB(userId, tokensPair.refreshToken)

    return tokensPair
  }

  private async updateRefreshTokenInDB(userId: number, refreshToken: string) {
    const user = await UserModel.findOne({ where: { id: userId } })
    if (!user) return

    const token = await TokenModel.findOne({ include: UserModel })
    if (!token) return await TokenModel.create({ user, token: refreshToken })

    token.token = refreshToken
    return await token.save()
  }
}
