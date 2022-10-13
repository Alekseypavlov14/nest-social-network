import { UserModel } from 'src/users/entities/user.model'
import { UsersService } from './../users/users.service'
import { LoginUserDto } from './dto/LoginUser.dto'
import { Injectable } from '@nestjs/common'
import { RegisterUserDto } from './dto/RegisterUser.dto'

@Injectable()
export class AuthService {
  constructor(private UsersService: UsersService) {}

  async loginUser(user: LoginUserDto) {}

  async registerUser(user: RegisterUserDto) {
    return await this.UsersService.create(user)
  }
}
