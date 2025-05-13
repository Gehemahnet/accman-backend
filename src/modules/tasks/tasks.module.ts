import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { JwtService } from "@nestjs/jwt";

@Module({
  providers: [TasksService, JwtService],
  controllers: [TasksController],
})
export class TasksModule {}
