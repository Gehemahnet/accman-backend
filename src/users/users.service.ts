import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { User, Prisma } from "@prisma/client";
import { CreateUserDto, FindUsersByParamsDto } from "@/users/users.dto";

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findUserByUuid(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
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

  async findUserWithParams(filterParams: FindUsersByParamsDto) {
    try {
      const { pagination } = filterParams;
      console.log(pagination);
      const [users, totalNumber] = await this.prismaService.$transaction([
        this.prismaService.user.findMany({
          skip: (pagination.page - 1) * 10,
          take: pagination.count,
        }),
        this.prismaService.user.count(),
      ]);

      console.log(users);

      return {
        users,
        pagination: {
          totalNumber,
          ...pagination,
        },
      };
    } catch (error) {
      console.error("error", error);
    }
  }

  async createUser(data: CreateUserDto): Promise<User> {
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
