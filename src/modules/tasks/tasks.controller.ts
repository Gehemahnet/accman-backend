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
import { CreateTaskDto, PatchTaskDto } from "./tasks.dto";
import { UserId } from "@decorators";
import { JwtAuthGuard } from "@guards";
import { ApiBearerAuth } from "@nestjs/swagger";
import { PatchTask } from "./tasks.doc";

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
