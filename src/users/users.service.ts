import { TokensService } from './../tokens/tokens.service'
import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UserModel } from './entities/user.model'

@Injectable()
export class UsersService {
  constructor(private TokensService: TokensService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await UserModel.create(createUserDto)
    return await this.TokensService.generateTokenPair(user.id)
  }

  async findById(id: number): Promise<UserModel> {
    return await UserModel.findOne({ where: { id } })
  }

  async findByLogin(login: string): Promise<UserModel> {
    return await UserModel.findOne({ where: { login } })
  }

  async remove(id: number) {
    return await UserModel.destroy({ where: { id } })
  }
}
