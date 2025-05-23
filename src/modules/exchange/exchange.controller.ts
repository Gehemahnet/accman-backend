import { Controller, Get } from "@nestjs/common";
import { ExchangeService } from "@modules/exchange/exchange.service";

@Controller("exchange")
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  @Get("getTinkoffAccountInformation")
  getTinkoffAccountInformation() {
    return this.exchangeService.getTinkoffAccountInfo();
  }
}
