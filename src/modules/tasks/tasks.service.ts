import { Injectable } from "@nestjs/common";
import { PrismaService } from "@modules/prisma/prisma.service";
import { CreateTaskDto } from "@dto/task.dto";

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(userId: string, data: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        ...data,
        user: { connect: { uuid: userId } },
      },
    });
  }

  async getUserTasks(userId: string) {
    return this.prisma.task.findMany({ where: { userId } });
  }
}
