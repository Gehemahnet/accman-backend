import { Injectable } from "@nestjs/common";
import { UsersService } from "@/users/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "@/users/dto/create-user.dto";

@Injectable()
export class AuthorizationService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(identifier: string, password: string) {
    const user = await this.userService.findUserByLogin(identifier);
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch && user) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(data: LoginDto) {
    return {
      access_token: this.jwtService.sign(data),
    };
  }
}
