import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthorizationService } from "@/authorization/authorization.service";
import { User } from "@prisma/client";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authorizationService: AuthorizationService) {
    super({ usernameField: "identifier" });
  }

  async validate(
    identifier: string,
    password: string,
  ): Promise<Omit<User, "password">> {
    const user = await this.authorizationService.validateUser(
      identifier,
      password,
    );

    if (!user) {
      throw new UnauthorizedException("Неверный логин или пароль");
    }

    return user;
  }
}
