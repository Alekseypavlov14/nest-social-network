import { UsersService } from './../users/users.service'
import { LoginUserDto } from './dto/LoginUser.dto'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { RegisterUserDto } from './dto/RegisterUser.dto'

@Injectable()
export class AuthService {
  constructor(private UsersService: UsersService) {}

  async loginUser(user: LoginUserDto) {
    const { login, password } = user

    const candidate = await this.UsersService.findByLogin(login)

    if (!candidate) throw new UnauthorizedException()

    
  }

  async registerUser(user: RegisterUserDto) {
    return await this.UsersService.create(user)
  }
}
