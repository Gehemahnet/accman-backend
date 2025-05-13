import { Injectable } from "@nestjs/common";
import { TinkoffService } from "@modules/exchange/tinkoff/tinkoff.service";
import type {
  V1Account,
  V1PortfolioResponse,
} from "@modules/exchange/tinkoff/tinkoff-api";

type Summary = (V1Account & { portfolio: V1PortfolioResponse })[];

@Injectable()
export class ExchangeService {
  constructor(private tinkoffService: TinkoffService) {}

  async getTinkoffAccountInfo() {
    const { accounts } = await this.tinkoffService.getUserAccounts();

    const summary: Summary = accounts.map((account) => {
      return {
        ...account,
        portfolio: {},
      };
    });

    summary.forEach((account) => {});
    for (const key of summary.keys()) {
      const portfolio = await this.tinkoffService.getUserPortfolio(
        summary[key].id,
      );
      if (portfolio) {
        summary[key].portfolio = portfolio;
      }
    }

    return summary;
  }
}
