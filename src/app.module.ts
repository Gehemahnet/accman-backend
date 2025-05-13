import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "@/users/users.module";
import { PrismaModule } from "@/prisma/prisma.module";
import { ExchangeModule } from "@/exchange/exchange.module";
import { AuthorizationModule } from "./authorization/authorization.module";
import { LoggingMiddleware } from "@/middlewares/logging.middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    PrismaModule,
    UsersModule,
    ExchangeModule,
    AuthorizationModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes("*");
  }
}
