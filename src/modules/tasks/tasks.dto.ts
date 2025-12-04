import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export enum TaskType {
  TIMED = "TIMED",
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
  YEAR = "YEAR",
}

const TaskExample = {
  name: "Почистить картошку",
  description: "Почистить 25 картошин тупым ножом",
  type: TaskType.DAY,
};

export class CreateTaskDto {
  @ApiProperty({
    type: "string",
    example: TaskExample.name,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: "string",
    example: TaskExample.description,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    enum: TaskType,
    description: "Тип задачи по временной сигнатуре",
    example: TaskExample.type,
  })
  @IsEnum(TaskType)
  type: TaskType;

  @ApiProperty({
    type: "string",
    description: "Временная сигнатура",
    example: new Date().toISOString(),
  })
  @IsDateString()
  date: string;
}

export class PatchTaskDto {
  @ApiProperty({
    type: "string",
    example: TaskExample.name,
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    type: "string",
    example: TaskExample.description,
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  date?: string;
}

export class GetTaskDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  name: string;

  @ApiProperty({ enumName: "TaskType", enum: TaskType })
  type: TaskType;
}
