import { Controller, Post, UseGuards, Request } from "@nestjs/common";
import { AuthorizationService } from "@/authorization/authorization.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthorizationController {
  constructor(private authorizationService: AuthorizationService) {}

  @Post("login")
  @UseGuards(AuthGuard("local"))
  async login(@Request() req) {
    return req.user;
  }
}
