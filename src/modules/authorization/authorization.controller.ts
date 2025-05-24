import {
  Controller,
  Post,
  UseGuards,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AuthorizationService } from "@modules/authorization/authorization.service";
import { AuthGuard } from "@nestjs/passport";
import { LoginDto, ChangePasswordDto } from "@dto";
import { UserId } from "@decorators";
import { JwtAuthGuard } from "@guards";
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";

@Controller("auth")
export class AuthorizationController {
  constructor(private authorizationService: AuthorizationService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Body() data: LoginDto) {
    return this.authorizationService.login(data);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post("change-password")
  @UsePipes(new ValidationPipe({ whitelist: true }))
  changePassword(@UserId() userId: string, @Body() data: ChangePasswordDto) {
    return this.authorizationService.changePassword(userId, data);
  }

  @Post("request-reset")
  @ApiOperation({ summary: "Отправить ссылку для сброса пароля" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        email: { type: "string", example: "user@example.com" },
      },
      required: ["email"],
    },
  })
  @ApiResponse({
    status: 200,
    description: "Письмо отправлено (если email существует)",
  })
  async requestReset(@Body("login") login: string) {
    await this.authorizationService.sendResetPasswordLink(login);
    return { message: "If login exists, email sent" };
  }

  @Post("reset-password")
  @ApiOperation({ summary: "Сбросить пароль по токену" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        userId: {
          type: "string",
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
        token: {
          type: "string",
          example: "a1b2c3d4...",
        },
        newPassword: {
          type: "string",
          example: "NewSecurePassword123!",
          minLength: 8,
        },
      },
      required: ["userId", "token", "newPassword"],
    },
  })
  @ApiResponse({ status: 200, description: "Пароль успешно изменён" })
  @ApiResponse({
    status: 400,
    description: "Неверный токен/пароль или токен просрочен",
  })
  async resetPassword(
    @Body("userId") userId: string,
    @Body("token") token: string,
    @Body("newPassword") newPassword: string,
  ) {
    await this.authorizationService.resetPassword(userId, token, newPassword);
    return { message: "Пароль успешно изменён" };
  }
}
