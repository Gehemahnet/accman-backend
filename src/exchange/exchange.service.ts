import { Injectable } from "@nestjs/common";
import { TinkoffService } from "@/exchange/tinkoff/tinkoff.service";

@Injectable()
export class ExchangeService {
  constructor(private tinkoffService: TinkoffService) {}

  async getTinkoffAccountInfo() {
    const { accounts }: { accounts: [] } =
      await this.tinkoffService.getUserAccounts();

    const summary = accounts.map((account: { id: string }) => {
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
