import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";

enum TaskType {
  TIMED = "TIMED",
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
  YEAR = "YEAR",
}

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskType)
  type: TaskType;

  @IsDateString()
  date: string;
}

export class PatchTaskDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  date?: string;
}
