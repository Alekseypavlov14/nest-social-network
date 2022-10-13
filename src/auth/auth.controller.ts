import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginUserDto } from './dto/LoginUser.dto'
import { RegisterUserDto } from './dto/RegisterUser.dto'

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('login')
  async login(@Body() user: LoginUserDto) {
    return await this.AuthService.loginUser(user)
  }

  @Post('register')
  async register(@Body() user: RegisterUserDto) {
    return await this.AuthService.registerUser(user)
  }
}
