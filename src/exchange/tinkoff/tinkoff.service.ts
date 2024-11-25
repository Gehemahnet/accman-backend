import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class TinkoffService {
  constructor(private readonly httpService: HttpService) {}

  tinkoffInvestmentsEndpoints: Record<
    "getUserAccounts" | "getUserPortfolio",
    string
  > = {
    getUserAccounts:
      "tinkoff.public.invest.api.contract.v1.UsersService/GetAccounts",
    getUserPortfolio:
      "tinkoff.public.invest.api.contract.v1.OperationsService/GetPortfolio",
  };

  async getUserAccounts() {
    try {
      const { data } = await this.httpService.axiosRef.post(
        this.tinkoffInvestmentsEndpoints.getUserAccounts,
        {},
      );

      return data;
    } catch (error) {
      console.error("getUserAccountsError", error);
    }
  }

  async getUserPortfolio(uuid: string) {
    try {
      const { data } = await this.httpService.axiosRef.post(
        this.tinkoffInvestmentsEndpoints.getUserPortfolio,
        {
          accountId: uuid,
          currency: "RUB",
        },
      );
      return data;
    } catch (error) {
      console.error("getUserPortfolio", error);
    }
  }
}
