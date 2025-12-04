import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import type { CreateTaskDto, PatchTaskDto } from "./tasks.dto";
import { UserId } from "src/decorators";
import { JwtAuthGuard } from "src/guards";
import { ApiBearerAuth } from "@nestjs/swagger";
import { GetTasks, GetTask, PatchTask, CreateTask } from "./tasks.doc";

@ApiBearerAuth()
@Controller("tasks")
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @CreateTask()
  @Post()
  createTask(@UserId() userId: string, @Body() data: CreateTaskDto) {
    return this.tasksService.createTask(userId, data);
  }

  @GetTasks()
  @Get()
  getTasks(@UserId() userId: string) {
    return this.tasksService.getUserTasks(userId);
  }

  @GetTask()
  @Get(":uuid")
  getTask(@Param("uuid") uuid: string) {
    return this.tasksService.getTaskByUuid(uuid);
  }

  @PatchTask()
  @Patch(":uuid")
  patchTask(@Param("uuid") uuid: string, @Body() data: PatchTaskDto) {
    return this.tasksService.patchTask(uuid, data);
  }
}
