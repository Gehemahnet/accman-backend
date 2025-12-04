import { type INestApplication, ValidationPipe } from "@nestjs/common";

export const useGlobalPipes = (app: INestApplication) =>
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
