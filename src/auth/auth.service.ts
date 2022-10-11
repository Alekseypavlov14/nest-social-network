import { LoginUserDto } from './dto/LoginUser.dto';
import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/RegisterUser.dto';

@Injectable()
export class AuthService {
  async loginUser(user: LoginUserDto) {}
  async registerUser(user: RegisterUserDto) {}
}
