import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    try {
      return this.prismaService.user.findUnique({
        where: userWhereUniqueInput,
      });
    } catch (error) {
      console.error("error", error);
    }
  }

  async findUsers() {
    try {
      return this.prismaService.user.findMany();
    } catch (error) {
      console.error("error", error);
    }
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    try {
      const dbResponse = await this.prismaService.user.create({
        data,
      });
      console.log("log", dbResponse);
      return dbResponse;
    } catch (error) {
      console.log("error", error);
    }
  }

  async updateUser(
    uuid: string,
    updateUserDto: Prisma.UserUpdateInput,
  ): Promise<User> {
    try {
      return this.prismaService.user.update({
        where: { uuid },
        data: updateUserDto,
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  async deleteUser(uuid: string) {
    try {
      return this.prismaService.user.delete({
        where: { uuid },
      });
    } catch (error) {
      console.log("error", error);
    }
  }
}
