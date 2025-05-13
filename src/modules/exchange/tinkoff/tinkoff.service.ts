import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import type { V1GetAccountsResponse, V1PortfolioResponse } from "./tinkoff-api";

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

  async getUserAccounts(): Promise<V1GetAccountsResponse> {
    try {
      const { data } =
        await this.httpService.axiosRef.post<V1GetAccountsResponse>(
          this.tinkoffInvestmentsEndpoints.getUserAccounts,
          {},
        );

      return data;
    } catch (error) {
      console.error("getUserAccountsError", error);
    }
  }

  async getUserPortfolio(uuid: string): Promise<V1PortfolioResponse> {
    try {
      const { data } =
        await this.httpService.axiosRef.post<V1PortfolioResponse>(
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
