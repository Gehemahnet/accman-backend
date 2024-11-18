import { Injectable } from "@nestjs/common";
import { TinkoffService } from "@/exchange/tinkoff/tinkoff.service";

@Injectable()
export class ExchangeService {
  constructor(private tinkoffService: TinkoffService) {}
  // getTinkoff Acc -> portfolio

  getTinkoffAccountInfo() {}
}
