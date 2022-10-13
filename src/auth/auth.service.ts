import { TokensService } from './../tokens/tokens.service';
import { UsersService } from './../users/users.service'
import { LoginUserDto } from './dto/LoginUser.dto'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { RegisterUserDto } from './dto/RegisterUser.dto'
import { compare, hash } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private UsersService: UsersService,
    private TokensService: TokensService
  ) {}

  HASH_SALT = 7

  async loginUser(user: LoginUserDto) {
    const { login, password } = user

    const candidate = await this.UsersService.findByLogin(login)
    if (!candidate) throw new UnauthorizedException()

    const comparison = await compare(password, candidate.password)
    if (!comparison) throw new UnauthorizedException()

    const userId = candidate.id
    return await this.TokensService.generateTokenPair(userId)
  }

  async registerUser(RegisterUserDto: RegisterUserDto) {
    const { login, password } = RegisterUserDto

    const passwordHash = await hash(password, this.HASH_SALT)

    const user = { login, password: passwordHash }
    return await this.UsersService.create(user)
  }
}
