import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";
import { applyDecorators, HttpStatus } from "@nestjs/common";
import { LoginResponseDto } from "@dto";

export const Login = () =>
  applyDecorators(
    ApiOperation({ summary: "Авторизоваться в системе" }),
    ApiBody({
      schema: {
        type: "object",
        properties: {
          identifier: { type: "string", example: "username" },
          password: { type: "string", example: "password" },
        },
        required: ["identifier", "password"],
      },
    }),
    ApiCreatedResponse({
      description: "Успешно",
      type: LoginResponseDto,
      content: {
        "application/json": {
          examples: {
            successResponse: {
              value: {
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
              },
            },
          },
        },
      },
    }),
  );

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
      status: HttpStatus.OK,
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
    ApiResponse({
      status: HttpStatus.OK,
      description: "Пароль успешно изменён",
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: "Неверный токен/пароль или токен просрочен",
    }),
  );
