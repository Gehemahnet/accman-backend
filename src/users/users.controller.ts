import { Body, Controller, Post } from "@nestjs/common";
import { User } from "@prisma/client";
import { UsersService } from "@/users/users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  //
  // @Get()
  // findUsers() {}
  //
  // @Get("users/:id")
  // findUser(@Param("id") id: string) {}

  @Post()
  async signupUser(@Body() user: User) {
    try {
      const response = await this.usersService.createUser(user);
      console.log("ответ", response);
    } catch (error) {
      console.error("Ошибка", error, "конец");
    }
  }

  // @Patch("users/:id")
  // updateUser(@Param("id") id: string, @Body() user: User) {}
  //
  // @Delete("users/:id")
  // deleteUser(@Param("id") id: string) {}
}
