import { type MiddlewareConsumer, Module, type NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "@modules/users/users.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthorizationModule } from "@modules/authorization/authorization.module";
import { TasksModule } from "@modules/tasks/tasks.module";
import { LoggingMiddleware } from "@middlewares/logging.middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    PrismaModule,
    UsersModule,
    AuthorizationModule,
    TasksModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes("*");
  }
}
