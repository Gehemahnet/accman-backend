import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "@/users/users.service";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthorizationService {
  constructor(private userService: UsersService) {}

  async validateUser(
    login: User["email"] | User["userName"],
    password: string,
  ) {
    const user = await this.userService.findUserByLogin(login);
    const isMatch = user.password === password;
    //await bcrypt.compare(user.password, password);

    try {
      console.log(isMatch, user);
      if (isMatch && user) {
        return user;
      }
    } catch (e) {
      throw new UnauthorizedException("User or password are incorrect");
    }
  }
}
