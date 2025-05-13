import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "@dto/task.dto";
import { UserId } from "@decorators";
import { JwtAuthGuard } from "@guards";
import { ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller("tasks")
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@UserId() userId: string, @Body() data: CreateTaskDto) {
    return this.tasksService.createTask(userId, data);
  }

  @Get()
  getTasks(@UserId() userId: string) {
    return this.tasksService.getUserTasks(userId);
  }
}
