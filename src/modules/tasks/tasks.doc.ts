import { applyDecorators } from "@nestjs/common";
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from "@nestjs/swagger";

export const PatchTask = () =>
  applyDecorators(
    ApiOperation({ summary: "Обновить задачу" }),
    ApiParam({
      name: "uuid",
      description: "Идентификатор задачи",
    }),
    ApiBody({
      schema: {
        type: "object",
        properties: {
          name: { type: "string", example: "Почистить картошку" },
          description: {
            type: "string",
            example: "Почистить 25 картошин тупым ножом",
          },
        },
        required: ["identifier", "password"],
      },
    }),
    ApiOkResponse({
      description: "Успешно",
    }),
  );
