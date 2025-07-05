import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@modules/prisma/prisma.service";
import { CreateTaskDto, PatchTaskDto } from "./tasks.dto";

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

  async getTaskByUuid(uuid: string) {
    return this.prisma.task.findUnique({
      where: { uuid },
    });
  }

  async patchTask(uuid: string, body: PatchTaskDto) {
    const task = await this.prisma.task.findUnique({
      where: { uuid },
    });

    if (!task) {
      throw new NotFoundException("Task not found");
    }

    this.prisma.task.update({
      where: { uuid },
      data: { ...body },
    });
  }
}
