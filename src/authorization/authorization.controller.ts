import { Controller, Post, UseGuards, Request, Body } from "@nestjs/common";
import { AuthorizationService } from "@/authorization/authorization.service";
import { AuthGuard } from "@nestjs/passport";
import { LoginDto } from "@/users/dto/create-user.dto";

@Controller("auth")
export class AuthorizationController {
  constructor(private authorizationService: AuthorizationService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Body() data: LoginDto) {
    return this.authorizationService.login(data);
  }
}
