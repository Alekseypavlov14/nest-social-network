import { User } from 'src/users/entities/user.entity'

export class Article {
  author: User
  content: string
  id: number
}
