import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "@modules/prisma/prisma.service";
import { User, Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findUserByUuid(uuid: string) {
    try {
      return this.prismaService.user.findUnique({
        where: { uuid },
      });
    } catch (error) {
      console.error("error", error);
    }
  }

  async findUserByLogin(login: string): Promise<User | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            userName: login.toLowerCase(),
          },
          {
            email: login.toLowerCase(),
          },
        ],
      },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  }

  async findUsers() {
    try {
      return this.prismaService.user.findMany();
    } catch (error) {
      console.error("error", error);
    }
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const userExist = await this.prismaService.user.findUnique({
      where: { email: data.email, userName: data.userName },
    });

    if (userExist) {
      throw new ConflictException("User already exists");
    }

    return this.prismaService.user.create({
      data: {
        ...data,
        userName: data.userName.toLowerCase(),
        email: data.email.toLowerCase(),
        password: await bcrypt.hash(data.password, 10),
      },
    });
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
