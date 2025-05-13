import { Module } from "@nestjs/common";
import { ExchangeService } from "@modules/exchange/exchange.service";
import { ExchangeController } from "@modules/exchange/exchange.controller";
import { TinkoffModule } from "@modules/exchange/tinkoff/tinkoff.module";

@Module({
  imports: [TinkoffModule],
  controllers: [ExchangeController],
  providers: [ExchangeService],
})
export class ExchangeModule {}
