import { IsNotEmpty } from "class-validator"

export class RegisterUserDto {
  @IsNotEmpty()
  readonly login: string

  @IsNotEmpty()
  readonly password: string
}
