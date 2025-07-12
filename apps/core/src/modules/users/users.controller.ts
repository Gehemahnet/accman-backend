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
import { User } from "@prisma/client";
import { UsersService } from "@modules/users/users.service";
import { CreateUserDto, UpdateUserDto } from "@modules/users/users.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findUsers() {
    return this.usersService.findUsers();
  }

  @Get("by-login")
  findUserByLogin(@Query("login") login: string): Promise<User> {
    return this.usersService.findUserByLogin(login);
  }

  @Get(":uuid")
  findUserByUuid(@Param("uuid") uuid: string): Promise<User> {
    return this.usersService.findUserByUuid(uuid);
  }

  @Post()
  signupUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Patch(":uuid")
  updateUser(
    @Param("uuid") uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(uuid, updateUserDto);
  }

  @Delete(":uuid")
  deleteUser(@Param("uuid") uuid: string) {
    return this.usersService.deleteUser(uuid);
  }
}
