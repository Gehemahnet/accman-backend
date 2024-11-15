import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { UsersService } from "@/users/users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findUsers() {
    return this.usersService.findUsers();
  }

  @Get(":uuid")
  findUser(@Param("uuid") uuid: string): Promise<User> {
    return this.usersService.findUser({ uuid });
  }

  @Post()
  async signupUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Patch(":uuid")
  async updateUser(
    @Param("uuid") uuid: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.updateUser(uuid, updateUserDto);
  }

  @Delete(":uuid")
  async deleteUser(@Param("uuid") uuid: string) {
    return this.usersService.deleteUser(uuid);
  }
}
