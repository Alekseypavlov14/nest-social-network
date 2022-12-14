import { IsNotEmpty } from "class-validator"
import { User } from "src/users/entities/user.entity"

export class CreateArticleDto {
  @IsNotEmpty()
  author: User

  @IsNotEmpty()
  content: string
}
