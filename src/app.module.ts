import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "@/users/users.module";
import { PrismaModule } from "@/prisma/prisma.module";
import { ExchangeModule } from "@/exchange/exchange.module";
import { TinkoffModule } from "@/exchange/tinkoff/tinkoff.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    PrismaModule,
    UsersModule,
    ExchangeModule,
  ],
})
export class AppModule {}
