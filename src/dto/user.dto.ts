import { IsEmail } from "class-validator";
import { IsStrongPassword } from "@decorators/password-validation.decorator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  userName: string;

  name?: string;

  surname?: string;

  lastName?: string;
}

export class UpdateUserDto {
  name?: string;

  surname?: string;

  lastName?: string;
}
