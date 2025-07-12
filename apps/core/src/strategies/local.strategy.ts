import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { BadRequestException, Injectable } from "@nestjs/common";
import { AuthorizationService } from "@modules/authorization/authorization.service";
import type { User } from "@prisma/client";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authorizationService: AuthorizationService) {
    super({ usernameField: "identifier" });
  }

  async validate(identifier: string, password: string): Promise<Partial<User>> {
    const user = await this.authorizationService.validateUser(
      identifier,
      password,
    );

    if (!user) {
      console.log("NO USER");
      throw new BadRequestException("Неверный логин или пароль");
    }

    return user;
  }
}
