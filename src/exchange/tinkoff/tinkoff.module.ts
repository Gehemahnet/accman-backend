import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TinkoffService } from "@/exchange/tinkoff/tinkoff.service";

@Module({
  imports: [
    HttpModule.register({
      headers: {
        Authorization: `Bearer ${process.env.TINKOFF_API_TOKEN}`,
      },
    }),
  ],
  exports: [TinkoffService],
})
export class TinkoffModule {}
