import { IsString, Matches, MinLength, NotContains } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({
    example: "myUsername",
    description: "Username or email",
  })
  indetifier: string;

  @ApiProperty({
    example: "Password2124",
    description: "Password",
  })
  password: string;
}

export class ChangePasswordDto {
  @ApiProperty({
    example: "Password123",
    description: "New password",
  })
  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters" })
  @Matches(/(?=.*\d)/, {
    message: "Пароль должен содержать хотя бы одну цифру",
  })
  @Matches(/(?=.*[a-z])/, {
    message: "Пароль должен содержать хотя бы одну строчную букву",
  })
  @Matches(/(?=.*[A-Z])/, {
    message: "Пароль должен содержать хотя бы одну заглавную букву",
  })
  @NotContains(" ", { message: "Пароль не должен содержать пробелы" })
  newPassword: string;

  @ApiProperty({
    example: "OldPassword123",
    description: "Current password",
  })
  @IsString()
  currentPassword: string;
}
