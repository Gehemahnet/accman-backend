import { Module } from "@nestjs/common";
import { ExchangeService } from "@/exchange/exchange.service";
import { ExchangeController } from "@/exchange/exchange.controller";
import { TinkoffModule } from "@/exchange/tinkoff/tinkoff.module";

@Module({
  imports: [TinkoffModule],
  controllers: [ExchangeController],
  providers: [ExchangeService],
})
export class ExchangeModule {}
