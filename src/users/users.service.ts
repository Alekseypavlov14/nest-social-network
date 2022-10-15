import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UserModel } from './entities/user.model'

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<UserModel> {
    return await UserModel.create(createUserDto)
  }

  async findById(id: number): Promise<UserModel> {
    return await UserModel.findOne({ where: { id } })
  }

  async findByLogin(login: string): Promise<UserModel> {
    return await UserModel.findOne({ where: { login } })
  }

  async delete(id: number) {
    return await UserModel.destroy({ where: { id } })
  }
}
