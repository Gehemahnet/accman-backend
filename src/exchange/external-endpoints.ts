//region Tinkoff Investments
const TINKOFF_INVESTMENTS_BASE_URL =
  "https://invest-public-api.tinkoff.ru/rest/";

type TinkoffEndpoints = "getUserAccounts" | "getUserPortfolio";

const tinkoffInvestmentsEndpoints: Record<
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

//endregion
