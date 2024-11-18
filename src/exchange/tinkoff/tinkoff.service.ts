import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { AxiosRequestConfig } from "axios";

@Injectable()
export class TinkoffService {
  constructor(private readonly httpService: HttpService) {}
  private createEndpoint = (
    methodName: TinkoffEndpoints,
    uuid?: string,
    config?: AxiosRequestConfig,
  ) => {
    let url =
      TINKOFF_INVESTMENTS_BASE_URL +
      tinkoffInvestmentsEndpoints[methodName].url;

    if (uuid) {
      url += `/${uuid}`;
    }

    const httpServices = {
      GET: this.httpService.get,
    };
    return this.httpService.get(url, config);
  };

  getUserAccounts() {
    return this.createEndpoint("getUserAccounts");
  }

  getUserPortfolio(uuid: string) {
    return this.createEndpoint("getUserPortfolio", uuid);
  }
}
