import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6, { message: "Password must be at least 6 characters" })
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
