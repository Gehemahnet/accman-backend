import { applyDecorators } from "@nestjs/common";
import {
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  getSchemaPath,
} from "@nestjs/swagger";
import {
  CreateTaskDto,
  GetTaskDto,
  PatchTaskDto,
  TaskType,
} from "@modules/tasks/tasks.dto";

export const TaskExample: GetTaskDto = {
  uuid: "string",
  userId: "string",
  description: "Description",
  date: new Date(),
  name: "TEST TASK NAME",
  type: TaskType.DAY,
};

export const CreateTask = () =>
  applyDecorators(
    ApiOperation({ summary: "Создать задачу" }),
    ApiExtraModels(CreateTaskDto),
    ApiBody({ schema: { $ref: getSchemaPath(CreateTaskDto) } }),
  );

export const GetTasks = () =>
  applyDecorators(
    ApiOperation({ summary: "Получить список задач" }),
    ApiExtraModels(GetTaskDto),
    ApiOkResponse({
      content: {
        "application/json": {
          schema: {
            allOf: [
              {
                properties: {
                  items: {
                    type: "array",
                    items: {
                      $ref: getSchemaPath(GetTaskDto),
                    },
                  },
                },
              },
            ],
          },
          examples: {
            successResponse: {
              value: {
                items: [TaskExample],
              },
            },
          },
        },
      },
    }),
  );

export const GetTask = () =>
  applyDecorators(
    ApiOperation({ summary: "Получить конкретную задачу" }),
    ApiParam({
      name: "uuid",
      description: "Идентификатор задачи",
    }),
    ApiExtraModels(GetTaskDto),
    ApiOkResponse({
      content: {
        "application/json": {
          schema: { $ref: getSchemaPath(GetTaskDto) },
          examples: {
            successResponse: {
              value: {
                items: TaskExample,
              },
            },
          },
        },
      },
    }),
  );

export const PatchTask = () =>
  applyDecorators(
    ApiOperation({ summary: "Обновить задачу" }),
    ApiParam({
      name: "uuid",
      description: "Идентификатор задачи",
    }),
    ApiExtraModels(PatchTaskDto),
    ApiBody({
      schema: { $ref: getSchemaPath(PatchTaskDto) },
    }),
    ApiOkResponse({
      description: "Успешно",
    }),
  );
