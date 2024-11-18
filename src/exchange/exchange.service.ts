import { Injectable } from "@nestjs/common";
import { TinkoffService } from "@/exchange/tinkoff/tinkoff.service";

@Injectable()
export class ExchangeService {
  constructor(private tinkoffService: TinkoffService) {}

  async getTinkoffAccountInfo() {
    return await this.tinkoffService.getUserAccounts();
  }
}
