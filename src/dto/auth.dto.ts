import { ApiProperty } from "@nestjs/swagger";
import { IsStrongPassword } from "@decorators/password-validation.decorator";

export class LoginDto {
  @ApiProperty({
    example: "myUsername",
    description: "Username or email",
  })
  identifier: string;

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
  @IsStrongPassword()
  newPassword: string;

  @ApiProperty({
    example: "OldPassword123",
    description: "Current password",
  })
  @IsStrongPassword()
  currentPassword: string;
}
