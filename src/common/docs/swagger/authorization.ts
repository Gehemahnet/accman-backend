import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { applyDecorators } from "@nestjs/common";

export const Login = () => applyDecorators();

export const ChangePassword = () => applyDecorators();

export const RequestReset = () =>
  applyDecorators(
    ApiOperation({ summary: "Отправить ссылку для сброса пароля" }),
    ApiBody({
      schema: {
        type: "object",
        properties: {
          email: { type: "string", example: "user@example.com" },
        },
        required: ["email"],
      },
    }),
    ApiResponse({
      status: 200,
      description: "Письмо отправлено (если email существует)",
    }),
  );

export const ResetPassword = () =>
  applyDecorators(
    ApiOperation({ summary: "Сбросить пароль по токену" }),
    ApiBody({
      schema: {
        type: "object",
        properties: {
          userId: {
            type: "string",
            example: "550e8400-e29b-41d4-a716-446655440000",
          },
          token: {
            type: "string",
            example: "a1b2c3d4...",
          },
          newPassword: {
            type: "string",
            example: "NewSecurePassword123!",
            minLength: 8,
          },
        },
        required: ["userId", "token", "newPassword"],
      },
    }),
    ApiResponse({ status: 200, description: "Пароль успешно изменён" }),
    ApiResponse({
      status: 400,
      description: "Неверный токен/пароль или токен просрочен",
    }),
  );
