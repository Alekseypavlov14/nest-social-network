import { User } from './../../users/entities/user.entity'

export class Token {
  token: string
  user: User
  id: number
}