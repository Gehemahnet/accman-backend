import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TinkoffService } from "@modules/exchange/tinkoff/tinkoff.service";

@Module({
  imports: [
    HttpModule.register({
      baseURL: "https://invest-public-api.tinkoff.ru/rest/",
      headers: {
        Authorization: `Bearer ${process.env.TINKOFF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }),
  ],
  providers: [TinkoffService],
  exports: [TinkoffService],
})
export class TinkoffModule {}
