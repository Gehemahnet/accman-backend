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
import {
  RequestReset,
  ResetPassword,
} from "@/common/docs/swagger/authorization";

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
  @RequestReset()
  @Post("request-reset")
  async requestReset(@Body("login") login: string) {
    await this.authorizationService.sendResetPasswordLink(login);
    return { message: "If login exists, email sent" };
  }

  @ResetPassword()
  @Post("reset-password")
  async resetPassword(
    @Body("userId") userId: string,
    @Body("token") token: string,
    @Body("newPassword") newPassword: string,
  ) {
    await this.authorizationService.resetPassword(userId, token, newPassword);
    return { message: "Пароль успешно изменён" };
  }
}
