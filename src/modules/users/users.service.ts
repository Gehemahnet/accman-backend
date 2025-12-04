import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import type { User } from "src/prisma/generated/client";
import * as bcrypt from "bcrypt";
import type { CreateUserDto, UpdateUserDto } from "./users.dto";
import { PrismaService } from "src/prisma/prisma.service";

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
            username: login.toLowerCase(),
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

  async createUser(data: CreateUserDto): Promise<User> {
    const userExist = await this.prismaService.user.findUnique({
      where: { email: data.email, username: data.username },
    });

    if (userExist) {
      throw new ConflictException("User already exists");
    }

    return this.prismaService.user.create({
      data: {
        ...data,
        username: data.username.toLowerCase(),
        email: data.email.toLowerCase(),
        password: await bcrypt.hash(data.password, 10),
      },
    });
  }

  async updateUser(uuid: string, updateUserDto: UpdateUserDto): Promise<User> {
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
