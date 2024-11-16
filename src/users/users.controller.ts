import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { UsersService } from "@/users/users.service";
import { ApiBody } from "@nestjs/swagger";
import { CreateUserDto, FindUsersByParamsDto } from "@/users/users.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findUsers() {
    return this.usersService.findUsers();
  }

  @Get(":uuid")
  findUser(@Param("uuid") uuid: string): Promise<User> {
    return this.usersService.findUserByUuid({ uuid });
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  async signupUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Post("findUsersByParams")
  @ApiBody({ type: FindUsersByParamsDto })
  findUsersByParams(
    @Body()
    params: FindUsersByParamsDto = {
      pagination: {
        count: 10,
        page: 1,
      },
    },
  ) {
    const { pagination } = params;
    return this.usersService.findUserWithParams({
      pagination: {
        count: pagination.count ?? 10,
        page: pagination.page ?? 1,
      },
    });
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
