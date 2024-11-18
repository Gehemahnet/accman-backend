import { Module } from "@nestjs/common";
import { ExchangeService } from "@/exchange/exchange.service";
import { TinkoffService } from "@/exchange/tinkoff/tinkoff.service";
import { ExchangeController } from "@/exchange/exchange.controller";
//Должно

@Module({
  imports: [TinkoffService],
  controllers: [ExchangeController],
  providers: [ExchangeService],
})
export class ExchangeModule {}
