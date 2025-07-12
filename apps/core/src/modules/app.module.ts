import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "@modules/users/users.module";
import { PrismaModule } from "@modules/prisma/prisma.module";
import { AuthorizationModule } from "@modules/authorization/authorization.module";
import { LoggingMiddleware } from "@middlewares/logging.middleware";
import { TasksModule } from "@modules/tasks/tasks.module";

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
