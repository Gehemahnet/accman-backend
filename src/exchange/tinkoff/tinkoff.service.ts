import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { AxiosRequestConfig } from "axios";

type TinkoffEndpoints = "getUserAccounts" | "getUserPortfolio";

@Injectable()
export class TinkoffService {
  constructor(private readonly httpService: HttpService) {}
  TINKOFF_INVESTMENTS_BASE_URL = "https://invest-public-api.tinkoff.ru/rest/";

  tinkoffInvestmentsEndpoints: Record<
    TinkoffEndpoints,
    {
      url: string;
      httpMethod?: "GET" | "POST";
    }
  > = {
    getUserAccounts: {
      url: "tinkoff.public.invest.api.contract.v1.UsersService/GetAccounts",
    },
    getUserPortfolio: {
      url: "tinkoff.public.invest.api.contract.v1.OperationsService/GetPortfolio",
    },
  };
  private createEndpoint = async (
    methodName: TinkoffEndpoints,
    uuid?: string,
    config?: AxiosRequestConfig,
  ) => {
    let url =
      this.TINKOFF_INVESTMENTS_BASE_URL +
      this.tinkoffInvestmentsEndpoints[methodName].url;

    if (uuid) {
      url += `/${uuid}`;
    }
    console.log(await this.httpService.axiosRef.get(url));
    return await this.httpService.axiosRef.get(url);
  };

  async getUserAccounts() {
    const response = this.createEndpoint("getUserAccounts");
    console.log(response);
  }

  async getUserPortfolio(uuid: string) {
    return this.createEndpoint("getUserPortfolio", uuid);
  }
}
