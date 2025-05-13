/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @default "RUB" */
export enum PortfolioRequestCurrencyRequest {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

/** @example {"typeUrl":"typeUrl","value":"value"} */
export interface ProtobufAny {
  typeUrl?: string;
  /**
   * @format byte
   * @pattern ^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$
   */
  value?: string;
}

/** @example {"code":1,"details":[{"typeUrl":"typeUrl","value":"value"},{"typeUrl":"typeUrl","value":"value"}],"message":"message"} */
export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
 * Уровень доступа к счёту.
 * @default "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED"
 */
export enum V1AccessLevel {
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED",
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS",
  ACCOUNT_ACCESS_LEVEL_READ_ONLY = "ACCOUNT_ACCESS_LEVEL_READ_ONLY",
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS = "ACCOUNT_ACCESS_LEVEL_NO_ACCESS",
}

/**
 * Информация о счёте.
 * @example {"openedDate":"2000-01-23T04:56:07.000Z","closedDate":"2000-01-23T04:56:07.000Z","name":"name","id":"id"}
 */
export interface V1Account {
  /** Идентификатор счёта. */
  id?: string;
  /** Тип счёта. */
  type?: V1AccountType;
  /** Название счёта. */
  name?: string;
  /** Статус счёта. */
  status?: V1AccountStatus;
  /**
   * Дата открытия счёта в часовом поясе UTC.
   * @format date-time
   */
  openedDate?: string;
  /**
   * Дата закрытия счёта в часовом поясе UTC.
   * @format date-time
   */
  closedDate?: string;
  /** Уровень доступа к счёту. */
  accessLevel?: V1AccessLevel;
}

/**
 * Статус счёта.
 * @default "ACCOUNT_STATUS_UNSPECIFIED"
 */
export enum V1AccountStatus {
  ACCOUNT_STATUS_UNSPECIFIED = "ACCOUNT_STATUS_UNSPECIFIED",
  ACCOUNT_STATUS_NEW = "ACCOUNT_STATUS_NEW",
  ACCOUNT_STATUS_OPEN = "ACCOUNT_STATUS_OPEN",
  ACCOUNT_STATUS_CLOSED = "ACCOUNT_STATUS_CLOSED",
}

/**
 * Счет клиента.
 * @example {"accountId":"accountId"}
 */
export interface V1AccountSubscriptionStatus {
  accountId?: string;
  /** Результат подписки. */
  subscriptionStatus?: V1PortfolioSubscriptionStatus;
}

/**
 * Тип счёта.
 * @default "ACCOUNT_TYPE_UNSPECIFIED"
 */
export enum V1AccountType {
  ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED",
  ACCOUNT_TYPE_TINKOFF = "ACCOUNT_TYPE_TINKOFF",
  ACCOUNT_TYPE_TINKOFF_IIS = "ACCOUNT_TYPE_TINKOFF_IIS",
  ACCOUNT_TYPE_INVEST_BOX = "ACCOUNT_TYPE_INVEST_BOX",
}

/**
 * Операция начисления купонов.
 * @example {"date":"2000-01-23T04:56:07.000Z","valuePercent":{"nano":6,"units":"units"},"nominal":{"nano":6,"units":"units"},"value":{"nano":6,"units":"units"}}
 */
export interface V1AccruedInterest {
  /** @format date-time */
  date?: string;
  value?: V1Quotation;
  valuePercent?: V1Quotation;
  nominal?: V1Quotation;
}

/**
 * Информация об активе.
 * @example {"uid":"uid","instruments":[{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]},{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]}],"name":"name"}
 */
export interface V1Asset {
  uid?: string;
  /** Тип актива. */
  type?: V1AssetType;
  name?: string;
  instruments?: V1AssetInstrument[];
}

/**
 * Облигация.
 * @example {"indexedNominalFlag":true,"couponQuantityPerYear":0,"currentNominal":{"nano":6,"units":"units"},"taxFreeFlag":true,"returnCondition":"returnCondition","collateralFlag":true,"stateRegDate":"2000-01-23T04:56:07.000Z","issueSizePlan":{"nano":6,"units":"units"},"borrowName":"borrowName","issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"amortizationFlag":true,"perpetualFlag":true,"maturityDate":"2000-01-23T04:56:07.000Z","issueSize":{"nano":6,"units":"units"},"interestKind":"interestKind","subordinatedFlag":true,"nominalCurrency":"nominalCurrency","floatingCouponFlag":true,"placementPrice":{"nano":6,"units":"units"}}
 */
export interface V1AssetBond {
  currentNominal?: V1Quotation;
  borrowName?: string;
  issueSize?: V1Quotation;
  nominal?: V1Quotation;
  nominalCurrency?: string;
  issueKind?: string;
  interestKind?: string;
  /** @format int32 */
  couponQuantityPerYear?: number;
  indexedNominalFlag?: boolean;
  subordinatedFlag?: boolean;
  collateralFlag?: boolean;
  taxFreeFlag?: boolean;
  amortizationFlag?: boolean;
  floatingCouponFlag?: boolean;
  perpetualFlag?: boolean;
  /** @format date-time */
  maturityDate?: string;
  returnCondition?: string;
  /** @format date-time */
  stateRegDate?: string;
  /** @format date-time */
  placementDate?: string;
  placementPrice?: V1Quotation;
  issueSizePlan?: V1Quotation;
}

/**
 * Клиринговый сертификат участия.
 * @example {"nominal":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency"}
 */
export interface V1AssetClearingCertificate {
  nominal?: V1Quotation;
  nominalCurrency?: string;
}

/**
 * Валюта.
 * @example {"baseCurrency":"baseCurrency"}
 */
export interface V1AssetCurrency {
  baseCurrency?: string;
}

/**
 * Фонд.
 * @example {"releasedDate":"2000-01-23T04:56:07.000Z","fixedCommission":{"nano":6,"units":"units"},"numShare":{"nano":6,"units":"units"},"watermarkFlag":true,"description":"description","primaryIndexCompany":"primaryIndexCompany","inavCode":"inavCode","indexRecoveryPeriod":{"nano":6,"units":"units"},"performanceFee":{"nano":6,"units":"units"},"paymentType":"paymentType","managementType":"managementType","primaryIndexTrackingError":{"nano":6,"units":"units"},"nominal":{"nano":6,"units":"units"},"ucitsFlag":true,"expenseCommission":{"nano":6,"units":"units"},"focusType":"focusType","primaryIndexDescription":"primaryIndexDescription","rebalancingPlan":"rebalancingPlan","hurdleRate":{"nano":6,"units":"units"},"primaryIndex":"primaryIndex","leveragedFlag":true,"taxRate":"taxRate","issueKind":"issueKind","sellDiscount":{"nano":6,"units":"units"},"rebalancingDates":["2000-01-23T04:56:07.000Z","2000-01-23T04:56:07.000Z"],"rebalancingFreq":"rebalancingFreq","rebalancingFlag":true,"nominalCurrency":"nominalCurrency","divYieldFlag":true,"totalExpense":{"nano":6,"units":"units"},"buyPremium":{"nano":6,"units":"units"}}
 */
export interface V1AssetEtf {
  totalExpense?: V1Quotation;
  hurdleRate?: V1Quotation;
  performanceFee?: V1Quotation;
  fixedCommission?: V1Quotation;
  paymentType?: string;
  watermarkFlag?: boolean;
  buyPremium?: V1Quotation;
  sellDiscount?: V1Quotation;
  rebalancingFlag?: boolean;
  rebalancingFreq?: string;
  managementType?: string;
  primaryIndex?: string;
  focusType?: string;
  leveragedFlag?: boolean;
  numShare?: V1Quotation;
  ucitsFlag?: boolean;
  /** @format date-time */
  releasedDate?: string;
  description?: string;
  primaryIndexDescription?: string;
  primaryIndexCompany?: string;
  indexRecoveryPeriod?: V1Quotation;
  inavCode?: string;
  divYieldFlag?: boolean;
  expenseCommission?: V1Quotation;
  primaryIndexTrackingError?: V1Quotation;
  rebalancingPlan?: string;
  taxRate?: string;
  rebalancingDates?: string[];
  issueKind?: string;
  nominal?: V1Quotation;
  nominalCurrency?: string;
}

/** @example {"cfi":"cfi","description":"description","uid":"uid","requiredTests":["requiredTests","requiredTests"],"codeNsd":"codeNsd","deletedAt":"2000-01-23T04:56:07.000Z","security":{"etf":{"releasedDate":"2000-01-23T04:56:07.000Z","fixedCommission":{"nano":6,"units":"units"},"numShare":{"nano":6,"units":"units"},"watermarkFlag":true,"description":"description","primaryIndexCompany":"primaryIndexCompany","inavCode":"inavCode","indexRecoveryPeriod":{"nano":6,"units":"units"},"performanceFee":{"nano":6,"units":"units"},"paymentType":"paymentType","managementType":"managementType","primaryIndexTrackingError":{"nano":6,"units":"units"},"nominal":{"nano":6,"units":"units"},"ucitsFlag":true,"expenseCommission":{"nano":6,"units":"units"},"focusType":"focusType","primaryIndexDescription":"primaryIndexDescription","rebalancingPlan":"rebalancingPlan","hurdleRate":{"nano":6,"units":"units"},"primaryIndex":"primaryIndex","leveragedFlag":true,"taxRate":"taxRate","issueKind":"issueKind","sellDiscount":{"nano":6,"units":"units"},"rebalancingDates":["2000-01-23T04:56:07.000Z","2000-01-23T04:56:07.000Z"],"rebalancingFreq":"rebalancingFreq","rebalancingFlag":true,"nominalCurrency":"nominalCurrency","divYieldFlag":true,"totalExpense":{"nano":6,"units":"units"},"buyPremium":{"nano":6,"units":"units"}},"clearingCertificate":{"nominal":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency"},"share":{"totalFloat":{"nano":6,"units":"units"},"dividendRate":{"nano":6,"units":"units"},"registryDate":"2000-01-23T04:56:07.000Z","primaryIndex":"primaryIndex","preferredShareType":"preferredShareType","issueSizePlan":{"nano":6,"units":"units"},"issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"issueSize":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency","divYieldFlag":true,"represIsin":"represIsin","ipoDate":"2000-01-23T04:56:07.000Z"},"type":"type","bond":{"indexedNominalFlag":true,"couponQuantityPerYear":0,"currentNominal":{"nano":6,"units":"units"},"taxFreeFlag":true,"returnCondition":"returnCondition","collateralFlag":true,"stateRegDate":"2000-01-23T04:56:07.000Z","issueSizePlan":{"nano":6,"units":"units"},"borrowName":"borrowName","issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"amortizationFlag":true,"perpetualFlag":true,"maturityDate":"2000-01-23T04:56:07.000Z","issueSize":{"nano":6,"units":"units"},"interestKind":"interestKind","subordinatedFlag":true,"nominalCurrency":"nominalCurrency","floatingCouponFlag":true,"placementPrice":{"nano":6,"units":"units"}},"sp":{"issueSizePlan":{"nano":6,"units":"units"},"borrowName":"borrowName","issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"maturityDate":"2000-01-23T04:56:07.000Z","logicPortfolio":"logicPortfolio","safetyBarrier":{"nano":6,"units":"units"},"basicAsset":"basicAsset","issueSize":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency"},"isin":"isin"},"instruments":[{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]},{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]}],"gosRegCode":"gosRegCode","name":"name","brCodeName":"brCodeName","currency":{"baseCurrency":"baseCurrency"},"brCode":"brCode","brand":{"uid":"uid","name":"name","description":"description","company":"company","sector":"sector","countryOfRiskName":"countryOfRiskName","info":"info","countryOfRisk":"countryOfRisk"},"nameBrief":"nameBrief","status":"status","updatedAt":"2000-01-23T04:56:07.000Z"} */
export interface V1AssetFull {
  uid?: string;
  /** Тип актива. */
  type?: V1AssetType;
  name?: string;
  nameBrief?: string;
  description?: string;
  /** @format date-time */
  deletedAt?: string;
  requiredTests?: string[];
  /** Валюта. */
  currency?: V1AssetCurrency;
  /** Ценная бумага. */
  security?: V1AssetSecurity;
  gosRegCode?: string;
  cfi?: string;
  codeNsd?: string;
  status?: string;
  /** Бренд. */
  brand?: V1Brand;
  /** @format date-time */
  updatedAt?: string;
  brCode?: string;
  brCodeName?: string;
  instruments?: V1AssetInstrument[];
}

/**
 * Идентификаторы инструмента.
 * @example {"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]}
 */
export interface V1AssetInstrument {
  uid?: string;
  figi?: string;
  instrumentType?: string;
  ticker?: string;
  classCode?: string;
  links?: V1InstrumentLink[];
  /** Тип инструмента. */
  instrumentKind?: V1InstrumentType;
  positionUid?: string;
}

/** Запрос актива по идентификатору. */
export interface V1AssetRequest {
  id?: string;
}

/**
 * Данные по активу.
 * @example {"asset":{"cfi":"cfi","description":"description","uid":"uid","requiredTests":["requiredTests","requiredTests"],"codeNsd":"codeNsd","deletedAt":"2000-01-23T04:56:07.000Z","security":{"etf":{"releasedDate":"2000-01-23T04:56:07.000Z","fixedCommission":{"nano":6,"units":"units"},"numShare":{"nano":6,"units":"units"},"watermarkFlag":true,"description":"description","primaryIndexCompany":"primaryIndexCompany","inavCode":"inavCode","indexRecoveryPeriod":{"nano":6,"units":"units"},"performanceFee":{"nano":6,"units":"units"},"paymentType":"paymentType","managementType":"managementType","primaryIndexTrackingError":{"nano":6,"units":"units"},"nominal":{"nano":6,"units":"units"},"ucitsFlag":true,"expenseCommission":{"nano":6,"units":"units"},"focusType":"focusType","primaryIndexDescription":"primaryIndexDescription","rebalancingPlan":"rebalancingPlan","hurdleRate":{"nano":6,"units":"units"},"primaryIndex":"primaryIndex","leveragedFlag":true,"taxRate":"taxRate","issueKind":"issueKind","sellDiscount":{"nano":6,"units":"units"},"rebalancingDates":["2000-01-23T04:56:07.000Z","2000-01-23T04:56:07.000Z"],"rebalancingFreq":"rebalancingFreq","rebalancingFlag":true,"nominalCurrency":"nominalCurrency","divYieldFlag":true,"totalExpense":{"nano":6,"units":"units"},"buyPremium":{"nano":6,"units":"units"}},"clearingCertificate":{"nominal":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency"},"share":{"totalFloat":{"nano":6,"units":"units"},"dividendRate":{"nano":6,"units":"units"},"registryDate":"2000-01-23T04:56:07.000Z","primaryIndex":"primaryIndex","preferredShareType":"preferredShareType","issueSizePlan":{"nano":6,"units":"units"},"issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"issueSize":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency","divYieldFlag":true,"represIsin":"represIsin","ipoDate":"2000-01-23T04:56:07.000Z"},"type":"type","bond":{"indexedNominalFlag":true,"couponQuantityPerYear":0,"currentNominal":{"nano":6,"units":"units"},"taxFreeFlag":true,"returnCondition":"returnCondition","collateralFlag":true,"stateRegDate":"2000-01-23T04:56:07.000Z","issueSizePlan":{"nano":6,"units":"units"},"borrowName":"borrowName","issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"amortizationFlag":true,"perpetualFlag":true,"maturityDate":"2000-01-23T04:56:07.000Z","issueSize":{"nano":6,"units":"units"},"interestKind":"interestKind","subordinatedFlag":true,"nominalCurrency":"nominalCurrency","floatingCouponFlag":true,"placementPrice":{"nano":6,"units":"units"}},"sp":{"issueSizePlan":{"nano":6,"units":"units"},"borrowName":"borrowName","issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"maturityDate":"2000-01-23T04:56:07.000Z","logicPortfolio":"logicPortfolio","safetyBarrier":{"nano":6,"units":"units"},"basicAsset":"basicAsset","issueSize":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency"},"isin":"isin"},"instruments":[{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]},{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]}],"gosRegCode":"gosRegCode","name":"name","brCodeName":"brCodeName","currency":{"baseCurrency":"baseCurrency"},"brCode":"brCode","brand":{"uid":"uid","name":"name","description":"description","company":"company","sector":"sector","countryOfRiskName":"countryOfRiskName","info":"info","countryOfRisk":"countryOfRisk"},"nameBrief":"nameBrief","status":"status","updatedAt":"2000-01-23T04:56:07.000Z"}}
 */
export interface V1AssetResponse {
  asset?: V1AssetFull;
}

/**
 * Ценная бумага.
 * @example {"etf":{"releasedDate":"2000-01-23T04:56:07.000Z","fixedCommission":{"nano":6,"units":"units"},"numShare":{"nano":6,"units":"units"},"watermarkFlag":true,"description":"description","primaryIndexCompany":"primaryIndexCompany","inavCode":"inavCode","indexRecoveryPeriod":{"nano":6,"units":"units"},"performanceFee":{"nano":6,"units":"units"},"paymentType":"paymentType","managementType":"managementType","primaryIndexTrackingError":{"nano":6,"units":"units"},"nominal":{"nano":6,"units":"units"},"ucitsFlag":true,"expenseCommission":{"nano":6,"units":"units"},"focusType":"focusType","primaryIndexDescription":"primaryIndexDescription","rebalancingPlan":"rebalancingPlan","hurdleRate":{"nano":6,"units":"units"},"primaryIndex":"primaryIndex","leveragedFlag":true,"taxRate":"taxRate","issueKind":"issueKind","sellDiscount":{"nano":6,"units":"units"},"rebalancingDates":["2000-01-23T04:56:07.000Z","2000-01-23T04:56:07.000Z"],"rebalancingFreq":"rebalancingFreq","rebalancingFlag":true,"nominalCurrency":"nominalCurrency","divYieldFlag":true,"totalExpense":{"nano":6,"units":"units"},"buyPremium":{"nano":6,"units":"units"}},"clearingCertificate":{"nominal":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency"},"share":{"totalFloat":{"nano":6,"units":"units"},"dividendRate":{"nano":6,"units":"units"},"registryDate":"2000-01-23T04:56:07.000Z","primaryIndex":"primaryIndex","preferredShareType":"preferredShareType","issueSizePlan":{"nano":6,"units":"units"},"issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"issueSize":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency","divYieldFlag":true,"represIsin":"represIsin","ipoDate":"2000-01-23T04:56:07.000Z"},"type":"type","bond":{"indexedNominalFlag":true,"couponQuantityPerYear":0,"currentNominal":{"nano":6,"units":"units"},"taxFreeFlag":true,"returnCondition":"returnCondition","collateralFlag":true,"stateRegDate":"2000-01-23T04:56:07.000Z","issueSizePlan":{"nano":6,"units":"units"},"borrowName":"borrowName","issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"amortizationFlag":true,"perpetualFlag":true,"maturityDate":"2000-01-23T04:56:07.000Z","issueSize":{"nano":6,"units":"units"},"interestKind":"interestKind","subordinatedFlag":true,"nominalCurrency":"nominalCurrency","floatingCouponFlag":true,"placementPrice":{"nano":6,"units":"units"}},"sp":{"issueSizePlan":{"nano":6,"units":"units"},"borrowName":"borrowName","issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"maturityDate":"2000-01-23T04:56:07.000Z","logicPortfolio":"logicPortfolio","safetyBarrier":{"nano":6,"units":"units"},"basicAsset":"basicAsset","issueSize":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency"},"isin":"isin"}
 */
export interface V1AssetSecurity {
  isin?: string;
  type?: string;
  /** Тип инструмента. */
  instrumentKind?: V1InstrumentType;
  /** Акция. */
  share?: V1AssetShare;
  /** Облигация. */
  bond?: V1AssetBond;
  /** Структурная нота. */
  sp?: V1AssetStructuredProduct;
  /** Фонд. */
  etf?: V1AssetEtf;
  /** Клиринговый сертификат участия. */
  clearingCertificate?: V1AssetClearingCertificate;
}

/**
 * Акция.
 * @example {"totalFloat":{"nano":6,"units":"units"},"dividendRate":{"nano":6,"units":"units"},"registryDate":"2000-01-23T04:56:07.000Z","primaryIndex":"primaryIndex","preferredShareType":"preferredShareType","issueSizePlan":{"nano":6,"units":"units"},"issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"issueSize":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency","divYieldFlag":true,"represIsin":"represIsin","ipoDate":"2000-01-23T04:56:07.000Z"}
 */
export interface V1AssetShare {
  /** Тип акций. */
  type?: V1ShareType;
  issueSize?: V1Quotation;
  nominal?: V1Quotation;
  nominalCurrency?: string;
  primaryIndex?: string;
  dividendRate?: V1Quotation;
  preferredShareType?: string;
  /** @format date-time */
  ipoDate?: string;
  /** @format date-time */
  registryDate?: string;
  divYieldFlag?: boolean;
  issueKind?: string;
  /** @format date-time */
  placementDate?: string;
  represIsin?: string;
  issueSizePlan?: V1Quotation;
  totalFloat?: V1Quotation;
}

/**
 * Структурная нота.
 * @example {"issueSizePlan":{"nano":6,"units":"units"},"borrowName":"borrowName","issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","nominal":{"nano":6,"units":"units"},"maturityDate":"2000-01-23T04:56:07.000Z","logicPortfolio":"logicPortfolio","safetyBarrier":{"nano":6,"units":"units"},"basicAsset":"basicAsset","issueSize":{"nano":6,"units":"units"},"nominalCurrency":"nominalCurrency"}
 */
export interface V1AssetStructuredProduct {
  borrowName?: string;
  nominal?: V1Quotation;
  nominalCurrency?: string;
  /** Тип структурной ноты. */
  type?: V1StructuredProductType;
  logicPortfolio?: string;
  /** Тип актива. */
  assetType?: V1AssetType;
  basicAsset?: string;
  safetyBarrier?: V1Quotation;
  /** @format date-time */
  maturityDate?: string;
  issueSizePlan?: V1Quotation;
  issueSize?: V1Quotation;
  /** @format date-time */
  placementDate?: string;
  issueKind?: string;
}

/**
 * Тип актива.
 * @default "ASSET_TYPE_UNSPECIFIED"
 */
export enum V1AssetType {
  ASSET_TYPE_UNSPECIFIED = "ASSET_TYPE_UNSPECIFIED",
  ASSET_TYPE_CURRENCY = "ASSET_TYPE_CURRENCY",
  ASSET_TYPE_COMMODITY = "ASSET_TYPE_COMMODITY",
  ASSET_TYPE_INDEX = "ASSET_TYPE_INDEX",
  ASSET_TYPE_SECURITY = "ASSET_TYPE_SECURITY",
}

/** Запрос списка активов. */
export interface V1AssetsRequest {
  /** Тип инструмента. */
  instrumentType?: V1InstrumentType;
}

/**
 * Список активов.
 * @example {"assets":[{"uid":"uid","instruments":[{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]},{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]}],"name":"name"},{"uid":"uid","instruments":[{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]},{"uid":"uid","classCode":"classCode","instrumentType":"instrumentType","ticker":"ticker","positionUid":"positionUid","figi":"figi","links":[{"instrumentUid":"instrumentUid","type":"type"},{"instrumentUid":"instrumentUid","type":"type"}]}],"name":"name"}]}
 */
export interface V1AssetsResponse {
  assets?: V1Asset[];
}

/**
 * Объект передачи информации об облигации.
 * @example {"countryOfRisk":"countryOfRisk","blockedTcaFlag":true,"maturityDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"first1dayCandleDate":"2000-01-23T04:56:07.000Z","placementPrice":{"nano":5,"currency":"currency","units":"units"},"sector":"sector","liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","shortEnabledFlag":true,"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","subordinatedFlag":true,"floatingCouponFlag":true,"figi":"figi","dshortMin":{"nano":6,"units":"units"},"lot":0,"uid":"uid","dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"currency":"currency","aciValue":{"nano":5,"currency":"currency","units":"units"},"buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","couponQuantityPerYear":1,"forQualInvestorFlag":true,"initialNominal":{"nano":5,"currency":"currency","units":"units"},"apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","stateRegDate":"2000-01-23T04:56:07.000Z","issueSizePlan":"issueSizePlan","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","amortizationFlag":true,"perpetualFlag":true,"issueSize":"issueSize","countryOfRiskName":"countryOfRiskName","isin":"isin"}
 */
export interface V1Bond {
  figi?: string;
  ticker?: string;
  classCode?: string;
  isin?: string;
  /** @format int32 */
  lot?: number;
  currency?: string;
  klong?: V1Quotation;
  kshort?: V1Quotation;
  dlong?: V1Quotation;
  dshort?: V1Quotation;
  dlongMin?: V1Quotation;
  dshortMin?: V1Quotation;
  shortEnabledFlag?: boolean;
  name?: string;
  exchange?: string;
  /** @format int32 */
  couponQuantityPerYear?: number;
  /** @format date-time */
  maturityDate?: string;
  nominal?: V1MoneyValue;
  initialNominal?: V1MoneyValue;
  /** @format date-time */
  stateRegDate?: string;
  /** @format date-time */
  placementDate?: string;
  placementPrice?: V1MoneyValue;
  aciValue?: V1MoneyValue;
  countryOfRisk?: string;
  countryOfRiskName?: string;
  sector?: string;
  issueKind?: string;
  /** @format int64 */
  issueSize?: string;
  /** @format int64 */
  issueSizePlan?: string;
  tradingStatus?: V1SecurityTradingStatus;
  otcFlag?: boolean;
  buyAvailableFlag?: boolean;
  sellAvailableFlag?: boolean;
  floatingCouponFlag?: boolean;
  perpetualFlag?: boolean;
  amortizationFlag?: boolean;
  minPriceIncrement?: V1Quotation;
  apiTradeAvailableFlag?: boolean;
  uid?: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange?: V1RealExchange;
  positionUid?: string;
  forIisFlag?: boolean;
  forQualInvestorFlag?: boolean;
  weekendFlag?: boolean;
  blockedTcaFlag?: boolean;
  subordinatedFlag?: boolean;
  liquidityFlag?: boolean;
  /** @format date-time */
  first1minCandleDate?: string;
  /** @format date-time */
  first1dayCandleDate?: string;
  /** Уровень риска облигации. */
  riskLevel?: V1RiskLevel;
}

/**
 * Информация об облигации.
 * @example {"instrument":{"countryOfRisk":"countryOfRisk","blockedTcaFlag":true,"maturityDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"first1dayCandleDate":"2000-01-23T04:56:07.000Z","placementPrice":{"nano":5,"currency":"currency","units":"units"},"sector":"sector","liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","shortEnabledFlag":true,"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","subordinatedFlag":true,"floatingCouponFlag":true,"figi":"figi","dshortMin":{"nano":6,"units":"units"},"lot":0,"uid":"uid","dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"currency":"currency","aciValue":{"nano":5,"currency":"currency","units":"units"},"buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","couponQuantityPerYear":1,"forQualInvestorFlag":true,"initialNominal":{"nano":5,"currency":"currency","units":"units"},"apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","stateRegDate":"2000-01-23T04:56:07.000Z","issueSizePlan":"issueSizePlan","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","amortizationFlag":true,"perpetualFlag":true,"issueSize":"issueSize","countryOfRiskName":"countryOfRiskName","isin":"isin"}}
 */
export interface V1BondResponse {
  /** Объект передачи информации об облигации. */
  instrument?: V1Bond;
}

/**
 * Список облигаций.
 * @example {"instruments":[{"countryOfRisk":"countryOfRisk","blockedTcaFlag":true,"maturityDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"first1dayCandleDate":"2000-01-23T04:56:07.000Z","placementPrice":{"nano":5,"currency":"currency","units":"units"},"sector":"sector","liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","shortEnabledFlag":true,"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","subordinatedFlag":true,"floatingCouponFlag":true,"figi":"figi","dshortMin":{"nano":6,"units":"units"},"lot":0,"uid":"uid","dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"currency":"currency","aciValue":{"nano":5,"currency":"currency","units":"units"},"buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","couponQuantityPerYear":1,"forQualInvestorFlag":true,"initialNominal":{"nano":5,"currency":"currency","units":"units"},"apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","stateRegDate":"2000-01-23T04:56:07.000Z","issueSizePlan":"issueSizePlan","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","amortizationFlag":true,"perpetualFlag":true,"issueSize":"issueSize","countryOfRiskName":"countryOfRiskName","isin":"isin"},{"countryOfRisk":"countryOfRisk","blockedTcaFlag":true,"maturityDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"first1dayCandleDate":"2000-01-23T04:56:07.000Z","placementPrice":{"nano":5,"currency":"currency","units":"units"},"sector":"sector","liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","shortEnabledFlag":true,"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","subordinatedFlag":true,"floatingCouponFlag":true,"figi":"figi","dshortMin":{"nano":6,"units":"units"},"lot":0,"uid":"uid","dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"currency":"currency","aciValue":{"nano":5,"currency":"currency","units":"units"},"buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","couponQuantityPerYear":1,"forQualInvestorFlag":true,"initialNominal":{"nano":5,"currency":"currency","units":"units"},"apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","stateRegDate":"2000-01-23T04:56:07.000Z","issueSizePlan":"issueSizePlan","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"issueKind":"issueKind","placementDate":"2000-01-23T04:56:07.000Z","amortizationFlag":true,"perpetualFlag":true,"issueSize":"issueSize","countryOfRiskName":"countryOfRiskName","isin":"isin"}]}
 */
export interface V1BondsResponse {
  instruments?: V1Bond[];
}

/**
 * Бренд.
 * @example {"uid":"uid","name":"name","description":"description","company":"company","sector":"sector","countryOfRiskName":"countryOfRiskName","info":"info","countryOfRisk":"countryOfRisk"}
 */
export interface V1Brand {
  uid?: string;
  name?: string;
  description?: string;
  info?: string;
  company?: string;
  sector?: string;
  countryOfRisk?: string;
  countryOfRiskName?: string;
}

/** @example {"exchangeClearingCommission":{"nano":5,"currency":"currency","units":"units"},"separateAgreementDate":"separateAgreementDate","orderId":"orderId","figi":"figi","executeSign":"executeSign","brokerCommission":{"nano":5,"currency":"currency","units":"units"},"repoRate":{"nano":6,"units":"units"},"orderAmount":{"nano":5,"currency":"currency","units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"aciValue":{"nano":6,"units":"units"},"secValueDate":"2000-01-23T04:56:07.000Z","direction":"direction","classCode":"classCode","ticker":"ticker","quantity":"quantity","deliveryType":"deliveryType","tradeDatetime":"2000-01-23T04:56:07.000Z","exchangeCommission":{"nano":5,"currency":"currency","units":"units"},"brokerStatus":"brokerStatus","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"separateAgreementNumber":"separateAgreementNumber","clearValueDate":"2000-01-23T04:56:07.000Z","name":"name","exchange":"exchange","separateAgreementType":"separateAgreementType","tradeId":"tradeId","party":"party"} */
export interface V1BrokerReport {
  tradeId?: string;
  orderId?: string;
  figi?: string;
  executeSign?: string;
  /** @format date-time */
  tradeDatetime?: string;
  exchange?: string;
  classCode?: string;
  direction?: string;
  name?: string;
  ticker?: string;
  price?: V1MoneyValue;
  /** @format int64 */
  quantity?: string;
  orderAmount?: V1MoneyValue;
  aciValue?: V1Quotation;
  totalOrderAmount?: V1MoneyValue;
  brokerCommission?: V1MoneyValue;
  exchangeCommission?: V1MoneyValue;
  exchangeClearingCommission?: V1MoneyValue;
  repoRate?: V1Quotation;
  party?: string;
  /** @format date-time */
  clearValueDate?: string;
  /** @format date-time */
  secValueDate?: string;
  brokerStatus?: string;
  separateAgreementType?: string;
  separateAgreementNumber?: string;
  separateAgreementDate?: string;
  deliveryType?: string;
}

export interface V1BrokerReportRequest {
  generateBrokerReportRequest?: V1GenerateBrokerReportRequest;
  getBrokerReportRequest?: V1GetBrokerReportRequest;
}

/** @example {"generateBrokerReportResponse":{"taskId":"taskId"},"getBrokerReportResponse":{"brokerReport":[{"exchangeClearingCommission":{"nano":5,"currency":"currency","units":"units"},"separateAgreementDate":"separateAgreementDate","orderId":"orderId","figi":"figi","executeSign":"executeSign","brokerCommission":{"nano":5,"currency":"currency","units":"units"},"repoRate":{"nano":6,"units":"units"},"orderAmount":{"nano":5,"currency":"currency","units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"aciValue":{"nano":6,"units":"units"},"secValueDate":"2000-01-23T04:56:07.000Z","direction":"direction","classCode":"classCode","ticker":"ticker","quantity":"quantity","deliveryType":"deliveryType","tradeDatetime":"2000-01-23T04:56:07.000Z","exchangeCommission":{"nano":5,"currency":"currency","units":"units"},"brokerStatus":"brokerStatus","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"separateAgreementNumber":"separateAgreementNumber","clearValueDate":"2000-01-23T04:56:07.000Z","name":"name","exchange":"exchange","separateAgreementType":"separateAgreementType","tradeId":"tradeId","party":"party"},{"exchangeClearingCommission":{"nano":5,"currency":"currency","units":"units"},"separateAgreementDate":"separateAgreementDate","orderId":"orderId","figi":"figi","executeSign":"executeSign","brokerCommission":{"nano":5,"currency":"currency","units":"units"},"repoRate":{"nano":6,"units":"units"},"orderAmount":{"nano":5,"currency":"currency","units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"aciValue":{"nano":6,"units":"units"},"secValueDate":"2000-01-23T04:56:07.000Z","direction":"direction","classCode":"classCode","ticker":"ticker","quantity":"quantity","deliveryType":"deliveryType","tradeDatetime":"2000-01-23T04:56:07.000Z","exchangeCommission":{"nano":5,"currency":"currency","units":"units"},"brokerStatus":"brokerStatus","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"separateAgreementNumber":"separateAgreementNumber","clearValueDate":"2000-01-23T04:56:07.000Z","name":"name","exchange":"exchange","separateAgreementType":"separateAgreementType","tradeId":"tradeId","party":"party"}],"pagesCount":6,"page":1,"itemsCount":0}} */
export interface V1BrokerReportResponse {
  generateBrokerReportResponse?: V1GenerateBrokerReportResponse;
  getBrokerReportResponse?: V1GetBrokerReportResponse;
}

/** Запрос отмены торгового поручения. */
export interface V1CancelOrderRequest {
  accountId?: string;
  orderId?: string;
}

/**
 * Результат отмены торгового поручения.
 * @example {"time":"2000-01-23T04:56:07.000Z"}
 */
export interface V1CancelOrderResponse {
  /** @format date-time */
  time?: string;
}

/** Запрос отмены выставленной стоп-заявки. */
export interface V1CancelStopOrderRequest {
  accountId?: string;
  stopOrderId?: string;
}

/**
 * Результат отмены выставленной стоп-заявки.
 * @example {"time":"2000-01-23T04:56:07.000Z"}
 */
export interface V1CancelStopOrderResponse {
  /** @format date-time */
  time?: string;
}

/**
 * Пакет свечей в рамках стрима.
 * @example {"volume":"volume","high":{"nano":6,"units":"units"},"lastTradeTs":"2000-01-23T04:56:07.000Z","low":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z","close":{"nano":6,"units":"units"},"open":{"nano":6,"units":"units"}}
 */
export interface V1Candle {
  figi?: string;
  /** Интервал свечи. */
  interval?: V1SubscriptionInterval;
  open?: V1Quotation;
  high?: V1Quotation;
  low?: V1Quotation;
  close?: V1Quotation;
  /** @format int64 */
  volume?: string;
  /** @format date-time */
  time?: string;
  /** @format date-time */
  lastTradeTs?: string;
  instrumentUid?: string;
}

/** Запрос изменения статус подписки на свечи. */
export interface V1CandleInstrument {
  figi?: string;
  /** Интервал свечи. */
  interval?: V1SubscriptionInterval;
  instrumentId?: string;
}

/**
 * Интервал свечей.
 * @default "CANDLE_INTERVAL_UNSPECIFIED"
 */
export enum V1CandleInterval {
  CANDLE_INTERVAL_UNSPECIFIED = "CANDLE_INTERVAL_UNSPECIFIED",
  CANDLEINTERVAL1MIN = "CANDLE_INTERVAL_1_MIN",
  CANDLEINTERVAL5MIN = "CANDLE_INTERVAL_5_MIN",
  CANDLEINTERVAL15MIN = "CANDLE_INTERVAL_15_MIN",
  CANDLE_INTERVAL_HOUR = "CANDLE_INTERVAL_HOUR",
  CANDLE_INTERVAL_DAY = "CANDLE_INTERVAL_DAY",
  CANDLEINTERVAL2MIN = "CANDLE_INTERVAL_2_MIN",
  CANDLEINTERVAL3MIN = "CANDLE_INTERVAL_3_MIN",
  CANDLEINTERVAL10MIN = "CANDLE_INTERVAL_10_MIN",
  CANDLEINTERVAL30MIN = "CANDLE_INTERVAL_30_MIN",
  CANDLEINTERVAL2HOUR = "CANDLE_INTERVAL_2_HOUR",
  CANDLEINTERVAL4HOUR = "CANDLE_INTERVAL_4_HOUR",
  CANDLE_INTERVAL_WEEK = "CANDLE_INTERVAL_WEEK",
  CANDLE_INTERVAL_MONTH = "CANDLE_INTERVAL_MONTH",
}

/**
 * Статус подписки на свечи.
 * @example {"instrumentUid":"instrumentUid","figi":"figi"}
 */
export interface V1CandleSubscription {
  figi?: string;
  /** Интервал свечи. */
  interval?: V1SubscriptionInterval;
  /** Результат подписки. */
  subscriptionStatus?: V1SubscriptionStatus;
  instrumentUid?: string;
}

/** Запрос закрытия счёта в песочнице. */
export interface V1CloseSandboxAccountRequest {
  accountId?: string;
}

/** Результат закрытия счёта в песочнице. */
export type V1CloseSandboxAccountResponse = object;

/**
 * Данные о стране.
 * @example {"alfaTwo":"alfaTwo","alfaThree":"alfaThree","name":"name","nameBrief":"nameBrief"}
 */
export interface V1CountryResponse {
  alfaTwo?: string;
  alfaThree?: string;
  name?: string;
  nameBrief?: string;
}

/**
 * Объект передачи информации о купоне облигации.
 * @example {"fixDate":"2000-01-23T04:56:07.000Z","couponPeriod":0,"couponNumber":"couponNumber","couponEndDate":"2000-01-23T04:56:07.000Z","figi":"figi","couponDate":"2000-01-23T04:56:07.000Z","couponStartDate":"2000-01-23T04:56:07.000Z","payOneBond":{"nano":5,"currency":"currency","units":"units"}}
 */
export interface V1Coupon {
  figi?: string;
  /** @format date-time */
  couponDate?: string;
  /** @format int64 */
  couponNumber?: string;
  /** @format date-time */
  fixDate?: string;
  payOneBond?: V1MoneyValue;
  /** Тип купонов. */
  couponType?: V1CouponType;
  /** @format date-time */
  couponStartDate?: string;
  /** @format date-time */
  couponEndDate?: string;
  /** @format int32 */
  couponPeriod?: number;
}

/**
 * Тип купонов.
 * @default "COUPON_TYPE_UNSPECIFIED"
 */
export enum V1CouponType {
  COUPON_TYPE_UNSPECIFIED = "COUPON_TYPE_UNSPECIFIED",
  COUPON_TYPE_CONSTANT = "COUPON_TYPE_CONSTANT",
  COUPON_TYPE_FLOATING = "COUPON_TYPE_FLOATING",
  COUPON_TYPE_DISCOUNT = "COUPON_TYPE_DISCOUNT",
  COUPON_TYPE_MORTGAGE = "COUPON_TYPE_MORTGAGE",
  COUPON_TYPE_FIX = "COUPON_TYPE_FIX",
  COUPON_TYPE_VARIABLE = "COUPON_TYPE_VARIABLE",
  COUPON_TYPE_OTHER = "COUPON_TYPE_OTHER",
}

/**
 * Данные по валютам.
 * @example {"instruments":[{"isoCurrencyName":"isoCurrencyName","figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"},{"isoCurrencyName":"isoCurrencyName","figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"}]}
 */
export interface V1CurrenciesResponse {
  instruments?: V1Currency[];
}

/**
 * Объект передачи информации о валюте.
 * @example {"isoCurrencyName":"isoCurrencyName","figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"}
 */
export interface V1Currency {
  figi?: string;
  ticker?: string;
  classCode?: string;
  isin?: string;
  /** @format int32 */
  lot?: number;
  currency?: string;
  klong?: V1Quotation;
  kshort?: V1Quotation;
  dlong?: V1Quotation;
  dshort?: V1Quotation;
  dlongMin?: V1Quotation;
  dshortMin?: V1Quotation;
  shortEnabledFlag?: boolean;
  name?: string;
  exchange?: string;
  nominal?: V1MoneyValue;
  countryOfRisk?: string;
  countryOfRiskName?: string;
  tradingStatus?: V1SecurityTradingStatus;
  otcFlag?: boolean;
  buyAvailableFlag?: boolean;
  sellAvailableFlag?: boolean;
  isoCurrencyName?: string;
  minPriceIncrement?: V1Quotation;
  apiTradeAvailableFlag?: boolean;
  uid?: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange?: V1RealExchange;
  positionUid?: string;
  forIisFlag?: boolean;
  forQualInvestorFlag?: boolean;
  weekendFlag?: boolean;
  blockedTcaFlag?: boolean;
  /** @format date-time */
  first1minCandleDate?: string;
  /** @format date-time */
  first1dayCandleDate?: string;
}

/**
 * Данные по валюте.
 * @example {"instrument":{"isoCurrencyName":"isoCurrencyName","figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"}}
 */
export interface V1CurrencyResponse {
  /** Объект передачи информации о валюте. */
  instrument?: V1Currency;
}

/**
 * Информация о выплате.
 * @example {"declaredDate":"2000-01-23T04:56:07.000Z","createdAt":"2000-01-23T04:56:07.000Z","recordDate":"2000-01-23T04:56:07.000Z","yieldValue":{"nano":6,"units":"units"},"closePrice":{"nano":5,"currency":"currency","units":"units"},"paymentDate":"2000-01-23T04:56:07.000Z","regularity":"regularity","dividendNet":{"nano":5,"currency":"currency","units":"units"},"lastBuyDate":"2000-01-23T04:56:07.000Z","dividendType":"dividendType"}
 */
export interface V1Dividend {
  dividendNet?: V1MoneyValue;
  /** @format date-time */
  paymentDate?: string;
  /** @format date-time */
  declaredDate?: string;
  /** @format date-time */
  lastBuyDate?: string;
  dividendType?: string;
  /** @format date-time */
  recordDate?: string;
  regularity?: string;
  closePrice?: V1MoneyValue;
  yieldValue?: V1Quotation;
  /** @format date-time */
  createdAt?: string;
}

/**
 * Отчёт "Справка о доходах за пределами РФ".
 * @example {"issuerCountry":"issuerCountry","externalCommission":{"nano":6,"units":"units"},"securityName":"securityName","dividendGross":{"nano":6,"units":"units"},"quantity":"quantity","dividendAmount":{"nano":6,"units":"units"},"recordDate":"2000-01-23T04:56:07.000Z","dividend":{"nano":6,"units":"units"},"tax":{"nano":6,"units":"units"},"currency":"currency","paymentDate":"2000-01-23T04:56:07.000Z","isin":"isin"}
 */
export interface V1DividendsForeignIssuerReport {
  /** @format date-time */
  recordDate?: string;
  /** @format date-time */
  paymentDate?: string;
  securityName?: string;
  isin?: string;
  issuerCountry?: string;
  /** @format int64 */
  quantity?: string;
  dividend?: V1Quotation;
  externalCommission?: V1Quotation;
  dividendGross?: V1Quotation;
  tax?: V1Quotation;
  dividendAmount?: V1Quotation;
  currency?: string;
}

/**
 * Тип действия со списком избранных инструментов.
 * @default "EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED"
 */
export enum V1EditFavoritesActionType {
  EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED = "EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED",
  EDIT_FAVORITES_ACTION_TYPE_ADD = "EDIT_FAVORITES_ACTION_TYPE_ADD",
  EDIT_FAVORITES_ACTION_TYPE_DEL = "EDIT_FAVORITES_ACTION_TYPE_DEL",
}

/** Запрос редактирования списка избранных инструментов. */
export interface V1EditFavoritesRequest {
  instruments?: V1EditFavoritesRequestInstrument[];
  /** Тип действия со списком избранных инструментов. */
  actionType?: V1EditFavoritesActionType;
}

/** Массив инструментов для редактирования списка избранных инструментов. */
export interface V1EditFavoritesRequestInstrument {
  figi?: string;
}

/**
 * Результат редактирования списка избранных инструментов.
 * @example {"favoriteInstruments":[{"otcFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","figi":"figi","apiTradeAvailableFlag":true,"isin":"isin"},{"otcFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","figi":"figi","apiTradeAvailableFlag":true,"isin":"isin"}]}
 */
export interface V1EditFavoritesResponse {
  favoriteInstruments?: V1FavoriteInstrument[];
}

/**
 * Объект передачи информации об инвестиционном фонде.
 * @example {"releasedDate":"2000-01-23T04:56:07.000Z","fixedCommission":{"nano":6,"units":"units"},"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","focusType":"focusType","ticker":"ticker","forQualInvestorFlag":true,"liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"rebalancingFreq":"rebalancingFreq","name":"name","numShares":{"nano":6,"units":"units"},"exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"}
 */
export interface V1Etf {
  figi?: string;
  ticker?: string;
  classCode?: string;
  isin?: string;
  /** @format int32 */
  lot?: number;
  currency?: string;
  klong?: V1Quotation;
  kshort?: V1Quotation;
  dlong?: V1Quotation;
  dshort?: V1Quotation;
  dlongMin?: V1Quotation;
  dshortMin?: V1Quotation;
  shortEnabledFlag?: boolean;
  name?: string;
  exchange?: string;
  fixedCommission?: V1Quotation;
  focusType?: string;
  /** @format date-time */
  releasedDate?: string;
  numShares?: V1Quotation;
  countryOfRisk?: string;
  countryOfRiskName?: string;
  sector?: string;
  rebalancingFreq?: string;
  tradingStatus?: V1SecurityTradingStatus;
  otcFlag?: boolean;
  buyAvailableFlag?: boolean;
  sellAvailableFlag?: boolean;
  minPriceIncrement?: V1Quotation;
  apiTradeAvailableFlag?: boolean;
  uid?: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange?: V1RealExchange;
  positionUid?: string;
  forIisFlag?: boolean;
  forQualInvestorFlag?: boolean;
  weekendFlag?: boolean;
  blockedTcaFlag?: boolean;
  liquidityFlag?: boolean;
  /** @format date-time */
  first1minCandleDate?: string;
  /** @format date-time */
  first1dayCandleDate?: string;
}

/**
 * Данные по фонду.
 * @example {"instrument":{"releasedDate":"2000-01-23T04:56:07.000Z","fixedCommission":{"nano":6,"units":"units"},"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","focusType":"focusType","ticker":"ticker","forQualInvestorFlag":true,"liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"rebalancingFreq":"rebalancingFreq","name":"name","numShares":{"nano":6,"units":"units"},"exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"}}
 */
export interface V1EtfResponse {
  /** Объект передачи информации об инвестиционном фонде. */
  instrument?: V1Etf;
}

/**
 * Данные по фондам.
 * @example {"instruments":[{"releasedDate":"2000-01-23T04:56:07.000Z","fixedCommission":{"nano":6,"units":"units"},"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","focusType":"focusType","ticker":"ticker","forQualInvestorFlag":true,"liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"rebalancingFreq":"rebalancingFreq","name":"name","numShares":{"nano":6,"units":"units"},"exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"},{"releasedDate":"2000-01-23T04:56:07.000Z","fixedCommission":{"nano":6,"units":"units"},"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","focusType":"focusType","ticker":"ticker","forQualInvestorFlag":true,"liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"rebalancingFreq":"rebalancingFreq","name":"name","numShares":{"nano":6,"units":"units"},"exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"}]}
 */
export interface V1EtfsResponse {
  instruments?: V1Etf[];
}

/**
 * Массив избранных инструментов.
 * @example {"otcFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","figi":"figi","apiTradeAvailableFlag":true,"isin":"isin"}
 */
export interface V1FavoriteInstrument {
  figi?: string;
  ticker?: string;
  classCode?: string;
  isin?: string;
  instrumentType?: string;
  otcFlag?: boolean;
  apiTradeAvailableFlag?: boolean;
  /** Тип инструмента. */
  instrumentKind?: V1InstrumentType;
}

/** Параметры фильтрации опционов */
export interface V1FilterOptionsRequest {
  basicAssetUid?: string;
  basicAssetPositionUid?: string;
}

/** Запрос на поиск инструментов. */
export interface V1FindInstrumentRequest {
  query?: string;
  /** Тип инструмента. */
  instrumentKind?: V1InstrumentType;
  apiTradeAvailableFlag?: boolean;
}

/**
 * Результат поиска инструментов.
 * @example {"instruments":[{"weekendFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","figi":"figi","apiTradeAvailableFlag":true,"first1minCandleDate":"2000-01-23T04:56:07.000Z","uid":"uid","blockedTcaFlag":true,"name":"name","first1dayCandleDate":"2000-01-23T04:56:07.000Z","isin":"isin"},{"weekendFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","figi":"figi","apiTradeAvailableFlag":true,"first1minCandleDate":"2000-01-23T04:56:07.000Z","uid":"uid","blockedTcaFlag":true,"name":"name","first1dayCandleDate":"2000-01-23T04:56:07.000Z","isin":"isin"}]}
 */
export interface V1FindInstrumentResponse {
  instruments?: V1InstrumentShort[];
}

/**
 * Объект передачи информации о фьючерсе.
 * @example {"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","futuresType":"futuresType","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"lastTradeDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","expirationDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","firstTradeDate":"2000-01-23T04:56:07.000Z","basicAssetSize":{"nano":6,"units":"units"},"forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","assetType":"assetType","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"basicAssetPositionUid":"basicAssetPositionUid","klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","basicAsset":"basicAsset","exchange":"exchange","countryOfRiskName":"countryOfRiskName"}
 */
export interface V1Future {
  figi?: string;
  ticker?: string;
  classCode?: string;
  /** @format int32 */
  lot?: number;
  currency?: string;
  klong?: V1Quotation;
  kshort?: V1Quotation;
  dlong?: V1Quotation;
  dshort?: V1Quotation;
  dlongMin?: V1Quotation;
  dshortMin?: V1Quotation;
  shortEnabledFlag?: boolean;
  name?: string;
  exchange?: string;
  /** @format date-time */
  firstTradeDate?: string;
  /** @format date-time */
  lastTradeDate?: string;
  futuresType?: string;
  assetType?: string;
  basicAsset?: string;
  basicAssetSize?: V1Quotation;
  countryOfRisk?: string;
  countryOfRiskName?: string;
  sector?: string;
  /** @format date-time */
  expirationDate?: string;
  tradingStatus?: V1SecurityTradingStatus;
  otcFlag?: boolean;
  buyAvailableFlag?: boolean;
  sellAvailableFlag?: boolean;
  minPriceIncrement?: V1Quotation;
  apiTradeAvailableFlag?: boolean;
  uid?: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange?: V1RealExchange;
  positionUid?: string;
  basicAssetPositionUid?: string;
  forIisFlag?: boolean;
  forQualInvestorFlag?: boolean;
  weekendFlag?: boolean;
  blockedTcaFlag?: boolean;
  /** @format date-time */
  first1minCandleDate?: string;
  /** @format date-time */
  first1dayCandleDate?: string;
}

/**
 * Данные по фьючерсу.
 * @example {"instrument":{"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","futuresType":"futuresType","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"lastTradeDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","expirationDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","firstTradeDate":"2000-01-23T04:56:07.000Z","basicAssetSize":{"nano":6,"units":"units"},"forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","assetType":"assetType","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"basicAssetPositionUid":"basicAssetPositionUid","klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","basicAsset":"basicAsset","exchange":"exchange","countryOfRiskName":"countryOfRiskName"}}
 */
export interface V1FutureResponse {
  /** Объект передачи информации о фьючерсе. */
  instrument?: V1Future;
}

/**
 * Данные по фьючерсам.
 * @example {"instruments":[{"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","futuresType":"futuresType","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"lastTradeDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","expirationDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","firstTradeDate":"2000-01-23T04:56:07.000Z","basicAssetSize":{"nano":6,"units":"units"},"forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","assetType":"assetType","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"basicAssetPositionUid":"basicAssetPositionUid","klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","basicAsset":"basicAsset","exchange":"exchange","countryOfRiskName":"countryOfRiskName"},{"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","futuresType":"futuresType","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"lastTradeDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","expirationDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","firstTradeDate":"2000-01-23T04:56:07.000Z","basicAssetSize":{"nano":6,"units":"units"},"forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","assetType":"assetType","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"basicAssetPositionUid":"basicAssetPositionUid","klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","basicAsset":"basicAsset","exchange":"exchange","countryOfRiskName":"countryOfRiskName"}]}
 */
export interface V1FuturesResponse {
  instruments?: V1Future[];
}

export interface V1GenerateBrokerReportRequest {
  accountId?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
}

/** @example {"taskId":"taskId"} */
export interface V1GenerateBrokerReportResponse {
  taskId?: string;
}

/** Объект запроса формирования отчёта "Справка о доходах за пределами РФ". */
export interface V1GenerateDividendsForeignIssuerReportRequest {
  accountId?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
}

/**
 * Объект результата задачи запуска формирования отчёта "Справка о доходах за пределами РФ".
 * @example {"taskId":"taskId"}
 */
export interface V1GenerateDividendsForeignIssuerReportResponse {
  taskId?: string;
}

/** Запрос получения счетов пользователя. */
export type V1GetAccountsRequest = object;

/**
 * Список счетов пользователя.
 * @example {"accounts":[{"openedDate":"2000-01-23T04:56:07.000Z","closedDate":"2000-01-23T04:56:07.000Z","name":"name","id":"id"},{"openedDate":"2000-01-23T04:56:07.000Z","closedDate":"2000-01-23T04:56:07.000Z","name":"name","id":"id"}]}
 */
export interface V1GetAccountsResponse {
  /** Массив счетов клиента. */
  accounts?: V1Account[];
}

/** Запрос НКД по облигации */
export interface V1GetAccruedInterestsRequest {
  figi?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
}

/**
 * НКД облигации
 * @example {"accruedInterests":[{"date":"2000-01-23T04:56:07.000Z","valuePercent":{"nano":6,"units":"units"},"nominal":{"nano":6,"units":"units"},"value":{"nano":6,"units":"units"}},{"date":"2000-01-23T04:56:07.000Z","valuePercent":{"nano":6,"units":"units"},"nominal":{"nano":6,"units":"units"},"value":{"nano":6,"units":"units"}}]}
 */
export interface V1GetAccruedInterestsResponse {
  accruedInterests?: V1AccruedInterest[];
}

/** Запрос купонов по облигации. */
export interface V1GetBondCouponsRequest {
  figi?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
}

/**
 * Купоны по облигации.
 * @example {"events":[{"fixDate":"2000-01-23T04:56:07.000Z","couponPeriod":0,"couponNumber":"couponNumber","couponEndDate":"2000-01-23T04:56:07.000Z","figi":"figi","couponDate":"2000-01-23T04:56:07.000Z","couponStartDate":"2000-01-23T04:56:07.000Z","payOneBond":{"nano":5,"currency":"currency","units":"units"}},{"fixDate":"2000-01-23T04:56:07.000Z","couponPeriod":0,"couponNumber":"couponNumber","couponEndDate":"2000-01-23T04:56:07.000Z","figi":"figi","couponDate":"2000-01-23T04:56:07.000Z","couponStartDate":"2000-01-23T04:56:07.000Z","payOneBond":{"nano":5,"currency":"currency","units":"units"}}]}
 */
export interface V1GetBondCouponsResponse {
  events?: V1Coupon[];
}

/** Запрос бренда. */
export interface V1GetBrandRequest {
  id?: string;
}

/** Запрос списка брендов. */
export type V1GetBrandsRequest = object;

/**
 * Список брендов.
 * @example {"brands":[{"uid":"uid","name":"name","description":"description","company":"company","sector":"sector","countryOfRiskName":"countryOfRiskName","info":"info","countryOfRisk":"countryOfRisk"},{"uid":"uid","name":"name","description":"description","company":"company","sector":"sector","countryOfRiskName":"countryOfRiskName","info":"info","countryOfRisk":"countryOfRisk"}]}
 */
export interface V1GetBrandsResponse {
  brands?: V1Brand[];
}

export interface V1GetBrokerReportRequest {
  taskId?: string;
  /** @format int32 */
  page?: number;
}

/** @example {"brokerReport":[{"exchangeClearingCommission":{"nano":5,"currency":"currency","units":"units"},"separateAgreementDate":"separateAgreementDate","orderId":"orderId","figi":"figi","executeSign":"executeSign","brokerCommission":{"nano":5,"currency":"currency","units":"units"},"repoRate":{"nano":6,"units":"units"},"orderAmount":{"nano":5,"currency":"currency","units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"aciValue":{"nano":6,"units":"units"},"secValueDate":"2000-01-23T04:56:07.000Z","direction":"direction","classCode":"classCode","ticker":"ticker","quantity":"quantity","deliveryType":"deliveryType","tradeDatetime":"2000-01-23T04:56:07.000Z","exchangeCommission":{"nano":5,"currency":"currency","units":"units"},"brokerStatus":"brokerStatus","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"separateAgreementNumber":"separateAgreementNumber","clearValueDate":"2000-01-23T04:56:07.000Z","name":"name","exchange":"exchange","separateAgreementType":"separateAgreementType","tradeId":"tradeId","party":"party"},{"exchangeClearingCommission":{"nano":5,"currency":"currency","units":"units"},"separateAgreementDate":"separateAgreementDate","orderId":"orderId","figi":"figi","executeSign":"executeSign","brokerCommission":{"nano":5,"currency":"currency","units":"units"},"repoRate":{"nano":6,"units":"units"},"orderAmount":{"nano":5,"currency":"currency","units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"aciValue":{"nano":6,"units":"units"},"secValueDate":"2000-01-23T04:56:07.000Z","direction":"direction","classCode":"classCode","ticker":"ticker","quantity":"quantity","deliveryType":"deliveryType","tradeDatetime":"2000-01-23T04:56:07.000Z","exchangeCommission":{"nano":5,"currency":"currency","units":"units"},"brokerStatus":"brokerStatus","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"separateAgreementNumber":"separateAgreementNumber","clearValueDate":"2000-01-23T04:56:07.000Z","name":"name","exchange":"exchange","separateAgreementType":"separateAgreementType","tradeId":"tradeId","party":"party"}],"pagesCount":6,"page":1,"itemsCount":0} */
export interface V1GetBrokerReportResponse {
  brokerReport?: V1BrokerReport[];
  /** @format int32 */
  itemsCount?: number;
  /** @format int32 */
  pagesCount?: number;
  /** @format int32 */
  page?: number;
}

/** Запрос исторических свечей. */
export interface V1GetCandlesRequest {
  figi?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
  /** Интервал свечей. */
  interval?: V1CandleInterval;
  instrumentId?: string;
}

/**
 * Список свечей.
 * @example {"candles":[{"volume":"volume","high":{"nano":6,"units":"units"},"low":{"nano":6,"units":"units"},"time":"2000-01-23T04:56:07.000Z","close":{"nano":6,"units":"units"},"open":{"nano":6,"units":"units"},"isComplete":true},{"volume":"volume","high":{"nano":6,"units":"units"},"low":{"nano":6,"units":"units"},"time":"2000-01-23T04:56:07.000Z","close":{"nano":6,"units":"units"},"open":{"nano":6,"units":"units"},"isComplete":true}]}
 */
export interface V1GetCandlesResponse {
  candles?: V1HistoricCandle[];
}

/** Запрос цен закрытия торговой сессии по инструментам. */
export interface V1GetClosePricesRequest {
  instruments?: V1InstrumentClosePriceRequest[];
}

/**
 * Цены закрытия торговой сессии по инструментам.
 * @example {"closePrices":[{"price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"},{"price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}]}
 */
export interface V1GetClosePricesResponse {
  closePrices?: V1InstrumentClosePriceResponse[];
}

/** Запрос справочника стран. */
export type V1GetCountriesRequest = object;

/**
 * Справочник стран.
 * @example {"countries":[{"alfaTwo":"alfaTwo","alfaThree":"alfaThree","name":"name","nameBrief":"nameBrief"},{"alfaTwo":"alfaTwo","alfaThree":"alfaThree","name":"name","nameBrief":"nameBrief"}]}
 */
export interface V1GetCountriesResponse {
  countries?: V1CountryResponse[];
}

/** Объект запроса сформированного отчёта "Справка о доходах за пределами РФ". */
export interface V1GetDividendsForeignIssuerReportRequest {
  taskId?: string;
  /** @format int32 */
  page?: number;
}

/** @example {"pagesCount":6,"page":1,"dividendsForeignIssuerReport":[{"issuerCountry":"issuerCountry","externalCommission":{"nano":6,"units":"units"},"securityName":"securityName","dividendGross":{"nano":6,"units":"units"},"quantity":"quantity","dividendAmount":{"nano":6,"units":"units"},"recordDate":"2000-01-23T04:56:07.000Z","dividend":{"nano":6,"units":"units"},"tax":{"nano":6,"units":"units"},"currency":"currency","paymentDate":"2000-01-23T04:56:07.000Z","isin":"isin"},{"issuerCountry":"issuerCountry","externalCommission":{"nano":6,"units":"units"},"securityName":"securityName","dividendGross":{"nano":6,"units":"units"},"quantity":"quantity","dividendAmount":{"nano":6,"units":"units"},"recordDate":"2000-01-23T04:56:07.000Z","dividend":{"nano":6,"units":"units"},"tax":{"nano":6,"units":"units"},"currency":"currency","paymentDate":"2000-01-23T04:56:07.000Z","isin":"isin"}],"itemsCount":0} */
export interface V1GetDividendsForeignIssuerReportResponse {
  dividendsForeignIssuerReport?: V1DividendsForeignIssuerReport[];
  /** @format int32 */
  itemsCount?: number;
  /** @format int32 */
  pagesCount?: number;
  /** @format int32 */
  page?: number;
}

export interface V1GetDividendsForeignIssuerRequest {
  /** Объект запроса формирования отчёта "Справка о доходах за пределами РФ". */
  generateDivForeignIssuerReport?: V1GenerateDividendsForeignIssuerReportRequest;
  /** Объект запроса сформированного отчёта "Справка о доходах за пределами РФ". */
  getDivForeignIssuerReport?: V1GetDividendsForeignIssuerReportRequest;
}

/** @example {"generateDivForeignIssuerReportResponse":{"taskId":"taskId"},"divForeignIssuerReport":{"pagesCount":6,"page":1,"dividendsForeignIssuerReport":[{"issuerCountry":"issuerCountry","externalCommission":{"nano":6,"units":"units"},"securityName":"securityName","dividendGross":{"nano":6,"units":"units"},"quantity":"quantity","dividendAmount":{"nano":6,"units":"units"},"recordDate":"2000-01-23T04:56:07.000Z","dividend":{"nano":6,"units":"units"},"tax":{"nano":6,"units":"units"},"currency":"currency","paymentDate":"2000-01-23T04:56:07.000Z","isin":"isin"},{"issuerCountry":"issuerCountry","externalCommission":{"nano":6,"units":"units"},"securityName":"securityName","dividendGross":{"nano":6,"units":"units"},"quantity":"quantity","dividendAmount":{"nano":6,"units":"units"},"recordDate":"2000-01-23T04:56:07.000Z","dividend":{"nano":6,"units":"units"},"tax":{"nano":6,"units":"units"},"currency":"currency","paymentDate":"2000-01-23T04:56:07.000Z","isin":"isin"}],"itemsCount":0}} */
export interface V1GetDividendsForeignIssuerResponse {
  /** Объект результата задачи запуска формирования отчёта "Справка о доходах за пределами РФ". */
  generateDivForeignIssuerReportResponse?: V1GenerateDividendsForeignIssuerReportResponse;
  divForeignIssuerReport?: V1GetDividendsForeignIssuerReportResponse;
}

/** Запрос дивидендов. */
export interface V1GetDividendsRequest {
  figi?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
}

/**
 * Дивиденды.
 * @example {"dividends":[{"declaredDate":"2000-01-23T04:56:07.000Z","createdAt":"2000-01-23T04:56:07.000Z","recordDate":"2000-01-23T04:56:07.000Z","yieldValue":{"nano":6,"units":"units"},"closePrice":{"nano":5,"currency":"currency","units":"units"},"paymentDate":"2000-01-23T04:56:07.000Z","regularity":"regularity","dividendNet":{"nano":5,"currency":"currency","units":"units"},"lastBuyDate":"2000-01-23T04:56:07.000Z","dividendType":"dividendType"},{"declaredDate":"2000-01-23T04:56:07.000Z","createdAt":"2000-01-23T04:56:07.000Z","recordDate":"2000-01-23T04:56:07.000Z","yieldValue":{"nano":6,"units":"units"},"closePrice":{"nano":5,"currency":"currency","units":"units"},"paymentDate":"2000-01-23T04:56:07.000Z","regularity":"regularity","dividendNet":{"nano":5,"currency":"currency","units":"units"},"lastBuyDate":"2000-01-23T04:56:07.000Z","dividendType":"dividendType"}]}
 */
export interface V1GetDividendsResponse {
  dividends?: V1Dividend[];
}

/** Запрос списка избранных инструментов, входные параметры не требуются. */
export type V1GetFavoritesRequest = object;

/**
 * В ответ передаётся список избранных инструментов в качестве массива.
 * @example {"favoriteInstruments":[{"otcFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","figi":"figi","apiTradeAvailableFlag":true,"isin":"isin"},{"otcFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","figi":"figi","apiTradeAvailableFlag":true,"isin":"isin"}]}
 */
export interface V1GetFavoritesResponse {
  favoriteInstruments?: V1FavoriteInstrument[];
}

/** Запрос информации о фьючерсе */
export interface V1GetFuturesMarginRequest {
  figi?: string;
}

/**
 * Данные по фьючерсу
 * @example {"initialMarginOnBuy":{"nano":5,"currency":"currency","units":"units"},"initialMarginOnSell":{"nano":5,"currency":"currency","units":"units"},"minPriceIncrementAmount":{"nano":6,"units":"units"},"minPriceIncrement":{"nano":6,"units":"units"}}
 */
export interface V1GetFuturesMarginResponse {
  initialMarginOnBuy?: V1MoneyValue;
  initialMarginOnSell?: V1MoneyValue;
  minPriceIncrement?: V1Quotation;
  minPriceIncrementAmount?: V1Quotation;
}

/** Запрос информации о пользователе. */
export type V1GetInfoRequest = object;

/**
 * Информация о пользователе.
 * @example {"qualifiedForWorkWith":["qualifiedForWorkWith","qualifiedForWorkWith"],"qualStatus":true,"premStatus":true,"tariff":"tariff"}
 */
export interface V1GetInfoResponse {
  premStatus?: boolean;
  qualStatus?: boolean;
  qualifiedForWorkWith?: string[];
  tariff?: string;
}

/** Запрос получения цен последних сделок. */
export interface V1GetLastPricesRequest {
  figi?: string[];
  instrumentId?: string[];
}

/**
 * Список цен последних сделок.
 * @example {"lastPrices":[{"price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"},{"price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}]}
 */
export interface V1GetLastPricesResponse {
  lastPrices?: V1LastPrice[];
}

/** Запрос обезличенных сделок за последний час. */
export interface V1GetLastTradesRequest {
  figi?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
  instrumentId?: string;
}

/**
 * Обезличенных сделок за последний час.
 * @example {"trades":[{"quantity":"quantity","price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"},{"quantity":"quantity","price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}]}
 */
export interface V1GetLastTradesResponse {
  trades?: V1Trade[];
}

/** Запрос маржинальных показателей по счёту */
export interface V1GetMarginAttributesRequest {
  /** Идентификатор счёта пользователя. */
  accountId?: string;
}

/**
 * Маржинальные показатели по счёту.
 * @example {"amountOfMissingFunds":{"nano":5,"currency":"currency","units":"units"},"correctedMargin":{"nano":5,"currency":"currency","units":"units"},"liquidPortfolio":{"nano":5,"currency":"currency","units":"units"},"fundsSufficiencyLevel":{"nano":6,"units":"units"},"startingMargin":{"nano":5,"currency":"currency","units":"units"},"minimalMargin":{"nano":5,"currency":"currency","units":"units"}}
 */
export interface V1GetMarginAttributesResponse {
  liquidPortfolio?: V1MoneyValue;
  startingMargin?: V1MoneyValue;
  minimalMargin?: V1MoneyValue;
  fundsSufficiencyLevel?: V1Quotation;
  amountOfMissingFunds?: V1MoneyValue;
  correctedMargin?: V1MoneyValue;
}

/** Запрос активных подписок. */
export type V1GetMySubscriptions = object;

/** Запрос списка операций по счёту с пагинацией. */
export interface V1GetOperationsByCursorRequest {
  accountId?: string;
  instrumentId?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
  cursor?: string;
  /** @format int32 */
  limit?: number;
  operationTypes?: V1OperationType[];
  /** Статус запрашиваемых операций. */
  state?: V1OperationState;
  withoutCommissions?: boolean;
  withoutTrades?: boolean;
  withoutOvernights?: boolean;
}

/**
 * Список операций по счёту с пагинацией.
 * @example {"nextCursor":"nextCursor","hasNext":true,"items":[{"cursor":"cursor","date":"2000-01-23T04:56:07.000Z","assetUid":"assetUid","brokerAccountId":"brokerAccountId","accruedInt":{"nano":5,"currency":"currency","units":"units"},"description":"description","figi":"figi","cancelDateTime":"2000-01-23T04:56:07.000Z","tradesInfo":{"trades":[{"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}},{"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}}]},"price":{"nano":5,"currency":"currency","units":"units"},"yield":{"nano":5,"currency":"currency","units":"units"},"payment":{"nano":5,"currency":"currency","units":"units"},"commission":{"nano":5,"currency":"currency","units":"units"},"id":"id","quantityRest":"quantityRest","cancelReason":"cancelReason","instrumentType":"instrumentType","quantity":"quantity","parentOperationId":"parentOperationId","positionUid":"positionUid","quantityDone":"quantityDone","yieldRelative":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","name":"name"},{"cursor":"cursor","date":"2000-01-23T04:56:07.000Z","assetUid":"assetUid","brokerAccountId":"brokerAccountId","accruedInt":{"nano":5,"currency":"currency","units":"units"},"description":"description","figi":"figi","cancelDateTime":"2000-01-23T04:56:07.000Z","tradesInfo":{"trades":[{"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}},{"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}}]},"price":{"nano":5,"currency":"currency","units":"units"},"yield":{"nano":5,"currency":"currency","units":"units"},"payment":{"nano":5,"currency":"currency","units":"units"},"commission":{"nano":5,"currency":"currency","units":"units"},"id":"id","quantityRest":"quantityRest","cancelReason":"cancelReason","instrumentType":"instrumentType","quantity":"quantity","parentOperationId":"parentOperationId","positionUid":"positionUid","quantityDone":"quantityDone","yieldRelative":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","name":"name"}]}
 */
export interface V1GetOperationsByCursorResponse {
  hasNext?: boolean;
  nextCursor?: string;
  items?: V1OperationItem[];
}

/** Запрос стакана. */
export interface V1GetOrderBookRequest {
  figi?: string;
  /** @format int32 */
  depth?: number;
  instrumentId?: string;
}

/**
 * Информация о стакане.
 * @example {"depth":0,"lastPriceTs":"2000-01-23T04:56:07.000Z","asks":[{"quantity":"quantity","price":{"nano":6,"units":"units"}},{"quantity":"quantity","price":{"nano":6,"units":"units"}}],"orderbookTs":"2000-01-23T04:56:07.000Z","instrumentUid":"instrumentUid","bids":[{"quantity":"quantity","price":{"nano":6,"units":"units"}},{"quantity":"quantity","price":{"nano":6,"units":"units"}}],"limitUp":{"nano":6,"units":"units"},"figi":"figi","closePrice":{"nano":6,"units":"units"},"limitDown":{"nano":6,"units":"units"},"closePriceTs":"2000-01-23T04:56:07.000Z","lastPrice":{"nano":6,"units":"units"}}
 */
export interface V1GetOrderBookResponse {
  figi?: string;
  /** @format int32 */
  depth?: number;
  bids?: V1Order[];
  asks?: V1Order[];
  lastPrice?: V1Quotation;
  closePrice?: V1Quotation;
  limitUp?: V1Quotation;
  limitDown?: V1Quotation;
  /** @format date-time */
  lastPriceTs?: string;
  /** @format date-time */
  closePriceTs?: string;
  /** @format date-time */
  orderbookTs?: string;
  instrumentUid?: string;
}

/** Запрос получения статуса торгового поручения. */
export interface V1GetOrderStateRequest {
  accountId?: string;
  orderId?: string;
}

/** Запрос получения списка активных торговых поручений. */
export interface V1GetOrdersRequest {
  accountId?: string;
}

/**
 * Список активных торговых поручений.
 * @example {"orders":[{"orderId":"orderId","figi":"figi","initialOrderPrice":{"nano":5,"currency":"currency","units":"units"},"initialCommission":{"nano":5,"currency":"currency","units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"lotsExecuted":"lotsExecuted","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"lotsRequested":"lotsRequested","instrumentUid":"instrumentUid","stages":[{"quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"},{"quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"}],"orderRequestId":"orderRequestId","executedOrderPrice":{"nano":5,"currency":"currency","units":"units"},"executedCommission":{"nano":5,"currency":"currency","units":"units"},"initialSecurityPrice":{"nano":5,"currency":"currency","units":"units"},"serviceCommission":{"nano":5,"currency":"currency","units":"units"},"currency":"currency","orderDate":"2000-01-23T04:56:07.000Z"},{"orderId":"orderId","figi":"figi","initialOrderPrice":{"nano":5,"currency":"currency","units":"units"},"initialCommission":{"nano":5,"currency":"currency","units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"lotsExecuted":"lotsExecuted","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"lotsRequested":"lotsRequested","instrumentUid":"instrumentUid","stages":[{"quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"},{"quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"}],"orderRequestId":"orderRequestId","executedOrderPrice":{"nano":5,"currency":"currency","units":"units"},"executedCommission":{"nano":5,"currency":"currency","units":"units"},"initialSecurityPrice":{"nano":5,"currency":"currency","units":"units"},"serviceCommission":{"nano":5,"currency":"currency","units":"units"},"currency":"currency","orderDate":"2000-01-23T04:56:07.000Z"}]}
 */
export interface V1GetOrdersResponse {
  orders?: V1OrderState[];
}

/** Запрос получения списка активных стоп-заявок. */
export interface V1GetStopOrdersRequest {
  accountId?: string;
}

/**
 * Список активных стоп-заявок.
 * @example {"stopOrders":[{"activationDateTime":"2000-01-23T04:56:07.000Z","stopPrice":{"nano":5,"currency":"currency","units":"units"},"lotsRequested":"lotsRequested","expirationTime":"2000-01-23T04:56:07.000Z","price":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","figi":"figi","currency":"currency","stopOrderId":"stopOrderId","createDate":"2000-01-23T04:56:07.000Z"},{"activationDateTime":"2000-01-23T04:56:07.000Z","stopPrice":{"nano":5,"currency":"currency","units":"units"},"lotsRequested":"lotsRequested","expirationTime":"2000-01-23T04:56:07.000Z","price":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","figi":"figi","currency":"currency","stopOrderId":"stopOrderId","createDate":"2000-01-23T04:56:07.000Z"}]}
 */
export interface V1GetStopOrdersResponse {
  stopOrders?: V1StopOrder[];
}

export interface V1GetStrategiesRequest {
  strategyId?: string;
}

/** @example {"strategies":[{"strategyName":"strategyName","strategyDescription":"strategyDescription","strategyUrl":"strategyUrl","strategyId":"strategyId"},{"strategyName":"strategyName","strategyDescription":"strategyDescription","strategyUrl":"strategyUrl","strategyId":"strategyId"}]} */
export interface V1GetStrategiesResponse {
  strategies?: V1Strategy[];
}

/** Запрос получения торгового статуса. */
export interface V1GetTradingStatusRequest {
  figi?: string;
  instrumentId?: string;
}

/**
 * Информация о торговом статусе.
 * @example {"limitOrderAvailableFlag":true,"marketOrderAvailableFlag":true,"instrumentUid":"instrumentUid","figi":"figi","apiTradeAvailableFlag":true}
 */
export interface V1GetTradingStatusResponse {
  figi?: string;
  tradingStatus?: V1SecurityTradingStatus;
  limitOrderAvailableFlag?: boolean;
  marketOrderAvailableFlag?: boolean;
  apiTradeAvailableFlag?: boolean;
  instrumentUid?: string;
}

/** Запрос получения торгового статуса. */
export interface V1GetTradingStatusesRequest {
  instrumentId?: string[];
}

/**
 * Информация о торговом статусе.
 * @example {"tradingStatuses":[{"limitOrderAvailableFlag":true,"marketOrderAvailableFlag":true,"instrumentUid":"instrumentUid","figi":"figi","apiTradeAvailableFlag":true},{"limitOrderAvailableFlag":true,"marketOrderAvailableFlag":true,"instrumentUid":"instrumentUid","figi":"figi","apiTradeAvailableFlag":true}]}
 */
export interface V1GetTradingStatusesResponse {
  tradingStatuses?: V1GetTradingStatusResponse[];
}

/** Запрос текущих лимитов пользователя. */
export type V1GetUserTariffRequest = object;

/**
 * Текущие лимиты пользователя.
 * @example {"unaryLimits":[{"limitPerMinute":0,"methods":["methods","methods"]},{"limitPerMinute":0,"methods":["methods","methods"]}],"streamLimits":[{"streams":["streams","streams"],"limit":6,"open":1},{"streams":["streams","streams"],"limit":6,"open":1}]}
 */
export interface V1GetUserTariffResponse {
  unaryLimits?: V1UnaryLimit[];
  streamLimits?: V1StreamLimit[];
}

/**
 * Информация о свече.
 * @example {"volume":"volume","high":{"nano":6,"units":"units"},"low":{"nano":6,"units":"units"},"time":"2000-01-23T04:56:07.000Z","close":{"nano":6,"units":"units"},"open":{"nano":6,"units":"units"},"isComplete":true}
 */
export interface V1HistoricCandle {
  open?: V1Quotation;
  high?: V1Quotation;
  low?: V1Quotation;
  close?: V1Quotation;
  /** @format int64 */
  volume?: string;
  /** @format date-time */
  time?: string;
  isComplete?: boolean;
}

/** Запрос подписки на торговый статус. */
export interface V1InfoInstrument {
  figi?: string;
  instrumentId?: string;
}

/**
 * Статус подписки.
 * @example {"instrumentUid":"instrumentUid","figi":"figi"}
 */
export interface V1InfoSubscription {
  figi?: string;
  /** Результат подписки. */
  subscriptionStatus?: V1SubscriptionStatus;
  instrumentUid?: string;
}

/**
 * Объект передачи основной информации об инструменте.
 * @example {"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"}
 */
export interface V1Instrument {
  figi?: string;
  ticker?: string;
  classCode?: string;
  isin?: string;
  /** @format int32 */
  lot?: number;
  currency?: string;
  klong?: V1Quotation;
  kshort?: V1Quotation;
  dlong?: V1Quotation;
  dshort?: V1Quotation;
  dlongMin?: V1Quotation;
  dshortMin?: V1Quotation;
  shortEnabledFlag?: boolean;
  name?: string;
  exchange?: string;
  countryOfRisk?: string;
  countryOfRiskName?: string;
  instrumentType?: string;
  tradingStatus?: V1SecurityTradingStatus;
  otcFlag?: boolean;
  buyAvailableFlag?: boolean;
  sellAvailableFlag?: boolean;
  minPriceIncrement?: V1Quotation;
  apiTradeAvailableFlag?: boolean;
  uid?: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange?: V1RealExchange;
  positionUid?: string;
  forIisFlag?: boolean;
  forQualInvestorFlag?: boolean;
  weekendFlag?: boolean;
  blockedTcaFlag?: boolean;
  /** Тип инструмента. */
  instrumentKind?: V1InstrumentType;
  /** @format date-time */
  first1minCandleDate?: string;
  /** @format date-time */
  first1dayCandleDate?: string;
}

/** Запрос цен закрытия торговой сессии по инструменту. */
export interface V1InstrumentClosePriceRequest {
  instrumentId?: string;
}

/**
 * Цена закрытия торговой сессии по инструменту.
 * @example {"price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}
 */
export interface V1InstrumentClosePriceResponse {
  figi?: string;
  instrumentUid?: string;
  price?: V1Quotation;
  /** @format date-time */
  time?: string;
}

/**
 * Тип идентификатора инструмента. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/)
 * @default "INSTRUMENT_ID_UNSPECIFIED"
 */
export enum V1InstrumentIdType {
  INSTRUMENT_ID_UNSPECIFIED = "INSTRUMENT_ID_UNSPECIFIED",
  INSTRUMENT_ID_TYPE_FIGI = "INSTRUMENT_ID_TYPE_FIGI",
  INSTRUMENT_ID_TYPE_TICKER = "INSTRUMENT_ID_TYPE_TICKER",
  INSTRUMENT_ID_TYPE_UID = "INSTRUMENT_ID_TYPE_UID",
  INSTRUMENT_ID_TYPE_POSITION_UID = "INSTRUMENT_ID_TYPE_POSITION_UID",
}

/**
 * Связь с другим инструментом.
 * @example {"instrumentUid":"instrumentUid","type":"type"}
 */
export interface V1InstrumentLink {
  type?: string;
  instrumentUid?: string;
}

/** Запрос получения инструмента по идентификатору. */
export interface V1InstrumentRequest {
  idType?: V1InstrumentIdType;
  classCode?: string;
  id?: string;
}

/**
 * Данные по инструменту.
 * @example {"instrument":{"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","exchange":"exchange","countryOfRiskName":"countryOfRiskName","isin":"isin"}}
 */
export interface V1InstrumentResponse {
  /** Объект передачи основной информации об инструменте. */
  instrument?: V1Instrument;
}

/**
 * Краткая информация об инструменте.
 * @example {"weekendFlag":true,"classCode":"classCode","ticker":"ticker","instrumentType":"instrumentType","forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","figi":"figi","apiTradeAvailableFlag":true,"first1minCandleDate":"2000-01-23T04:56:07.000Z","uid":"uid","blockedTcaFlag":true,"name":"name","first1dayCandleDate":"2000-01-23T04:56:07.000Z","isin":"isin"}
 */
export interface V1InstrumentShort {
  isin?: string;
  figi?: string;
  ticker?: string;
  classCode?: string;
  instrumentType?: string;
  name?: string;
  uid?: string;
  positionUid?: string;
  /** Тип инструмента. */
  instrumentKind?: V1InstrumentType;
  apiTradeAvailableFlag?: boolean;
  forIisFlag?: boolean;
  /** @format date-time */
  first1minCandleDate?: string;
  /** @format date-time */
  first1dayCandleDate?: string;
  forQualInvestorFlag?: boolean;
  weekendFlag?: boolean;
  blockedTcaFlag?: boolean;
}

/**
 * Статус запрашиваемых инструментов.
 * @default "INSTRUMENT_STATUS_UNSPECIFIED"
 */
export enum V1InstrumentStatus {
  INSTRUMENT_STATUS_UNSPECIFIED = "INSTRUMENT_STATUS_UNSPECIFIED",
  INSTRUMENT_STATUS_BASE = "INSTRUMENT_STATUS_BASE",
  INSTRUMENT_STATUS_ALL = "INSTRUMENT_STATUS_ALL",
}

/**
 * Тип инструмента.
 * @default "INSTRUMENT_TYPE_UNSPECIFIED"
 */
export enum V1InstrumentType {
  INSTRUMENT_TYPE_UNSPECIFIED = "INSTRUMENT_TYPE_UNSPECIFIED",
  INSTRUMENT_TYPE_BOND = "INSTRUMENT_TYPE_BOND",
  INSTRUMENT_TYPE_SHARE = "INSTRUMENT_TYPE_SHARE",
  INSTRUMENT_TYPE_CURRENCY = "INSTRUMENT_TYPE_CURRENCY",
  INSTRUMENT_TYPE_ETF = "INSTRUMENT_TYPE_ETF",
  INSTRUMENT_TYPE_FUTURES = "INSTRUMENT_TYPE_FUTURES",
  INSTRUMENT_TYPE_SP = "INSTRUMENT_TYPE_SP",
  INSTRUMENT_TYPE_OPTION = "INSTRUMENT_TYPE_OPTION",
  INSTRUMENT_TYPE_CLEARING_CERTIFICATE = "INSTRUMENT_TYPE_CLEARING_CERTIFICATE",
}

/** Запрос получения инструментов. */
export interface V1InstrumentsRequest {
  /** Статус запрашиваемых инструментов. */
  instrumentStatus?: V1InstrumentStatus;
}

/**
 * Информация о цене последней сделки.
 * @example {"price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}
 */
export interface V1LastPrice {
  figi?: string;
  price?: V1Quotation;
  /** @format date-time */
  time?: string;
  instrumentUid?: string;
}

/** Запрос подписки на последнюю цену. */
export interface V1LastPriceInstrument {
  figi?: string;
  instrumentId?: string;
}

/**
 * Статус подписки на цену последней сделки.
 * @example {"instrumentUid":"instrumentUid","figi":"figi"}
 */
export interface V1LastPriceSubscription {
  figi?: string;
  /** Результат подписки. */
  subscriptionStatus?: V1SubscriptionStatus;
  instrumentUid?: string;
}

/** Запрос подписки или отписки на определённые биржевые данные. */
export interface V1MarketDataRequest {
  /** subscribeCandles | Изменения статуса подписки на свечи. */
  subscribeCandlesRequest?: V1SubscribeCandlesRequest;
  /** Запрос на изменение статуса подписки на стаканы. */
  subscribeOrderBookRequest?: V1SubscribeOrderBookRequest;
  /** Изменение статуса подписки на поток обезличенных сделок. */
  subscribeTradesRequest?: V1SubscribeTradesRequest;
  /** Изменение статуса подписки на торговый статус инструмента. */
  subscribeInfoRequest?: V1SubscribeInfoRequest;
  /** Изменение статуса подписки на цену последней сделки по инструменту. */
  subscribeLastPriceRequest?: V1SubscribeLastPriceRequest;
  /** Запрос активных подписок. */
  getMySubscriptions?: object;
}

/**
 * Пакет биржевой информации по подписке.
 * @example {"subscribeInfoResponse":{"infoSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"trade":{"quantity":"quantity","price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"},"subscribeOrderBookResponse":{"orderBookSubscriptions":[{"depth":0,"instrumentUid":"instrumentUid","figi":"figi"},{"depth":0,"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"ping":{"time":"2000-01-23T04:56:07.000Z"},"candle":{"volume":"volume","high":{"nano":6,"units":"units"},"lastTradeTs":"2000-01-23T04:56:07.000Z","low":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z","close":{"nano":6,"units":"units"},"open":{"nano":6,"units":"units"}},"orderbook":{"depth":6,"asks":[{"quantity":"quantity","price":{"nano":6,"units":"units"}},{"quantity":"quantity","price":{"nano":6,"units":"units"}}],"instrumentUid":"instrumentUid","bids":[{"quantity":"quantity","price":{"nano":6,"units":"units"}},{"quantity":"quantity","price":{"nano":6,"units":"units"}}],"limitUp":{"nano":6,"units":"units"},"figi":"figi","time":"2000-01-23T04:56:07.000Z","limitDown":{"nano":6,"units":"units"},"isConsistent":true},"subscribeTradesResponse":{"tradeSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"tradingStatus":{"limitOrderAvailableFlag":true,"marketOrderAvailableFlag":true,"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"},"subscribeCandlesResponse":{"candlesSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"subscribeLastPriceResponse":{"lastPriceSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"lastPrice":{"price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}}
 */
export interface V1MarketDataResponse {
  /** Результат изменения статус подписки на свечи. */
  subscribeCandlesResponse?: V1SubscribeCandlesResponse;
  /** Результат изменения статуса подписки на стаканы. */
  subscribeOrderBookResponse?: V1SubscribeOrderBookResponse;
  /** Результат изменения статуса подписки на поток обезличенных сделок. */
  subscribeTradesResponse?: V1SubscribeTradesResponse;
  /** Результат изменения статуса подписки на торговый статус. */
  subscribeInfoResponse?: V1SubscribeInfoResponse;
  /** Пакет свечей в рамках стрима. */
  candle?: V1Candle;
  /** Информация о сделке. */
  trade?: V1Trade;
  /** Пакет стаканов в рамках стрима. */
  orderbook?: V1OrderBook;
  /** Пакет изменения торгового статуса. */
  tradingStatus?: V1TradingStatus;
  /** Проверка активности стрима. */
  ping?: V1Ping;
  /** Результат изменения статуса подписки на цену последней сделки. */
  subscribeLastPriceResponse?: V1SubscribeLastPriceResponse;
  /** Информация о цене последней сделки. */
  lastPrice?: V1LastPrice;
}

export interface V1MarketDataServerSideStreamRequest {
  /** subscribeCandles | Изменения статуса подписки на свечи. */
  subscribeCandlesRequest?: V1SubscribeCandlesRequest;
  /** Запрос на изменение статуса подписки на стаканы. */
  subscribeOrderBookRequest?: V1SubscribeOrderBookRequest;
  /** Изменение статуса подписки на поток обезличенных сделок. */
  subscribeTradesRequest?: V1SubscribeTradesRequest;
  /** Изменение статуса подписки на торговый статус инструмента. */
  subscribeInfoRequest?: V1SubscribeInfoRequest;
  /** Изменение статуса подписки на цену последней сделки по инструменту. */
  subscribeLastPriceRequest?: V1SubscribeLastPriceRequest;
}

/**
 * Денежная сумма в определенной валюте
 * @example {"nano":5,"currency":"currency","units":"units"}
 */
export interface V1MoneyValue {
  /** строковый ISO-код валюты */
  currency?: string;
  /**
   * целая часть суммы, может быть отрицательным числом
   * @format int64
   */
  units?: string;
  /**
   * дробная часть суммы, может быть отрицательным числом
   * @format int32
   */
  nano?: number;
}

/** Запрос открытия счёта в песочнице. */
export type V1OpenSandboxAccountRequest = object;

/**
 * Номер открытого счёта в песочнице.
 * @example {"accountId":"accountId"}
 */
export interface V1OpenSandboxAccountResponse {
  accountId?: string;
}

/**
 * Данные по операции.
 * @example {"date":"2000-01-23T04:56:07.000Z","assetUid":"assetUid","instrumentType":"instrumentType","quantity":"quantity","parentOperationId":"parentOperationId","trades":[{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"},{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"}],"positionUid":"positionUid","figi":"figi","type":"type","price":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","currency":"currency","payment":{"nano":5,"currency":"currency","units":"units"},"id":"id","quantityRest":"quantityRest"}
 */
export interface V1Operation {
  id?: string;
  parentOperationId?: string;
  currency?: string;
  payment?: V1MoneyValue;
  price?: V1MoneyValue;
  /** Статус запрашиваемых операций. */
  state?: V1OperationState;
  /** @format int64 */
  quantity?: string;
  /** @format int64 */
  quantityRest?: string;
  figi?: string;
  instrumentType?: string;
  /** @format date-time */
  date?: string;
  type?: string;
  /** Тип операции. */
  operationType?: V1OperationType;
  trades?: V1OperationTrade[];
  assetUid?: string;
  positionUid?: string;
  instrumentUid?: string;
}

/**
 * Данные об операции.
 * @example {"cursor":"cursor","date":"2000-01-23T04:56:07.000Z","assetUid":"assetUid","brokerAccountId":"brokerAccountId","accruedInt":{"nano":5,"currency":"currency","units":"units"},"description":"description","figi":"figi","cancelDateTime":"2000-01-23T04:56:07.000Z","tradesInfo":{"trades":[{"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}},{"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}}]},"price":{"nano":5,"currency":"currency","units":"units"},"yield":{"nano":5,"currency":"currency","units":"units"},"payment":{"nano":5,"currency":"currency","units":"units"},"commission":{"nano":5,"currency":"currency","units":"units"},"id":"id","quantityRest":"quantityRest","cancelReason":"cancelReason","instrumentType":"instrumentType","quantity":"quantity","parentOperationId":"parentOperationId","positionUid":"positionUid","quantityDone":"quantityDone","yieldRelative":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","name":"name"}
 */
export interface V1OperationItem {
  cursor?: string;
  brokerAccountId?: string;
  id?: string;
  parentOperationId?: string;
  name?: string;
  /** @format date-time */
  date?: string;
  /** Тип операции. */
  type?: V1OperationType;
  description?: string;
  /** Статус запрашиваемых операций. */
  state?: V1OperationState;
  instrumentUid?: string;
  figi?: string;
  instrumentType?: string;
  /** Тип инструмента. */
  instrumentKind?: V1InstrumentType;
  positionUid?: string;
  payment?: V1MoneyValue;
  price?: V1MoneyValue;
  commission?: V1MoneyValue;
  yield?: V1MoneyValue;
  yieldRelative?: V1Quotation;
  accruedInt?: V1MoneyValue;
  /** @format int64 */
  quantity?: string;
  /** @format int64 */
  quantityRest?: string;
  /** @format int64 */
  quantityDone?: string;
  /** @format date-time */
  cancelDateTime?: string;
  cancelReason?: string;
  /** Массив с информацией о сделках. */
  tradesInfo?: V1OperationItemTrades;
  assetUid?: string;
}

/**
 * Сделка по операции.
 * @example {"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}}
 */
export interface V1OperationItemTrade {
  num?: string;
  /** @format date-time */
  date?: string;
  /** @format int64 */
  quantity?: string;
  price?: V1MoneyValue;
  yield?: V1MoneyValue;
  yieldRelative?: V1Quotation;
}

/**
 * Массив с информацией о сделках.
 * @example {"trades":[{"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}},{"date":"2000-01-23T04:56:07.000Z","quantity":"quantity","yieldRelative":{"nano":6,"units":"units"},"price":{"nano":5,"currency":"currency","units":"units"},"num":"num","yield":{"nano":5,"currency":"currency","units":"units"}}]}
 */
export interface V1OperationItemTrades {
  trades?: V1OperationItemTrade[];
}

/**
 * Статус запрашиваемых операций.
 * @default "OPERATION_STATE_UNSPECIFIED"
 */
export enum V1OperationState {
  OPERATION_STATE_UNSPECIFIED = "OPERATION_STATE_UNSPECIFIED",
  OPERATION_STATE_EXECUTED = "OPERATION_STATE_EXECUTED",
  OPERATION_STATE_CANCELED = "OPERATION_STATE_CANCELED",
  OPERATION_STATE_PROGRESS = "OPERATION_STATE_PROGRESS",
}

/**
 * Сделка по операции.
 * @example {"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"}
 */
export interface V1OperationTrade {
  tradeId?: string;
  /** @format date-time */
  dateTime?: string;
  /** @format int64 */
  quantity?: string;
  price?: V1MoneyValue;
}

/**
 * Тип операции.
 * @default "OPERATION_TYPE_UNSPECIFIED"
 */
export enum V1OperationType {
  OPERATION_TYPE_UNSPECIFIED = "OPERATION_TYPE_UNSPECIFIED",
  OPERATION_TYPE_INPUT = "OPERATION_TYPE_INPUT",
  OPERATION_TYPE_BOND_TAX = "OPERATION_TYPE_BOND_TAX",
  OPERATION_TYPE_OUTPUT_SECURITIES = "OPERATION_TYPE_OUTPUT_SECURITIES",
  OPERATION_TYPE_OVERNIGHT = "OPERATION_TYPE_OVERNIGHT",
  OPERATION_TYPE_TAX = "OPERATION_TYPE_TAX",
  OPERATION_TYPE_BOND_REPAYMENT_FULL = "OPERATION_TYPE_BOND_REPAYMENT_FULL",
  OPERATION_TYPE_SELL_CARD = "OPERATION_TYPE_SELL_CARD",
  OPERATION_TYPE_DIVIDEND_TAX = "OPERATION_TYPE_DIVIDEND_TAX",
  OPERATION_TYPE_OUTPUT = "OPERATION_TYPE_OUTPUT",
  OPERATION_TYPE_BOND_REPAYMENT = "OPERATION_TYPE_BOND_REPAYMENT",
  OPERATION_TYPE_TAX_CORRECTION = "OPERATION_TYPE_TAX_CORRECTION",
  OPERATION_TYPE_SERVICE_FEE = "OPERATION_TYPE_SERVICE_FEE",
  OPERATION_TYPE_BENEFIT_TAX = "OPERATION_TYPE_BENEFIT_TAX",
  OPERATION_TYPE_MARGIN_FEE = "OPERATION_TYPE_MARGIN_FEE",
  OPERATION_TYPE_BUY = "OPERATION_TYPE_BUY",
  OPERATION_TYPE_BUY_CARD = "OPERATION_TYPE_BUY_CARD",
  OPERATION_TYPE_INPUT_SECURITIES = "OPERATION_TYPE_INPUT_SECURITIES",
  OPERATION_TYPE_SELL_MARGIN = "OPERATION_TYPE_SELL_MARGIN",
  OPERATION_TYPE_BROKER_FEE = "OPERATION_TYPE_BROKER_FEE",
  OPERATION_TYPE_BUY_MARGIN = "OPERATION_TYPE_BUY_MARGIN",
  OPERATION_TYPE_DIVIDEND = "OPERATION_TYPE_DIVIDEND",
  OPERATION_TYPE_SELL = "OPERATION_TYPE_SELL",
  OPERATION_TYPE_COUPON = "OPERATION_TYPE_COUPON",
  OPERATION_TYPE_SUCCESS_FEE = "OPERATION_TYPE_SUCCESS_FEE",
  OPERATION_TYPE_DIVIDEND_TRANSFER = "OPERATION_TYPE_DIVIDEND_TRANSFER",
  OPERATION_TYPE_ACCRUING_VARMARGIN = "OPERATION_TYPE_ACCRUING_VARMARGIN",
  OPERATION_TYPE_WRITING_OFF_VARMARGIN = "OPERATION_TYPE_WRITING_OFF_VARMARGIN",
  OPERATION_TYPE_DELIVERY_BUY = "OPERATION_TYPE_DELIVERY_BUY",
  OPERATION_TYPE_DELIVERY_SELL = "OPERATION_TYPE_DELIVERY_SELL",
  OPERATION_TYPE_TRACK_MFEE = "OPERATION_TYPE_TRACK_MFEE",
  OPERATION_TYPE_TRACK_PFEE = "OPERATION_TYPE_TRACK_PFEE",
  OPERATION_TYPE_TAX_PROGRESSIVE = "OPERATION_TYPE_TAX_PROGRESSIVE",
  OPERATION_TYPE_BOND_TAX_PROGRESSIVE = "OPERATION_TYPE_BOND_TAX_PROGRESSIVE",
  OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE = "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE",
  OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE = "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE",
  OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE = "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE",
  OPERATION_TYPE_TAX_REPO_PROGRESSIVE = "OPERATION_TYPE_TAX_REPO_PROGRESSIVE",
  OPERATION_TYPE_TAX_REPO = "OPERATION_TYPE_TAX_REPO",
  OPERATION_TYPE_TAX_REPO_HOLD = "OPERATION_TYPE_TAX_REPO_HOLD",
  OPERATION_TYPE_TAX_REPO_REFUND = "OPERATION_TYPE_TAX_REPO_REFUND",
  OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE = "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE",
  OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE = "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE",
  OPERATION_TYPE_DIV_EXT = "OPERATION_TYPE_DIV_EXT",
  OPERATION_TYPE_TAX_CORRECTION_COUPON = "OPERATION_TYPE_TAX_CORRECTION_COUPON",
  OPERATION_TYPE_CASH_FEE = "OPERATION_TYPE_CASH_FEE",
  OPERATION_TYPE_OUT_FEE = "OPERATION_TYPE_OUT_FEE",
  OPERATION_TYPE_OUT_STAMP_DUTY = "OPERATION_TYPE_OUT_STAMP_DUTY",
  OPERATION_TYPE_OUTPUT_SWIFT = "OPERATION_TYPE_OUTPUT_SWIFT",
  OPERATION_TYPE_INPUT_SWIFT = "OPERATION_TYPE_INPUT_SWIFT",
  OPERATION_TYPE_OUTPUT_ACQUIRING = "OPERATION_TYPE_OUTPUT_ACQUIRING",
  OPERATION_TYPE_INPUT_ACQUIRING = "OPERATION_TYPE_INPUT_ACQUIRING",
  OPERATION_TYPE_OUTPUT_PENALTY = "OPERATION_TYPE_OUTPUT_PENALTY",
  OPERATION_TYPE_ADVICE_FEE = "OPERATION_TYPE_ADVICE_FEE",
  OPERATION_TYPE_TRANS_IIS_BS = "OPERATION_TYPE_TRANS_IIS_BS",
  OPERATION_TYPE_TRANS_BS_BS = "OPERATION_TYPE_TRANS_BS_BS",
  OPERATION_TYPE_OUT_MULTI = "OPERATION_TYPE_OUT_MULTI",
  OPERATION_TYPE_INP_MULTI = "OPERATION_TYPE_INP_MULTI",
  OPERATION_TYPE_OVER_PLACEMENT = "OPERATION_TYPE_OVER_PLACEMENT",
  OPERATION_TYPE_OVER_COM = "OPERATION_TYPE_OVER_COM",
  OPERATION_TYPE_OVER_INCOME = "OPERATION_TYPE_OVER_INCOME",
  OPERATION_TYPE_OPTION_EXPIRATION = "OPERATION_TYPE_OPTION_EXPIRATION",
}

/** Запрос получения списка операций по счёту. */
export interface V1OperationsRequest {
  accountId?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
  /** Статус запрашиваемых операций. */
  state?: V1OperationState;
  figi?: string;
}

/**
 * Список операций.
 * @example {"operations":[{"date":"2000-01-23T04:56:07.000Z","assetUid":"assetUid","instrumentType":"instrumentType","quantity":"quantity","parentOperationId":"parentOperationId","trades":[{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"},{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"}],"positionUid":"positionUid","figi":"figi","type":"type","price":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","currency":"currency","payment":{"nano":5,"currency":"currency","units":"units"},"id":"id","quantityRest":"quantityRest"},{"date":"2000-01-23T04:56:07.000Z","assetUid":"assetUid","instrumentType":"instrumentType","quantity":"quantity","parentOperationId":"parentOperationId","trades":[{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"},{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"}],"positionUid":"positionUid","figi":"figi","type":"type","price":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","currency":"currency","payment":{"nano":5,"currency":"currency","units":"units"},"id":"id","quantityRest":"quantityRest"}]}
 */
export interface V1OperationsResponse {
  operations?: V1Operation[];
}

/**
 * Опцион.
 * @example {"dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"lastTradeDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","expirationDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","firstTradeDate":"2000-01-23T04:56:07.000Z","basicAssetSize":{"nano":6,"units":"units"},"forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","assetType":"assetType","minPriceIncrement":{"nano":6,"units":"units"},"basicAssetPositionUid":"basicAssetPositionUid","otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"settlementCurrency":"settlementCurrency","name":"name","basicAsset":"basicAsset","exchange":"exchange","countryOfRiskName":"countryOfRiskName","strikePrice":{"nano":5,"currency":"currency","units":"units"}}
 */
export interface V1Option {
  uid?: string;
  positionUid?: string;
  ticker?: string;
  classCode?: string;
  basicAssetPositionUid?: string;
  tradingStatus?: V1SecurityTradingStatus;
  /** Реальная площадка исполнения расчётов. */
  realExchange?: V1RealExchange;
  /** Тип опциона по направлению сделки. */
  direction?: V1OptionDirection;
  /** Тип расчетов по опциону. */
  paymentType?: V1OptionPaymentType;
  /** Тип опциона по стилю. */
  style?: V1OptionStyle;
  /** Тип опциона по способу исполнения. */
  settlementType?: V1OptionSettlementType;
  name?: string;
  currency?: string;
  settlementCurrency?: string;
  assetType?: string;
  basicAsset?: string;
  exchange?: string;
  countryOfRisk?: string;
  countryOfRiskName?: string;
  sector?: string;
  /** @format int32 */
  lot?: number;
  basicAssetSize?: V1Quotation;
  klong?: V1Quotation;
  kshort?: V1Quotation;
  dlong?: V1Quotation;
  dshort?: V1Quotation;
  dlongMin?: V1Quotation;
  dshortMin?: V1Quotation;
  minPriceIncrement?: V1Quotation;
  strikePrice?: V1MoneyValue;
  /** @format date-time */
  expirationDate?: string;
  /** @format date-time */
  firstTradeDate?: string;
  /** @format date-time */
  lastTradeDate?: string;
  /** @format date-time */
  first1minCandleDate?: string;
  /** @format date-time */
  first1dayCandleDate?: string;
  shortEnabledFlag?: boolean;
  forIisFlag?: boolean;
  otcFlag?: boolean;
  buyAvailableFlag?: boolean;
  sellAvailableFlag?: boolean;
  forQualInvestorFlag?: boolean;
  weekendFlag?: boolean;
  blockedTcaFlag?: boolean;
  apiTradeAvailableFlag?: boolean;
}

/**
 * Тип опциона по направлению сделки.
 * @default "OPTION_DIRECTION_UNSPECIFIED"
 */
export enum V1OptionDirection {
  OPTION_DIRECTION_UNSPECIFIED = "OPTION_DIRECTION_UNSPECIFIED",
  OPTION_DIRECTION_PUT = "OPTION_DIRECTION_PUT",
  OPTION_DIRECTION_CALL = "OPTION_DIRECTION_CALL",
}

/**
 * Тип расчетов по опциону.
 * @default "OPTION_PAYMENT_TYPE_UNSPECIFIED"
 */
export enum V1OptionPaymentType {
  OPTION_PAYMENT_TYPE_UNSPECIFIED = "OPTION_PAYMENT_TYPE_UNSPECIFIED",
  OPTION_PAYMENT_TYPE_PREMIUM = "OPTION_PAYMENT_TYPE_PREMIUM",
  OPTION_PAYMENT_TYPE_MARGINAL = "OPTION_PAYMENT_TYPE_MARGINAL",
}

/**
 * Данные по опциону.
 * @example {"instrument":{"dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"lastTradeDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","expirationDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","firstTradeDate":"2000-01-23T04:56:07.000Z","basicAssetSize":{"nano":6,"units":"units"},"forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","assetType":"assetType","minPriceIncrement":{"nano":6,"units":"units"},"basicAssetPositionUid":"basicAssetPositionUid","otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"settlementCurrency":"settlementCurrency","name":"name","basicAsset":"basicAsset","exchange":"exchange","countryOfRiskName":"countryOfRiskName","strikePrice":{"nano":5,"currency":"currency","units":"units"}}}
 */
export interface V1OptionResponse {
  /** Опцион. */
  instrument?: V1Option;
}

/**
 * Тип опциона по способу исполнения.
 * @default "OPTION_EXECUTION_TYPE_UNSPECIFIED"
 */
export enum V1OptionSettlementType {
  OPTION_EXECUTION_TYPE_UNSPECIFIED = "OPTION_EXECUTION_TYPE_UNSPECIFIED",
  OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY = "OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY",
  OPTION_EXECUTION_TYPE_CASH_SETTLEMENT = "OPTION_EXECUTION_TYPE_CASH_SETTLEMENT",
}

/**
 * Тип опциона по стилю.
 * @default "OPTION_STYLE_UNSPECIFIED"
 */
export enum V1OptionStyle {
  OPTION_STYLE_UNSPECIFIED = "OPTION_STYLE_UNSPECIFIED",
  OPTION_STYLE_AMERICAN = "OPTION_STYLE_AMERICAN",
  OPTION_STYLE_EUROPEAN = "OPTION_STYLE_EUROPEAN",
}

/**
 * Данные по опционам.
 * @example {"instruments":[{"dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"lastTradeDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","expirationDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","firstTradeDate":"2000-01-23T04:56:07.000Z","basicAssetSize":{"nano":6,"units":"units"},"forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","assetType":"assetType","minPriceIncrement":{"nano":6,"units":"units"},"basicAssetPositionUid":"basicAssetPositionUid","otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"settlementCurrency":"settlementCurrency","name":"name","basicAsset":"basicAsset","exchange":"exchange","countryOfRiskName":"countryOfRiskName","strikePrice":{"nano":5,"currency":"currency","units":"units"}},{"dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"lastTradeDate":"2000-01-23T04:56:07.000Z","sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","expirationDate":"2000-01-23T04:56:07.000Z","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","firstTradeDate":"2000-01-23T04:56:07.000Z","basicAssetSize":{"nano":6,"units":"units"},"forQualInvestorFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","assetType":"assetType","minPriceIncrement":{"nano":6,"units":"units"},"basicAssetPositionUid":"basicAssetPositionUid","otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"settlementCurrency":"settlementCurrency","name":"name","basicAsset":"basicAsset","exchange":"exchange","countryOfRiskName":"countryOfRiskName","strikePrice":{"nano":5,"currency":"currency","units":"units"}}]}
 */
export interface V1OptionsResponse {
  instruments?: V1Option[];
}

/**
 * Массив предложений/спроса.
 * @example {"quantity":"quantity","price":{"nano":6,"units":"units"}}
 */
export interface V1Order {
  price?: V1Quotation;
  /** @format int64 */
  quantity?: string;
}

/**
 * Пакет стаканов в рамках стрима.
 * @example {"depth":6,"asks":[{"quantity":"quantity","price":{"nano":6,"units":"units"}},{"quantity":"quantity","price":{"nano":6,"units":"units"}}],"instrumentUid":"instrumentUid","bids":[{"quantity":"quantity","price":{"nano":6,"units":"units"}},{"quantity":"quantity","price":{"nano":6,"units":"units"}}],"limitUp":{"nano":6,"units":"units"},"figi":"figi","time":"2000-01-23T04:56:07.000Z","limitDown":{"nano":6,"units":"units"},"isConsistent":true}
 */
export interface V1OrderBook {
  figi?: string;
  /** @format int32 */
  depth?: number;
  isConsistent?: boolean;
  bids?: V1Order[];
  asks?: V1Order[];
  /** @format date-time */
  time?: string;
  limitUp?: V1Quotation;
  limitDown?: V1Quotation;
  instrumentUid?: string;
}

/** Запрос подписки на стаканы. */
export interface V1OrderBookInstrument {
  figi?: string;
  /** @format int32 */
  depth?: number;
  instrumentId?: string;
}

/**
 * Статус подписки.
 * @example {"depth":0,"instrumentUid":"instrumentUid","figi":"figi"}
 */
export interface V1OrderBookSubscription {
  figi?: string;
  /** @format int32 */
  depth?: number;
  /** Результат подписки. */
  subscriptionStatus?: V1SubscriptionStatus;
  instrumentUid?: string;
}

/**
 * Направление операции.
 * @default "ORDER_DIRECTION_UNSPECIFIED"
 */
export enum V1OrderDirection {
  ORDER_DIRECTION_UNSPECIFIED = "ORDER_DIRECTION_UNSPECIFIED",
  ORDER_DIRECTION_BUY = "ORDER_DIRECTION_BUY",
  ORDER_DIRECTION_SELL = "ORDER_DIRECTION_SELL",
}

/**
 * Текущий статус заявки (поручения)
 * @default "EXECUTION_REPORT_STATUS_UNSPECIFIED"
 */
export enum V1OrderExecutionReportStatus {
  EXECUTION_REPORT_STATUS_UNSPECIFIED = "EXECUTION_REPORT_STATUS_UNSPECIFIED",
  EXECUTION_REPORT_STATUS_FILL = "EXECUTION_REPORT_STATUS_FILL",
  EXECUTION_REPORT_STATUS_REJECTED = "EXECUTION_REPORT_STATUS_REJECTED",
  EXECUTION_REPORT_STATUS_CANCELLED = "EXECUTION_REPORT_STATUS_CANCELLED",
  EXECUTION_REPORT_STATUS_NEW = "EXECUTION_REPORT_STATUS_NEW",
  EXECUTION_REPORT_STATUS_PARTIALLYFILL = "EXECUTION_REPORT_STATUS_PARTIALLYFILL",
}

/**
 * Сделки в рамках торгового поручения.
 * @example {"quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"}
 */
export interface V1OrderStage {
  price?: V1MoneyValue;
  /** @format int64 */
  quantity?: string;
  tradeId?: string;
}

/**
 * Информация о торговом поручении.
 * @example {"orderId":"orderId","figi":"figi","initialOrderPrice":{"nano":5,"currency":"currency","units":"units"},"initialCommission":{"nano":5,"currency":"currency","units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"lotsExecuted":"lotsExecuted","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"lotsRequested":"lotsRequested","instrumentUid":"instrumentUid","stages":[{"quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"},{"quantity":"quantity","price":{"nano":5,"currency":"currency","units":"units"},"tradeId":"tradeId"}],"orderRequestId":"orderRequestId","executedOrderPrice":{"nano":5,"currency":"currency","units":"units"},"executedCommission":{"nano":5,"currency":"currency","units":"units"},"initialSecurityPrice":{"nano":5,"currency":"currency","units":"units"},"serviceCommission":{"nano":5,"currency":"currency","units":"units"},"currency":"currency","orderDate":"2000-01-23T04:56:07.000Z"}
 */
export interface V1OrderState {
  orderId?: string;
  executionReportStatus?: V1OrderExecutionReportStatus;
  /** @format int64 */
  lotsRequested?: string;
  /** @format int64 */
  lotsExecuted?: string;
  initialOrderPrice?: V1MoneyValue;
  executedOrderPrice?: V1MoneyValue;
  totalOrderAmount?: V1MoneyValue;
  averagePositionPrice?: V1MoneyValue;
  initialCommission?: V1MoneyValue;
  executedCommission?: V1MoneyValue;
  figi?: string;
  /** Направление операции. */
  direction?: V1OrderDirection;
  initialSecurityPrice?: V1MoneyValue;
  stages?: V1OrderStage[];
  serviceCommission?: V1MoneyValue;
  currency?: string;
  /** Тип заявки. */
  orderType?: V1OrderType;
  /** @format date-time */
  orderDate?: string;
  instrumentUid?: string;
  orderRequestId?: string;
}

/**
 * Информация о сделке.
 * @example {"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":6,"units":"units"},"tradeId":"tradeId"}
 */
export interface V1OrderTrade {
  /** @format date-time */
  dateTime?: string;
  price?: V1Quotation;
  /** @format int64 */
  quantity?: string;
  tradeId?: string;
}

/**
 * Информация об исполнении торгового поручения.
 * @example {"createdAt":"2000-01-23T04:56:07.000Z","accountId":"accountId","orderId":"orderId","instrumentUid":"instrumentUid","trades":[{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":6,"units":"units"},"tradeId":"tradeId"},{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":6,"units":"units"},"tradeId":"tradeId"}],"figi":"figi"}
 */
export interface V1OrderTrades {
  orderId?: string;
  /** @format date-time */
  createdAt?: string;
  /** Направление операции. */
  direction?: V1OrderDirection;
  figi?: string;
  trades?: V1OrderTrade[];
  accountId?: string;
  instrumentUid?: string;
}

/**
 * Тип заявки.
 * @default "ORDER_TYPE_UNSPECIFIED"
 */
export enum V1OrderType {
  ORDER_TYPE_UNSPECIFIED = "ORDER_TYPE_UNSPECIFIED",
  ORDER_TYPE_LIMIT = "ORDER_TYPE_LIMIT",
  ORDER_TYPE_MARKET = "ORDER_TYPE_MARKET",
  ORDER_TYPE_BESTPRICE = "ORDER_TYPE_BESTPRICE",
}

/**
 * Проверка активности стрима.
 * @example {"time":"2000-01-23T04:56:07.000Z"}
 */
export interface V1Ping {
  /**
   * Время проверки.
   * @format date-time
   */
  time?: string;
}

/**
 * Позиции портфеля.
 * @example {"varMargin":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"averagePositionPricePt":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"currentPrice":{"nano":5,"currency":"currency","units":"units"},"positionUid":"positionUid","figi":"figi","quantityLots":{"nano":6,"units":"units"},"blockedLots":{"nano":6,"units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"blocked":true,"instrumentUid":"instrumentUid","currentNkd":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"}}
 */
export interface V1PortfolioPosition {
  figi?: string;
  instrumentType?: string;
  quantity?: V1Quotation;
  averagePositionPrice?: V1MoneyValue;
  expectedYield?: V1Quotation;
  currentNkd?: V1MoneyValue;
  averagePositionPricePt?: V1Quotation;
  currentPrice?: V1MoneyValue;
  averagePositionPriceFifo?: V1MoneyValue;
  quantityLots?: V1Quotation;
  blocked?: boolean;
  blockedLots?: V1Quotation;
  positionUid?: string;
  instrumentUid?: string;
  varMargin?: V1MoneyValue;
  expectedYieldFifo?: V1Quotation;
}

/** Запрос получения текущего портфеля по счёту. */
export interface V1PortfolioRequest {
  accountId?: string;
  currency?: PortfolioRequestCurrencyRequest;
}

/**
 * Текущий портфель по счёту.
 * @example {"totalAmountBonds":{"nano":5,"currency":"currency","units":"units"},"totalAmountFutures":{"nano":5,"currency":"currency","units":"units"},"accountId":"accountId","totalAmountCurrencies":{"nano":5,"currency":"currency","units":"units"},"totalAmountSp":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"},"positions":[{"varMargin":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"averagePositionPricePt":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"currentPrice":{"nano":5,"currency":"currency","units":"units"},"positionUid":"positionUid","figi":"figi","quantityLots":{"nano":6,"units":"units"},"blockedLots":{"nano":6,"units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"blocked":true,"instrumentUid":"instrumentUid","currentNkd":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"}},{"varMargin":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"averagePositionPricePt":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"currentPrice":{"nano":5,"currency":"currency","units":"units"},"positionUid":"positionUid","figi":"figi","quantityLots":{"nano":6,"units":"units"},"blockedLots":{"nano":6,"units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"blocked":true,"instrumentUid":"instrumentUid","currentNkd":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"}}],"totalAmountShares":{"nano":5,"currency":"currency","units":"units"},"totalAmountEtf":{"nano":5,"currency":"currency","units":"units"},"totalAmountPortfolio":{"nano":5,"currency":"currency","units":"units"},"virtualPositions":[{"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","positionUid":"positionUid","currentPrice":{"nano":5,"currency":"currency","units":"units"},"figi":"figi","expectedYield":{"nano":6,"units":"units"},"expireDate":"2000-01-23T04:56:07.000Z"},{"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","positionUid":"positionUid","currentPrice":{"nano":5,"currency":"currency","units":"units"},"figi":"figi","expectedYield":{"nano":6,"units":"units"},"expireDate":"2000-01-23T04:56:07.000Z"}],"totalAmountOptions":{"nano":5,"currency":"currency","units":"units"}}
 */
export interface V1PortfolioResponse {
  totalAmountShares?: V1MoneyValue;
  totalAmountBonds?: V1MoneyValue;
  totalAmountEtf?: V1MoneyValue;
  totalAmountCurrencies?: V1MoneyValue;
  totalAmountFutures?: V1MoneyValue;
  expectedYield?: V1Quotation;
  positions?: V1PortfolioPosition[];
  accountId?: string;
  totalAmountOptions?: V1MoneyValue;
  totalAmountSp?: V1MoneyValue;
  totalAmountPortfolio?: V1MoneyValue;
  virtualPositions?: V1VirtualPortfolioPosition[];
}

/** Запрос установки stream-соединения. */
export interface V1PortfolioStreamRequest {
  accounts?: string[];
}

/**
 * Информация по позициям и доходностям портфелей.
 * @example {"subscriptions":{"accounts":[{"accountId":"accountId"},{"accountId":"accountId"}]},"portfolio":{"totalAmountBonds":{"nano":5,"currency":"currency","units":"units"},"totalAmountFutures":{"nano":5,"currency":"currency","units":"units"},"accountId":"accountId","totalAmountCurrencies":{"nano":5,"currency":"currency","units":"units"},"totalAmountSp":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"},"positions":[{"varMargin":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"averagePositionPricePt":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"currentPrice":{"nano":5,"currency":"currency","units":"units"},"positionUid":"positionUid","figi":"figi","quantityLots":{"nano":6,"units":"units"},"blockedLots":{"nano":6,"units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"blocked":true,"instrumentUid":"instrumentUid","currentNkd":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"}},{"varMargin":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"averagePositionPricePt":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"currentPrice":{"nano":5,"currency":"currency","units":"units"},"positionUid":"positionUid","figi":"figi","quantityLots":{"nano":6,"units":"units"},"blockedLots":{"nano":6,"units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"blocked":true,"instrumentUid":"instrumentUid","currentNkd":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"}}],"totalAmountShares":{"nano":5,"currency":"currency","units":"units"},"totalAmountEtf":{"nano":5,"currency":"currency","units":"units"},"totalAmountPortfolio":{"nano":5,"currency":"currency","units":"units"},"virtualPositions":[{"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","positionUid":"positionUid","currentPrice":{"nano":5,"currency":"currency","units":"units"},"figi":"figi","expectedYield":{"nano":6,"units":"units"},"expireDate":"2000-01-23T04:56:07.000Z"},{"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","positionUid":"positionUid","currentPrice":{"nano":5,"currency":"currency","units":"units"},"figi":"figi","expectedYield":{"nano":6,"units":"units"},"expireDate":"2000-01-23T04:56:07.000Z"}],"totalAmountOptions":{"nano":5,"currency":"currency","units":"units"}},"ping":{"time":"2000-01-23T04:56:07.000Z"}}
 */
export interface V1PortfolioStreamResponse {
  /** Объект результата подписки. */
  subscriptions?: V1PortfolioSubscriptionResult;
  /** Текущий портфель по счёту. */
  portfolio?: V1PortfolioResponse;
  /** Проверка активности стрима. */
  ping?: V1Ping;
}

/**
 * Объект результата подписки.
 * @example {"accounts":[{"accountId":"accountId"},{"accountId":"accountId"}]}
 */
export interface V1PortfolioSubscriptionResult {
  accounts?: V1AccountSubscriptionStatus[];
}

/**
 * Результат подписки.
 * @default "PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED"
 */
export enum V1PortfolioSubscriptionStatus {
  PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED = "PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED",
  PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS = "PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS",
  PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = "PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND",
  PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR = "PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR",
}

/**
 * Данные о позиции портфеля.
 * @example {"date":"2000-01-23T04:56:07.000Z","accountId":"accountId","money":[{"availableValue":{"nano":5,"currency":"currency","units":"units"},"blockedValue":{"nano":5,"currency":"currency","units":"units"}},{"availableValue":{"nano":5,"currency":"currency","units":"units"},"blockedValue":{"nano":5,"currency":"currency","units":"units"}}],"options":[{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"},{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"}],"futures":[{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"},{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"}],"securities":[{"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true},{"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true}]}
 */
export interface V1PositionData {
  accountId?: string;
  money?: V1PositionsMoney[];
  securities?: V1PositionsSecurities[];
  futures?: V1PositionsFutures[];
  options?: V1PositionsOptions[];
  /** @format date-time */
  date?: string;
}

/**
 * Результат подписки.
 * @default "POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED"
 */
export enum V1PositionsAccountSubscriptionStatus {
  POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED = "POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED",
  POSITIONS_SUBSCRIPTION_STATUS_SUCCESS = "POSITIONS_SUBSCRIPTION_STATUS_SUCCESS",
  POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = "POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND",
  POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR = "POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR",
}

/**
 * Баланс фьючерса.
 * @example {"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"}
 */
export interface V1PositionsFutures {
  figi?: string;
  /** @format int64 */
  blocked?: string;
  /** @format int64 */
  balance?: string;
  positionUid?: string;
  instrumentUid?: string;
}

/**
 * Валютная позиция портфеля.
 * @example {"availableValue":{"nano":5,"currency":"currency","units":"units"},"blockedValue":{"nano":5,"currency":"currency","units":"units"}}
 */
export interface V1PositionsMoney {
  availableValue?: V1MoneyValue;
  blockedValue?: V1MoneyValue;
}

/**
 * Баланс опциона.
 * @example {"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"}
 */
export interface V1PositionsOptions {
  positionUid?: string;
  instrumentUid?: string;
  /** @format int64 */
  blocked?: string;
  /** @format int64 */
  balance?: string;
}

/** Запрос позиций портфеля по счёту. */
export interface V1PositionsRequest {
  accountId?: string;
}

/**
 * Список позиций по счёту.
 * @example {"limitsLoadingInProgress":true,"money":[{"nano":5,"currency":"currency","units":"units"},{"nano":5,"currency":"currency","units":"units"}],"blocked":[{"nano":5,"currency":"currency","units":"units"},{"nano":5,"currency":"currency","units":"units"}],"options":[{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"},{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"}],"futures":[{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"},{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"}],"securities":[{"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true},{"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true}]}
 */
export interface V1PositionsResponse {
  money?: V1MoneyValue[];
  blocked?: V1MoneyValue[];
  securities?: V1PositionsSecurities[];
  limitsLoadingInProgress?: boolean;
  futures?: V1PositionsFutures[];
  options?: V1PositionsOptions[];
}

/**
 * Баланс позиции ценной бумаги.
 * @example {"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true}
 */
export interface V1PositionsSecurities {
  figi?: string;
  /** @format int64 */
  blocked?: string;
  /** @format int64 */
  balance?: string;
  positionUid?: string;
  instrumentUid?: string;
  exchangeBlocked?: boolean;
  instrumentType?: string;
}

/** Запрос установки stream-соединения позиций. */
export interface V1PositionsStreamRequest {
  accounts?: string[];
}

/**
 * Информация по изменению позиций портфеля.
 * @example {"subscriptions":{"accounts":[{"accountId":"accountId"},{"accountId":"accountId"}]},"ping":{"time":"2000-01-23T04:56:07.000Z"},"position":{"date":"2000-01-23T04:56:07.000Z","accountId":"accountId","money":[{"availableValue":{"nano":5,"currency":"currency","units":"units"},"blockedValue":{"nano":5,"currency":"currency","units":"units"}},{"availableValue":{"nano":5,"currency":"currency","units":"units"},"blockedValue":{"nano":5,"currency":"currency","units":"units"}}],"options":[{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"},{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"}],"futures":[{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"},{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"}],"securities":[{"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true},{"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true}]}}
 */
export interface V1PositionsStreamResponse {
  /** Объект результата подписки. */
  subscriptions?: V1PositionsSubscriptionResult;
  /** Данные о позиции портфеля. */
  position?: V1PositionData;
  /** Проверка активности стрима. */
  ping?: V1Ping;
}

/**
 * Объект результата подписки.
 * @example {"accounts":[{"accountId":"accountId"},{"accountId":"accountId"}]}
 */
export interface V1PositionsSubscriptionResult {
  accounts?: V1PositionsSubscriptionStatus[];
}

/**
 * Счет клиента.
 * @example {"accountId":"accountId"}
 */
export interface V1PositionsSubscriptionStatus {
  accountId?: string;
  /** Результат подписки. */
  subscriptionStatus?: V1PositionsAccountSubscriptionStatus;
}

/** Запрос выставления торгового поручения. */
export interface V1PostOrderRequest {
  figi?: string;
  /** @format int64 */
  quantity?: string;
  price?: V1Quotation;
  /** Направление операции. */
  direction?: V1OrderDirection;
  accountId?: string;
  /** Тип заявки. */
  orderType?: V1OrderType;
  orderId?: string;
  instrumentId?: string;
}

/**
 * Информация о выставлении поручения.
 * @example {"orderId":"orderId","figi":"figi","initialOrderPrice":{"nano":5,"currency":"currency","units":"units"},"initialCommission":{"nano":5,"currency":"currency","units":"units"},"message":"message","lotsExecuted":"lotsExecuted","totalOrderAmount":{"nano":5,"currency":"currency","units":"units"},"lotsRequested":"lotsRequested","initialOrderPricePt":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","executedOrderPrice":{"nano":5,"currency":"currency","units":"units"},"executedCommission":{"nano":5,"currency":"currency","units":"units"},"initialSecurityPrice":{"nano":5,"currency":"currency","units":"units"},"aciValue":{"nano":5,"currency":"currency","units":"units"}}
 */
export interface V1PostOrderResponse {
  orderId?: string;
  executionReportStatus?: V1OrderExecutionReportStatus;
  /** @format int64 */
  lotsRequested?: string;
  /** @format int64 */
  lotsExecuted?: string;
  initialOrderPrice?: V1MoneyValue;
  executedOrderPrice?: V1MoneyValue;
  totalOrderAmount?: V1MoneyValue;
  initialCommission?: V1MoneyValue;
  executedCommission?: V1MoneyValue;
  aciValue?: V1MoneyValue;
  figi?: string;
  /** Направление операции. */
  direction?: V1OrderDirection;
  initialSecurityPrice?: V1MoneyValue;
  /** Тип заявки. */
  orderType?: V1OrderType;
  message?: string;
  initialOrderPricePt?: V1Quotation;
  instrumentUid?: string;
}

/** Запрос выставления стоп-заявки. */
export interface V1PostStopOrderRequest {
  figi?: string;
  /** @format int64 */
  quantity?: string;
  price?: V1Quotation;
  stopPrice?: V1Quotation;
  /** Направление сделки стоп-заявки. */
  direction?: V1StopOrderDirection;
  accountId?: string;
  /** Тип экспирации стоп-заявке. */
  expirationType?: V1StopOrderExpirationType;
  /** Тип стоп-заявки. */
  stopOrderType?: V1StopOrderType;
  /** @format date-time */
  expireDate?: string;
  instrumentId?: string;
}

/**
 * Результат выставления стоп-заявки.
 * @example {"stopOrderId":"stopOrderId"}
 */
export interface V1PostStopOrderResponse {
  stopOrderId?: string;
}

/**
 * Тип цены.
 * @default "PRICE_TYPE_UNSPECIFIED"
 */
export enum V1PriceType {
  PRICE_TYPE_UNSPECIFIED = "PRICE_TYPE_UNSPECIFIED",
  PRICE_TYPE_POINT = "PRICE_TYPE_POINT",
  PRICE_TYPE_CURRENCY = "PRICE_TYPE_CURRENCY",
}

/**
 * Котировка - денежная сумма без указания валюты
 * @example {"nano":6,"units":"units"}
 */
export interface V1Quotation {
  /**
   * целая часть суммы, может быть отрицательным числом
   * @format int64
   */
  units?: string;
  /**
   * дробная часть суммы, может быть отрицательным числом
   * @format int32
   */
  nano?: number;
}

/**
 * Реальная площадка исполнения расчётов.
 * @default "REAL_EXCHANGE_UNSPECIFIED"
 */
export enum V1RealExchange {
  REAL_EXCHANGE_UNSPECIFIED = "REAL_EXCHANGE_UNSPECIFIED",
  REAL_EXCHANGE_MOEX = "REAL_EXCHANGE_MOEX",
  REAL_EXCHANGE_RTS = "REAL_EXCHANGE_RTS",
  REAL_EXCHANGE_OTC = "REAL_EXCHANGE_OTC",
}

/** Запрос изменения выставленной заявки. */
export interface V1ReplaceOrderRequest {
  accountId?: string;
  orderId?: string;
  idempotencyKey?: string;
  /** @format int64 */
  quantity?: string;
  price?: V1Quotation;
  /** Тип цены. */
  priceType?: V1PriceType;
}

/**
 * Уровень риска облигации.
 * @default "RISK_LEVEL_UNSPECIFIED"
 */
export enum V1RiskLevel {
  RISK_LEVEL_UNSPECIFIED = "RISK_LEVEL_UNSPECIFIED",
  RISK_LEVEL_LOW = "RISK_LEVEL_LOW",
  RISK_LEVEL_MODERATE = "RISK_LEVEL_MODERATE",
  RISK_LEVEL_HIGH = "RISK_LEVEL_HIGH",
}

/** Запрос пополнения счёта в песочнице. */
export interface V1SandboxPayInRequest {
  accountId?: string;
  amount?: V1MoneyValue;
}

/**
 * Результат пополнения счёта, текущий баланс.
 * @example {"balance":{"nano":5,"currency":"currency","units":"units"}}
 */
export interface V1SandboxPayInResponse {
  balance?: V1MoneyValue;
}

/**
 * Режим торгов инструмента
 * @default "SECURITY_TRADING_STATUS_UNSPECIFIED"
 */
export enum V1SecurityTradingStatus {
  SECURITY_TRADING_STATUS_UNSPECIFIED = "SECURITY_TRADING_STATUS_UNSPECIFIED",
  SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING",
  SECURITY_TRADING_STATUS_OPENING_PERIOD = "SECURITY_TRADING_STATUS_OPENING_PERIOD",
  SECURITY_TRADING_STATUS_CLOSING_PERIOD = "SECURITY_TRADING_STATUS_CLOSING_PERIOD",
  SECURITY_TRADING_STATUS_BREAK_IN_TRADING = "SECURITY_TRADING_STATUS_BREAK_IN_TRADING",
  SECURITY_TRADING_STATUS_NORMAL_TRADING = "SECURITY_TRADING_STATUS_NORMAL_TRADING",
  SECURITY_TRADING_STATUS_CLOSING_AUCTION = "SECURITY_TRADING_STATUS_CLOSING_AUCTION",
  SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION",
  SECURITY_TRADING_STATUS_DISCRETE_AUCTION = "SECURITY_TRADING_STATUS_DISCRETE_AUCTION",
  SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD",
  SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE",
  SECURITY_TRADING_STATUS_SESSION_ASSIGNED = "SECURITY_TRADING_STATUS_SESSION_ASSIGNED",
  SECURITY_TRADING_STATUS_SESSION_CLOSE = "SECURITY_TRADING_STATUS_SESSION_CLOSE",
  SECURITY_TRADING_STATUS_SESSION_OPEN = "SECURITY_TRADING_STATUS_SESSION_OPEN",
  SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING",
  SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING",
  SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING = "SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING",
}

/**
 * Объект передачи информации об акции.
 * @example {"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","forQualInvestorFlag":true,"liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","issueSizePlan":"issueSizePlan","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","issueSize":"issueSize","exchange":"exchange","countryOfRiskName":"countryOfRiskName","divYieldFlag":true,"isin":"isin","ipoDate":"2000-01-23T04:56:07.000Z"}
 */
export interface V1Share {
  figi?: string;
  ticker?: string;
  classCode?: string;
  isin?: string;
  /** @format int32 */
  lot?: number;
  currency?: string;
  klong?: V1Quotation;
  kshort?: V1Quotation;
  dlong?: V1Quotation;
  dshort?: V1Quotation;
  dlongMin?: V1Quotation;
  dshortMin?: V1Quotation;
  shortEnabledFlag?: boolean;
  name?: string;
  exchange?: string;
  /** @format date-time */
  ipoDate?: string;
  /** @format int64 */
  issueSize?: string;
  countryOfRisk?: string;
  countryOfRiskName?: string;
  sector?: string;
  /** @format int64 */
  issueSizePlan?: string;
  nominal?: V1MoneyValue;
  tradingStatus?: V1SecurityTradingStatus;
  otcFlag?: boolean;
  buyAvailableFlag?: boolean;
  sellAvailableFlag?: boolean;
  divYieldFlag?: boolean;
  /** Тип акций. */
  shareType?: V1ShareType;
  minPriceIncrement?: V1Quotation;
  apiTradeAvailableFlag?: boolean;
  uid?: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange?: V1RealExchange;
  positionUid?: string;
  forIisFlag?: boolean;
  forQualInvestorFlag?: boolean;
  weekendFlag?: boolean;
  blockedTcaFlag?: boolean;
  liquidityFlag?: boolean;
  /** @format date-time */
  first1minCandleDate?: string;
  /** @format date-time */
  first1dayCandleDate?: string;
}

/**
 * Данные по акции.
 * @example {"instrument":{"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","forQualInvestorFlag":true,"liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","issueSizePlan":"issueSizePlan","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","issueSize":"issueSize","exchange":"exchange","countryOfRiskName":"countryOfRiskName","divYieldFlag":true,"isin":"isin","ipoDate":"2000-01-23T04:56:07.000Z"}}
 */
export interface V1ShareResponse {
  /** Объект передачи информации об акции. */
  instrument?: V1Share;
}

/**
 * Тип акций.
 * @default "SHARE_TYPE_UNSPECIFIED"
 */
export enum V1ShareType {
  SHARE_TYPE_UNSPECIFIED = "SHARE_TYPE_UNSPECIFIED",
  SHARE_TYPE_COMMON = "SHARE_TYPE_COMMON",
  SHARE_TYPE_PREFERRED = "SHARE_TYPE_PREFERRED",
  SHARE_TYPE_ADR = "SHARE_TYPE_ADR",
  SHARE_TYPE_GDR = "SHARE_TYPE_GDR",
  SHARE_TYPE_MLP = "SHARE_TYPE_MLP",
  SHARE_TYPE_NY_REG_SHRS = "SHARE_TYPE_NY_REG_SHRS",
  SHARE_TYPE_CLOSED_END_FUND = "SHARE_TYPE_CLOSED_END_FUND",
  SHARE_TYPE_REIT = "SHARE_TYPE_REIT",
}

/**
 * Данные по акциям.
 * @example {"instruments":[{"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","forQualInvestorFlag":true,"liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","issueSizePlan":"issueSizePlan","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","issueSize":"issueSize","exchange":"exchange","countryOfRiskName":"countryOfRiskName","divYieldFlag":true,"isin":"isin","ipoDate":"2000-01-23T04:56:07.000Z"},{"figi":"figi","dshortMin":{"nano":6,"units":"units"},"countryOfRisk":"countryOfRisk","lot":0,"uid":"uid","blockedTcaFlag":true,"dlong":{"nano":6,"units":"units"},"nominal":{"nano":5,"currency":"currency","units":"units"},"sellAvailableFlag":true,"currency":"currency","first1dayCandleDate":"2000-01-23T04:56:07.000Z","sector":"sector","buyAvailableFlag":true,"weekendFlag":true,"classCode":"classCode","ticker":"ticker","forQualInvestorFlag":true,"liquidityFlag":true,"forIisFlag":true,"positionUid":"positionUid","apiTradeAvailableFlag":true,"dlongMin":{"nano":6,"units":"units"},"shortEnabledFlag":true,"kshort":{"nano":6,"units":"units"},"first1minCandleDate":"2000-01-23T04:56:07.000Z","issueSizePlan":"issueSizePlan","minPriceIncrement":{"nano":6,"units":"units"},"otcFlag":true,"klong":{"nano":6,"units":"units"},"dshort":{"nano":6,"units":"units"},"name":"name","issueSize":"issueSize","exchange":"exchange","countryOfRiskName":"countryOfRiskName","divYieldFlag":true,"isin":"isin","ipoDate":"2000-01-23T04:56:07.000Z"}]}
 */
export interface V1SharesResponse {
  instruments?: V1Share[];
}

/** @example {"price":0.8008282,"signalId":"signalId","instrumentUid":"instrumentUid","lifetime":"lifetime","strategyId":"strategyId","createDt":"2000-01-23T04:56:07.000Z","profit":6.0274563,"direction":"direction","info":"info"} */
export interface V1Signal {
  signalId?: string;
  strategyId?: string;
  instrumentUid?: string;
  /** @format date-time */
  createDt?: string;
  /** @format int64 */
  lifetime?: string;
  direction?: string;
  /** @format float */
  price?: number;
  /** @format float */
  profit?: number;
  info?: string;
}

/**
 * Информация о стоп-заявке.
 * @example {"activationDateTime":"2000-01-23T04:56:07.000Z","stopPrice":{"nano":5,"currency":"currency","units":"units"},"lotsRequested":"lotsRequested","expirationTime":"2000-01-23T04:56:07.000Z","price":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","figi":"figi","currency":"currency","stopOrderId":"stopOrderId","createDate":"2000-01-23T04:56:07.000Z"}
 */
export interface V1StopOrder {
  stopOrderId?: string;
  /** @format int64 */
  lotsRequested?: string;
  figi?: string;
  /** Направление сделки стоп-заявки. */
  direction?: V1StopOrderDirection;
  currency?: string;
  /** Тип стоп-заявки. */
  orderType?: V1StopOrderType;
  /** @format date-time */
  createDate?: string;
  /** @format date-time */
  activationDateTime?: string;
  /** @format date-time */
  expirationTime?: string;
  price?: V1MoneyValue;
  stopPrice?: V1MoneyValue;
  instrumentUid?: string;
}

/**
 * Направление сделки стоп-заявки.
 * @default "STOP_ORDER_DIRECTION_UNSPECIFIED"
 */
export enum V1StopOrderDirection {
  STOP_ORDER_DIRECTION_UNSPECIFIED = "STOP_ORDER_DIRECTION_UNSPECIFIED",
  STOP_ORDER_DIRECTION_BUY = "STOP_ORDER_DIRECTION_BUY",
  STOP_ORDER_DIRECTION_SELL = "STOP_ORDER_DIRECTION_SELL",
}

/**
 * Тип экспирации стоп-заявке.
 * @default "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED"
 */
export enum V1StopOrderExpirationType {
  STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED = "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED",
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL",
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE",
}

/**
 * Тип стоп-заявки.
 * @default "STOP_ORDER_TYPE_UNSPECIFIED"
 */
export enum V1StopOrderType {
  STOP_ORDER_TYPE_UNSPECIFIED = "STOP_ORDER_TYPE_UNSPECIFIED",
  STOP_ORDER_TYPE_TAKE_PROFIT = "STOP_ORDER_TYPE_TAKE_PROFIT",
  STOP_ORDER_TYPE_STOP_LOSS = "STOP_ORDER_TYPE_STOP_LOSS",
  STOP_ORDER_TYPE_STOP_LIMIT = "STOP_ORDER_TYPE_STOP_LIMIT",
}

/** @example {"strategyName":"strategyName","strategyDescription":"strategyDescription","strategyUrl":"strategyUrl","strategyId":"strategyId"} */
export interface V1Strategy {
  strategyId?: string;
  strategyName?: string;
  strategyDescription?: string;
  strategyUrl?: string;
}

/**
 * Лимит stream-соединений.
 * @example {"streams":["streams","streams"],"limit":6,"open":1}
 */
export interface V1StreamLimit {
  /** @format int32 */
  limit?: number;
  streams?: string[];
  /** @format int32 */
  open?: number;
}

/**
 * Тип структурной ноты.
 * @default "SP_TYPE_UNSPECIFIED"
 */
export enum V1StructuredProductType {
  SP_TYPE_UNSPECIFIED = "SP_TYPE_UNSPECIFIED",
  SP_TYPE_DELIVERABLE = "SP_TYPE_DELIVERABLE",
  SP_TYPE_NON_DELIVERABLE = "SP_TYPE_NON_DELIVERABLE",
}

/** subscribeCandles | Изменения статуса подписки на свечи. */
export interface V1SubscribeCandlesRequest {
  /** Тип операции со списком подписок. */
  subscriptionAction?: V1SubscriptionAction;
  instruments?: V1CandleInstrument[];
  waitingClose?: boolean;
}

/**
 * Результат изменения статус подписки на свечи.
 * @example {"candlesSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"}
 */
export interface V1SubscribeCandlesResponse {
  trackingId?: string;
  candlesSubscriptions?: V1CandleSubscription[];
}

/** Изменение статуса подписки на торговый статус инструмента. */
export interface V1SubscribeInfoRequest {
  /** Тип операции со списком подписок. */
  subscriptionAction?: V1SubscriptionAction;
  instruments?: V1InfoInstrument[];
}

/**
 * Результат изменения статуса подписки на торговый статус.
 * @example {"infoSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"}
 */
export interface V1SubscribeInfoResponse {
  trackingId?: string;
  infoSubscriptions?: V1InfoSubscription[];
}

/** Изменение статуса подписки на цену последней сделки по инструменту. */
export interface V1SubscribeLastPriceRequest {
  /** Тип операции со списком подписок. */
  subscriptionAction?: V1SubscriptionAction;
  instruments?: V1LastPriceInstrument[];
}

/**
 * Результат изменения статуса подписки на цену последней сделки.
 * @example {"lastPriceSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"}
 */
export interface V1SubscribeLastPriceResponse {
  trackingId?: string;
  lastPriceSubscriptions?: V1LastPriceSubscription[];
}

/** Запрос на изменение статуса подписки на стаканы. */
export interface V1SubscribeOrderBookRequest {
  /** Тип операции со списком подписок. */
  subscriptionAction?: V1SubscriptionAction;
  instruments?: V1OrderBookInstrument[];
}

/**
 * Результат изменения статуса подписки на стаканы.
 * @example {"orderBookSubscriptions":[{"depth":0,"instrumentUid":"instrumentUid","figi":"figi"},{"depth":0,"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"}
 */
export interface V1SubscribeOrderBookResponse {
  trackingId?: string;
  orderBookSubscriptions?: V1OrderBookSubscription[];
}

/** Изменение статуса подписки на поток обезличенных сделок. */
export interface V1SubscribeTradesRequest {
  /** Тип операции со списком подписок. */
  subscriptionAction?: V1SubscriptionAction;
  instruments?: V1TradeInstrument[];
}

/**
 * Результат изменения статуса подписки на поток обезличенных сделок.
 * @example {"tradeSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"}
 */
export interface V1SubscribeTradesResponse {
  trackingId?: string;
  tradeSubscriptions?: V1TradeSubscription[];
}

/**
 * Тип операции со списком подписок.
 * @default "SUBSCRIPTION_ACTION_UNSPECIFIED"
 */
export enum V1SubscriptionAction {
  SUBSCRIPTION_ACTION_UNSPECIFIED = "SUBSCRIPTION_ACTION_UNSPECIFIED",
  SUBSCRIPTION_ACTION_SUBSCRIBE = "SUBSCRIPTION_ACTION_SUBSCRIBE",
  SUBSCRIPTION_ACTION_UNSUBSCRIBE = "SUBSCRIPTION_ACTION_UNSUBSCRIBE",
}

/**
 * Интервал свечи.
 * @default "SUBSCRIPTION_INTERVAL_UNSPECIFIED"
 */
export enum V1SubscriptionInterval {
  SUBSCRIPTION_INTERVAL_UNSPECIFIED = "SUBSCRIPTION_INTERVAL_UNSPECIFIED",
  SUBSCRIPTION_INTERVAL_ONE_MINUTE = "SUBSCRIPTION_INTERVAL_ONE_MINUTE",
  SUBSCRIPTION_INTERVAL_FIVE_MINUTES = "SUBSCRIPTION_INTERVAL_FIVE_MINUTES",
}

/**
 * Результат подписки.
 * @default "SUBSCRIPTION_STATUS_UNSPECIFIED"
 */
export enum V1SubscriptionStatus {
  SUBSCRIPTION_STATUS_UNSPECIFIED = "SUBSCRIPTION_STATUS_UNSPECIFIED",
  SUBSCRIPTION_STATUS_SUCCESS = "SUBSCRIPTION_STATUS_SUCCESS",
  SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = "SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND",
  SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = "SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID",
  SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = "SUBSCRIPTION_STATUS_DEPTH_IS_INVALID",
  SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = "SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID",
  SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = "SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED",
  SUBSCRIPTION_STATUS_INTERNAL_ERROR = "SUBSCRIPTION_STATUS_INTERNAL_ERROR",
  SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS = "SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS",
}

/**
 * Информация о сделке.
 * @example {"quantity":"quantity","price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}
 */
export interface V1Trade {
  figi?: string;
  /** Направление сделки. */
  direction?: V1TradeDirection;
  price?: V1Quotation;
  /** @format int64 */
  quantity?: string;
  /** @format date-time */
  time?: string;
  instrumentUid?: string;
}

/**
 * Направление сделки.
 * @default "TRADE_DIRECTION_UNSPECIFIED"
 */
export enum V1TradeDirection {
  TRADE_DIRECTION_UNSPECIFIED = "TRADE_DIRECTION_UNSPECIFIED",
  TRADE_DIRECTION_BUY = "TRADE_DIRECTION_BUY",
  TRADE_DIRECTION_SELL = "TRADE_DIRECTION_SELL",
}

/** Запрос подписки на поток обезличенных сделок. */
export interface V1TradeInstrument {
  figi?: string;
  instrumentId?: string;
}

/**
 * Статус подписки.
 * @example {"instrumentUid":"instrumentUid","figi":"figi"}
 */
export interface V1TradeSubscription {
  figi?: string;
  /** Результат подписки. */
  subscriptionStatus?: V1SubscriptionStatus;
  instrumentUid?: string;
}

/** Запрос установки соединения. */
export interface V1TradesStreamRequest {
  accounts?: string[];
}

/**
 * Информация о торговых поручениях.
 * @example {"ping":{"time":"2000-01-23T04:56:07.000Z"},"orderTrades":{"createdAt":"2000-01-23T04:56:07.000Z","accountId":"accountId","orderId":"orderId","instrumentUid":"instrumentUid","trades":[{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":6,"units":"units"},"tradeId":"tradeId"},{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":6,"units":"units"},"tradeId":"tradeId"}],"figi":"figi"}}
 */
export interface V1TradesStreamResponse {
  /** Информация об исполнении торгового поручения. */
  orderTrades?: V1OrderTrades;
  /** Проверка активности стрима. */
  ping?: V1Ping;
}

/**
 * Информация о времени торгов.
 * @example {"date":"2000-01-23T04:56:07.000Z","clearingEndTime":"2000-01-23T04:56:07.000Z","openingAuctionStartTime":"2000-01-23T04:56:07.000Z","closingAuctionEndTime":"2000-01-23T04:56:07.000Z","eveningEndTime":"2000-01-23T04:56:07.000Z","premarketStartTime":"2000-01-23T04:56:07.000Z","eveningOpeningAuctionStartTime":"2000-01-23T04:56:07.000Z","isTradingDay":true,"eveningStartTime":"2000-01-23T04:56:07.000Z","openingAuctionEndTime":"2000-01-23T04:56:07.000Z","premarketEndTime":"2000-01-23T04:56:07.000Z","closingAuctionStartTime":"2000-01-23T04:56:07.000Z","clearingStartTime":"2000-01-23T04:56:07.000Z","startTime":"2000-01-23T04:56:07.000Z","endTime":"2000-01-23T04:56:07.000Z"}
 */
export interface V1TradingDay {
  /** @format date-time */
  date?: string;
  isTradingDay?: boolean;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  endTime?: string;
  /** @format date-time */
  openingAuctionStartTime?: string;
  /** @format date-time */
  closingAuctionEndTime?: string;
  /** @format date-time */
  eveningOpeningAuctionStartTime?: string;
  /** @format date-time */
  eveningStartTime?: string;
  /** @format date-time */
  eveningEndTime?: string;
  /** @format date-time */
  clearingStartTime?: string;
  /** @format date-time */
  clearingEndTime?: string;
  /** @format date-time */
  premarketStartTime?: string;
  /** @format date-time */
  premarketEndTime?: string;
  /** @format date-time */
  closingAuctionStartTime?: string;
  /** @format date-time */
  openingAuctionEndTime?: string;
}

/**
 * Данные по торговой площадке.
 * @example {"days":[{"date":"2000-01-23T04:56:07.000Z","clearingEndTime":"2000-01-23T04:56:07.000Z","openingAuctionStartTime":"2000-01-23T04:56:07.000Z","closingAuctionEndTime":"2000-01-23T04:56:07.000Z","eveningEndTime":"2000-01-23T04:56:07.000Z","premarketStartTime":"2000-01-23T04:56:07.000Z","eveningOpeningAuctionStartTime":"2000-01-23T04:56:07.000Z","isTradingDay":true,"eveningStartTime":"2000-01-23T04:56:07.000Z","openingAuctionEndTime":"2000-01-23T04:56:07.000Z","premarketEndTime":"2000-01-23T04:56:07.000Z","closingAuctionStartTime":"2000-01-23T04:56:07.000Z","clearingStartTime":"2000-01-23T04:56:07.000Z","startTime":"2000-01-23T04:56:07.000Z","endTime":"2000-01-23T04:56:07.000Z"},{"date":"2000-01-23T04:56:07.000Z","clearingEndTime":"2000-01-23T04:56:07.000Z","openingAuctionStartTime":"2000-01-23T04:56:07.000Z","closingAuctionEndTime":"2000-01-23T04:56:07.000Z","eveningEndTime":"2000-01-23T04:56:07.000Z","premarketStartTime":"2000-01-23T04:56:07.000Z","eveningOpeningAuctionStartTime":"2000-01-23T04:56:07.000Z","isTradingDay":true,"eveningStartTime":"2000-01-23T04:56:07.000Z","openingAuctionEndTime":"2000-01-23T04:56:07.000Z","premarketEndTime":"2000-01-23T04:56:07.000Z","closingAuctionStartTime":"2000-01-23T04:56:07.000Z","clearingStartTime":"2000-01-23T04:56:07.000Z","startTime":"2000-01-23T04:56:07.000Z","endTime":"2000-01-23T04:56:07.000Z"}],"exchange":"exchange"}
 */
export interface V1TradingSchedule {
  exchange?: string;
  days?: V1TradingDay[];
}

/** Запрос расписания торгов. */
export interface V1TradingSchedulesRequest {
  exchange?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
}

/**
 * Список торговых площадок.
 * @example {"exchanges":[{"days":[{"date":"2000-01-23T04:56:07.000Z","clearingEndTime":"2000-01-23T04:56:07.000Z","openingAuctionStartTime":"2000-01-23T04:56:07.000Z","closingAuctionEndTime":"2000-01-23T04:56:07.000Z","eveningEndTime":"2000-01-23T04:56:07.000Z","premarketStartTime":"2000-01-23T04:56:07.000Z","eveningOpeningAuctionStartTime":"2000-01-23T04:56:07.000Z","isTradingDay":true,"eveningStartTime":"2000-01-23T04:56:07.000Z","openingAuctionEndTime":"2000-01-23T04:56:07.000Z","premarketEndTime":"2000-01-23T04:56:07.000Z","closingAuctionStartTime":"2000-01-23T04:56:07.000Z","clearingStartTime":"2000-01-23T04:56:07.000Z","startTime":"2000-01-23T04:56:07.000Z","endTime":"2000-01-23T04:56:07.000Z"},{"date":"2000-01-23T04:56:07.000Z","clearingEndTime":"2000-01-23T04:56:07.000Z","openingAuctionStartTime":"2000-01-23T04:56:07.000Z","closingAuctionEndTime":"2000-01-23T04:56:07.000Z","eveningEndTime":"2000-01-23T04:56:07.000Z","premarketStartTime":"2000-01-23T04:56:07.000Z","eveningOpeningAuctionStartTime":"2000-01-23T04:56:07.000Z","isTradingDay":true,"eveningStartTime":"2000-01-23T04:56:07.000Z","openingAuctionEndTime":"2000-01-23T04:56:07.000Z","premarketEndTime":"2000-01-23T04:56:07.000Z","closingAuctionStartTime":"2000-01-23T04:56:07.000Z","clearingStartTime":"2000-01-23T04:56:07.000Z","startTime":"2000-01-23T04:56:07.000Z","endTime":"2000-01-23T04:56:07.000Z"}],"exchange":"exchange"},{"days":[{"date":"2000-01-23T04:56:07.000Z","clearingEndTime":"2000-01-23T04:56:07.000Z","openingAuctionStartTime":"2000-01-23T04:56:07.000Z","closingAuctionEndTime":"2000-01-23T04:56:07.000Z","eveningEndTime":"2000-01-23T04:56:07.000Z","premarketStartTime":"2000-01-23T04:56:07.000Z","eveningOpeningAuctionStartTime":"2000-01-23T04:56:07.000Z","isTradingDay":true,"eveningStartTime":"2000-01-23T04:56:07.000Z","openingAuctionEndTime":"2000-01-23T04:56:07.000Z","premarketEndTime":"2000-01-23T04:56:07.000Z","closingAuctionStartTime":"2000-01-23T04:56:07.000Z","clearingStartTime":"2000-01-23T04:56:07.000Z","startTime":"2000-01-23T04:56:07.000Z","endTime":"2000-01-23T04:56:07.000Z"},{"date":"2000-01-23T04:56:07.000Z","clearingEndTime":"2000-01-23T04:56:07.000Z","openingAuctionStartTime":"2000-01-23T04:56:07.000Z","closingAuctionEndTime":"2000-01-23T04:56:07.000Z","eveningEndTime":"2000-01-23T04:56:07.000Z","premarketStartTime":"2000-01-23T04:56:07.000Z","eveningOpeningAuctionStartTime":"2000-01-23T04:56:07.000Z","isTradingDay":true,"eveningStartTime":"2000-01-23T04:56:07.000Z","openingAuctionEndTime":"2000-01-23T04:56:07.000Z","premarketEndTime":"2000-01-23T04:56:07.000Z","closingAuctionStartTime":"2000-01-23T04:56:07.000Z","clearingStartTime":"2000-01-23T04:56:07.000Z","startTime":"2000-01-23T04:56:07.000Z","endTime":"2000-01-23T04:56:07.000Z"}],"exchange":"exchange"}]}
 */
export interface V1TradingSchedulesResponse {
  exchanges?: V1TradingSchedule[];
}

/**
 * Пакет изменения торгового статуса.
 * @example {"limitOrderAvailableFlag":true,"marketOrderAvailableFlag":true,"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}
 */
export interface V1TradingStatus {
  figi?: string;
  tradingStatus?: V1SecurityTradingStatus;
  /** @format date-time */
  time?: string;
  limitOrderAvailableFlag?: boolean;
  marketOrderAvailableFlag?: boolean;
  instrumentUid?: string;
}

/**
 * Лимит unary-методов.
 * @example {"limitPerMinute":0,"methods":["methods","methods"]}
 */
export interface V1UnaryLimit {
  /** @format int32 */
  limitPerMinute?: number;
  methods?: string[];
}

/** @example {"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","positionUid":"positionUid","currentPrice":{"nano":5,"currency":"currency","units":"units"},"figi":"figi","expectedYield":{"nano":6,"units":"units"},"expireDate":"2000-01-23T04:56:07.000Z"} */
export interface V1VirtualPortfolioPosition {
  positionUid?: string;
  instrumentUid?: string;
  figi?: string;
  instrumentType?: string;
  quantity?: V1Quotation;
  averagePositionPrice?: V1MoneyValue;
  expectedYield?: V1Quotation;
  expectedYieldFifo?: V1Quotation;
  /** @format date-time */
  expireDate?: string;
  currentPrice?: V1MoneyValue;
  averagePositionPriceFifo?: V1MoneyValue;
}

/** Запрос доступного для вывода остатка. */
export interface V1WithdrawLimitsRequest {
  accountId?: string;
}

/**
 * Доступный для вывода остаток.
 * @example {"blockedGuarantee":[{"nano":5,"currency":"currency","units":"units"},{"nano":5,"currency":"currency","units":"units"}],"money":[{"nano":5,"currency":"currency","units":"units"},{"nano":5,"currency":"currency","units":"units"}],"blocked":[{"nano":5,"currency":"currency","units":"units"},{"nano":5,"currency":"currency","units":"units"}]}
 */
export interface V1WithdrawLimitsResponse {
  money?: V1MoneyValue[];
  blocked?: V1MoneyValue[];
  blockedGuarantee?: V1MoneyValue[];
}

/**
 * Stream result of v1MarketDataResponse
 * @example {"result":{"subscribeInfoResponse":{"infoSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"trade":{"quantity":"quantity","price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"},"subscribeOrderBookResponse":{"orderBookSubscriptions":[{"depth":0,"instrumentUid":"instrumentUid","figi":"figi"},{"depth":0,"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"ping":{"time":"2000-01-23T04:56:07.000Z"},"candle":{"volume":"volume","high":{"nano":6,"units":"units"},"lastTradeTs":"2000-01-23T04:56:07.000Z","low":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z","close":{"nano":6,"units":"units"},"open":{"nano":6,"units":"units"}},"orderbook":{"depth":6,"asks":[{"quantity":"quantity","price":{"nano":6,"units":"units"}},{"quantity":"quantity","price":{"nano":6,"units":"units"}}],"instrumentUid":"instrumentUid","bids":[{"quantity":"quantity","price":{"nano":6,"units":"units"}},{"quantity":"quantity","price":{"nano":6,"units":"units"}}],"limitUp":{"nano":6,"units":"units"},"figi":"figi","time":"2000-01-23T04:56:07.000Z","limitDown":{"nano":6,"units":"units"},"isConsistent":true},"subscribeTradesResponse":{"tradeSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"tradingStatus":{"limitOrderAvailableFlag":true,"marketOrderAvailableFlag":true,"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"},"subscribeCandlesResponse":{"candlesSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"subscribeLastPriceResponse":{"lastPriceSubscriptions":[{"instrumentUid":"instrumentUid","figi":"figi"},{"instrumentUid":"instrumentUid","figi":"figi"}],"trackingId":"trackingId"},"lastPrice":{"price":{"nano":6,"units":"units"},"instrumentUid":"instrumentUid","figi":"figi","time":"2000-01-23T04:56:07.000Z"}},"error":{"code":1,"details":[{"typeUrl":"typeUrl","value":"value"},{"typeUrl":"typeUrl","value":"value"}],"message":"message"}}
 */
export interface StreamResultOfV1MarketDataResponse {
  /** Пакет биржевой информации по подписке. */
  result?: V1MarketDataResponse;
  error?: RpcStatus;
}

/**
 * Stream result of v1PortfolioStreamResponse
 * @example {"result":{"subscriptions":{"accounts":[{"accountId":"accountId"},{"accountId":"accountId"}]},"portfolio":{"totalAmountBonds":{"nano":5,"currency":"currency","units":"units"},"totalAmountFutures":{"nano":5,"currency":"currency","units":"units"},"accountId":"accountId","totalAmountCurrencies":{"nano":5,"currency":"currency","units":"units"},"totalAmountSp":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"},"positions":[{"varMargin":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"averagePositionPricePt":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"currentPrice":{"nano":5,"currency":"currency","units":"units"},"positionUid":"positionUid","figi":"figi","quantityLots":{"nano":6,"units":"units"},"blockedLots":{"nano":6,"units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"blocked":true,"instrumentUid":"instrumentUid","currentNkd":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"}},{"varMargin":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"averagePositionPricePt":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"currentPrice":{"nano":5,"currency":"currency","units":"units"},"positionUid":"positionUid","figi":"figi","quantityLots":{"nano":6,"units":"units"},"blockedLots":{"nano":6,"units":"units"},"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"blocked":true,"instrumentUid":"instrumentUid","currentNkd":{"nano":5,"currency":"currency","units":"units"},"expectedYield":{"nano":6,"units":"units"}}],"totalAmountShares":{"nano":5,"currency":"currency","units":"units"},"totalAmountEtf":{"nano":5,"currency":"currency","units":"units"},"totalAmountPortfolio":{"nano":5,"currency":"currency","units":"units"},"virtualPositions":[{"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","positionUid":"positionUid","currentPrice":{"nano":5,"currency":"currency","units":"units"},"figi":"figi","expectedYield":{"nano":6,"units":"units"},"expireDate":"2000-01-23T04:56:07.000Z"},{"averagePositionPrice":{"nano":5,"currency":"currency","units":"units"},"instrumentType":"instrumentType","quantity":{"nano":6,"units":"units"},"expectedYieldFifo":{"nano":6,"units":"units"},"averagePositionPriceFifo":{"nano":5,"currency":"currency","units":"units"},"instrumentUid":"instrumentUid","positionUid":"positionUid","currentPrice":{"nano":5,"currency":"currency","units":"units"},"figi":"figi","expectedYield":{"nano":6,"units":"units"},"expireDate":"2000-01-23T04:56:07.000Z"}],"totalAmountOptions":{"nano":5,"currency":"currency","units":"units"}},"ping":{"time":"2000-01-23T04:56:07.000Z"}},"error":{"code":1,"details":[{"typeUrl":"typeUrl","value":"value"},{"typeUrl":"typeUrl","value":"value"}],"message":"message"}}
 */
export interface StreamResultOfV1PortfolioStreamResponse {
  /** Информация по позициям и доходностям портфелей. */
  result?: V1PortfolioStreamResponse;
  error?: RpcStatus;
}

/**
 * Stream result of v1PositionsStreamResponse
 * @example {"result":{"subscriptions":{"accounts":[{"accountId":"accountId"},{"accountId":"accountId"}]},"ping":{"time":"2000-01-23T04:56:07.000Z"},"position":{"date":"2000-01-23T04:56:07.000Z","accountId":"accountId","money":[{"availableValue":{"nano":5,"currency":"currency","units":"units"},"blockedValue":{"nano":5,"currency":"currency","units":"units"}},{"availableValue":{"nano":5,"currency":"currency","units":"units"},"blockedValue":{"nano":5,"currency":"currency","units":"units"}}],"options":[{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"},{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid"}],"futures":[{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"},{"blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi"}],"securities":[{"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true},{"instrumentType":"instrumentType","blocked":"blocked","balance":"balance","instrumentUid":"instrumentUid","positionUid":"positionUid","figi":"figi","exchangeBlocked":true}]}},"error":{"code":1,"details":[{"typeUrl":"typeUrl","value":"value"},{"typeUrl":"typeUrl","value":"value"}],"message":"message"}}
 */
export interface StreamResultOfV1PositionsStreamResponse {
  /** Информация по изменению позиций портфеля. */
  result?: V1PositionsStreamResponse;
  error?: RpcStatus;
}

/**
 * Stream result of v1TradesStreamResponse
 * @example {"result":{"ping":{"time":"2000-01-23T04:56:07.000Z"},"orderTrades":{"createdAt":"2000-01-23T04:56:07.000Z","accountId":"accountId","orderId":"orderId","instrumentUid":"instrumentUid","trades":[{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":6,"units":"units"},"tradeId":"tradeId"},{"dateTime":"2000-01-23T04:56:07.000Z","quantity":"quantity","price":{"nano":6,"units":"units"},"tradeId":"tradeId"}],"figi":"figi"}},"error":{"code":1,"details":[{"typeUrl":"typeUrl","value":"value"},{"typeUrl":"typeUrl","value":"value"}],"message":"message"}}
 */
export interface StreamResultOfV1TradesStreamResponse {
  /** Информация о торговых поручениях. */
  result?: V1TradesStreamResponse;
  error?: RpcStatus;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://invest-public-api.tinkoff.ru/rest/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Tinkoff Invest API
 * @version 1.4
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 * @termsOfService https://www.tinkoff.ru/invest/disclaimers/basic-information/
 * @baseUrl https://invest-public-api.tinkoff.ru/rest/
 * @externalDocs https://tinkoff.github.io/investAPI/
 * @contact <al.a.volkov@tinkoff.ru>
 */
export class TinkoffApi<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  tinkoffPublicInvestApiContractV1InstrumentsService = {
    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceBondBy
     * @summary Метод получения облигации по её идентификатору.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/BondBy
     * @secure
     */
    instrumentsServiceBondBy: (
      data: V1InstrumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1BondResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/BondBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceBonds
     * @summary Метод получения списка облигаций.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/Bonds
     * @secure
     */
    instrumentsServiceBonds: (
      data: V1InstrumentsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1BondsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/Bonds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceCurrencies
     * @summary Метод получения списка валют.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/Currencies
     * @secure
     */
    instrumentsServiceCurrencies: (
      data: V1InstrumentsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1CurrenciesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/Currencies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceCurrencyBy
     * @summary Метод получения валюты по её идентификатору.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/CurrencyBy
     * @secure
     */
    instrumentsServiceCurrencyBy: (
      data: V1InstrumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1CurrencyResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/CurrencyBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceEditFavorites
     * @summary Метод редактирования списка избранных инструментов.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/EditFavorites
     * @secure
     */
    instrumentsServiceEditFavorites: (
      data: V1EditFavoritesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1EditFavoritesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/EditFavorites`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceEtfBy
     * @summary Метод получения инвестиционного фонда по его идентификатору.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/EtfBy
     * @secure
     */
    instrumentsServiceEtfBy: (
      data: V1InstrumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1EtfResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/EtfBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceEtfs
     * @summary Метод получения списка инвестиционных фондов.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/Etfs
     * @secure
     */
    instrumentsServiceEtfs: (
      data: V1InstrumentsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1EtfsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/Etfs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceFindInstrument
     * @summary Метод поиска инструмента.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/FindInstrument
     * @secure
     */
    instrumentsServiceFindInstrument: (
      data: V1FindInstrumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1FindInstrumentResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/FindInstrument`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceFutureBy
     * @summary Метод получения фьючерса по его идентификатору.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/FutureBy
     * @secure
     */
    instrumentsServiceFutureBy: (
      data: V1InstrumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1FutureResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/FutureBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceFutures
     * @summary Метод получения списка фьючерсов.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/Futures
     * @secure
     */
    instrumentsServiceFutures: (
      data: V1InstrumentsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1FuturesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/Futures`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetAccruedInterests
     * @summary Метод получения накопленного купонного дохода по облигации.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAccruedInterests
     * @secure
     */
    instrumentsServiceGetAccruedInterests: (
      data: V1GetAccruedInterestsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetAccruedInterestsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAccruedInterests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetAssetBy
     * @summary Метод получения актива по его идентификатору.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssetBy
     * @secure
     */
    instrumentsServiceGetAssetBy: (
      data: V1AssetRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1AssetResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssetBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetAssets
     * @summary Метод получения списка активов.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssets
     * @secure
     */
    instrumentsServiceGetAssets: (
      data: V1AssetsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1AssetsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssets`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetBondCoupons
     * @summary Метод получения графика выплат купонов по облигации.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBondCoupons
     * @secure
     */
    instrumentsServiceGetBondCoupons: (
      data: V1GetBondCouponsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetBondCouponsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBondCoupons`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetBrandBy
     * @summary Метод получения бренда по его идентификатору.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBrandBy
     * @secure
     */
    instrumentsServiceGetBrandBy: (
      data: V1GetBrandRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1Brand, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBrandBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetBrands
     * @summary Метод получения списка брендов.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBrands
     * @secure
     */
    instrumentsServiceGetBrands: (
      data: V1GetBrandsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetBrandsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBrands`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetCountries
     * @summary Метод получения списка стран.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetCountries
     * @secure
     */
    instrumentsServiceGetCountries: (
      data: V1GetCountriesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetCountriesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetCountries`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetDividends
     * @summary Метод для получения событий выплаты дивидендов по инструменту.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetDividends
     * @secure
     */
    instrumentsServiceGetDividends: (
      data: V1GetDividendsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetDividendsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetDividends`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetFavorites
     * @summary Метод получения списка избранных инструментов.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFavorites
     * @secure
     */
    instrumentsServiceGetFavorites: (
      data: V1GetFavoritesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetFavoritesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFavorites`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetFuturesMargin
     * @summary Метод получения размера гарантийного обеспечения по фьючерсам.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFuturesMargin
     * @secure
     */
    instrumentsServiceGetFuturesMargin: (
      data: V1GetFuturesMarginRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetFuturesMarginResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFuturesMargin`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceGetInstrumentBy
     * @summary Метод получения основной информации об инструменте.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetInstrumentBy
     * @secure
     */
    instrumentsServiceGetInstrumentBy: (
      data: V1InstrumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1InstrumentResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetInstrumentBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceOptionBy
     * @summary Метод получения опциона по его идентификатору.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/OptionBy
     * @secure
     */
    instrumentsServiceOptionBy: (
      data: V1InstrumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1OptionResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/OptionBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceOptions
     * @summary Deprecated Метод получения списка опционов.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/Options
     * @secure
     */
    instrumentsServiceOptions: (
      data: V1InstrumentsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1OptionsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/Options`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceOptionsBy
     * @summary Метод получения списка опционов.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/OptionsBy
     * @secure
     */
    instrumentsServiceOptionsBy: (
      data: V1FilterOptionsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1OptionsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/OptionsBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceShareBy
     * @summary Метод получения акции по её идентификатору.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/ShareBy
     * @secure
     */
    instrumentsServiceShareBy: (
      data: V1InstrumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1ShareResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/ShareBy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceShares
     * @summary Метод получения списка акций.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/Shares
     * @secure
     */
    instrumentsServiceShares: (
      data: V1InstrumentsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1SharesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/Shares`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InstrumentsService
     * @name InstrumentsServiceTradingSchedules
     * @summary Метод получения расписания торгов торговых площадок.
     * @request POST:/tinkoff.public.invest.api.contract.v1.InstrumentsService/TradingSchedules
     * @secure
     */
    instrumentsServiceTradingSchedules: (
      data: V1TradingSchedulesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1TradingSchedulesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.InstrumentsService/TradingSchedules`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1MarketDataService = {
    /**
     * No description
     *
     * @tags MarketDataService
     * @name MarketDataServiceGetCandles
     * @summary Метод запроса исторических свечей по инструменту.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataService/GetCandles
     * @secure
     */
    marketDataServiceGetCandles: (
      data: V1GetCandlesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetCandlesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataService/GetCandles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarketDataService
     * @name MarketDataServiceGetClosePrices
     * @summary Метод запроса цен закрытия торговой сессии по инструментам.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataService/GetClosePrices
     * @secure
     */
    marketDataServiceGetClosePrices: (
      data: V1GetClosePricesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetClosePricesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataService/GetClosePrices`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarketDataService
     * @name MarketDataServiceGetLastPrices
     * @summary Метод запроса цен последних сделок по инструментам.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastPrices
     * @secure
     */
    marketDataServiceGetLastPrices: (
      data: V1GetLastPricesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetLastPricesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastPrices`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarketDataService
     * @name MarketDataServiceGetLastTrades
     * @summary Метод запроса обезличенных сделок за последний час.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastTrades
     * @secure
     */
    marketDataServiceGetLastTrades: (
      data: V1GetLastTradesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetLastTradesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastTrades`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarketDataService
     * @name MarketDataServiceGetOrderBook
     * @summary Метод получения стакана по инструменту.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataService/GetOrderBook
     * @secure
     */
    marketDataServiceGetOrderBook: (
      data: V1GetOrderBookRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetOrderBookResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataService/GetOrderBook`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarketDataService
     * @name MarketDataServiceGetTradingStatus
     * @summary Метод запроса статуса торгов по инструментам.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTradingStatus
     * @secure
     */
    marketDataServiceGetTradingStatus: (
      data: V1GetTradingStatusRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetTradingStatusResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTradingStatus`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarketDataService
     * @name MarketDataServiceGetTradingStatuses
     * @summary Метод запроса статуса торгов по инструментам.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTradingStatuses
     * @secure
     */
    marketDataServiceGetTradingStatuses: (
      data: V1GetTradingStatusesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetTradingStatusesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTradingStatuses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1MarketDataStreamService = {
    /**
     * No description
     *
     * @tags MarketDataStreamService
     * @name MarketDataStreamServiceMarketDataServerSideStream
     * @summary Server-side стрим предоставления биржевой информации.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataServerSideStream
     * @secure
     */
    marketDataStreamServiceMarketDataServerSideStream: (
      data: V1MarketDataServerSideStreamRequest,
      params: RequestParams = {},
    ) =>
      this.request<StreamResultOfV1MarketDataResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataServerSideStream`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MarketDataStreamService
     * @name MarketDataStreamServiceMarketDataStream
     * @summary Bi-directional стрим предоставления биржевой информации.
     * @request POST:/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream
     * @secure
     */
    marketDataStreamServiceMarketDataStream: (
      data: V1MarketDataRequest,
      params: RequestParams = {},
    ) =>
      this.request<StreamResultOfV1MarketDataResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1OperationsService = {
    /**
     * No description
     *
     * @tags OperationsService
     * @name OperationsServiceGetBrokerReport
     * @summary Метод получения брокерского отчёта.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsService/GetBrokerReport
     * @secure
     */
    operationsServiceGetBrokerReport: (
      data: V1BrokerReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1BrokerReportResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsService/GetBrokerReport`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperationsService
     * @name OperationsServiceGetDividendsForeignIssuer
     * @summary Метод получения отчёта "Справка о доходах за пределами РФ".
     * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsService/GetDividendsForeignIssuer
     * @secure
     */
    operationsServiceGetDividendsForeignIssuer: (
      data: V1GetDividendsForeignIssuerRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetDividendsForeignIssuerResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsService/GetDividendsForeignIssuer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags OperationsService
 * @name OperationsServiceGetOperations
 * @summary Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
[особенности взаимодействия](/investAPI/operations_problems) с данным методом.
 * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsService/GetOperations
 * @secure
 */
    operationsServiceGetOperations: (
      data: V1OperationsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1OperationsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsService/GetOperations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags OperationsService
 * @name OperationsServiceGetOperationsByCursor
 * @summary Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
[особенности взаимодействия](/investAPI/operations_problems) с данным методом.
 * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsService/GetOperationsByCursor
 * @secure
 */
    operationsServiceGetOperationsByCursor: (
      data: V1GetOperationsByCursorRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetOperationsByCursorResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsService/GetOperationsByCursor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperationsService
     * @name OperationsServiceGetPortfolio
     * @summary Метод получения портфеля по счёту.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsService/GetPortfolio
     * @secure
     */
    operationsServiceGetPortfolio: (
      data: V1PortfolioRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PortfolioResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsService/GetPortfolio`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperationsService
     * @name OperationsServiceGetPositions
     * @summary Метод получения списка позиций по счёту.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsService/GetPositions
     * @secure
     */
    operationsServiceGetPositions: (
      data: V1PositionsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PositionsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsService/GetPositions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperationsService
     * @name OperationsServiceGetWithdrawLimits
     * @summary Метод получения доступного остатка для вывода средств.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsService/GetWithdrawLimits
     * @secure
     */
    operationsServiceGetWithdrawLimits: (
      data: V1WithdrawLimitsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1WithdrawLimitsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsService/GetWithdrawLimits`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1OperationsStreamService = {
    /**
     * No description
     *
     * @tags OperationsStreamService
     * @name OperationsStreamServicePortfolioStream
     * @summary Server-side stream обновлений портфеля
     * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PortfolioStream
     * @secure
     */
    operationsStreamServicePortfolioStream: (
      data: V1PortfolioStreamRequest,
      params: RequestParams = {},
    ) =>
      this.request<StreamResultOfV1PortfolioStreamResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PortfolioStream`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperationsStreamService
     * @name OperationsStreamServicePositionsStream
     * @summary Server-side stream обновлений информации по изменению позиций портфеля
     * @request POST:/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PositionsStream
     * @secure
     */
    operationsStreamServicePositionsStream: (
      data: V1PositionsStreamRequest,
      params: RequestParams = {},
    ) =>
      this.request<StreamResultOfV1PositionsStreamResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PositionsStream`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1OrdersService = {
    /**
     * No description
     *
     * @tags OrdersService
     * @name OrdersServiceCancelOrder
     * @summary Метод отмены биржевой заявки.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OrdersService/CancelOrder
     * @secure
     */
    ordersServiceCancelOrder: (
      data: V1CancelOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1CancelOrderResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OrdersService/CancelOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrdersService
     * @name OrdersServiceGetOrderState
     * @summary Метод получения статуса торгового поручения.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrderState
     * @secure
     */
    ordersServiceGetOrderState: (
      data: V1GetOrderStateRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1OrderState, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrderState`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrdersService
     * @name OrdersServiceGetOrders
     * @summary Метод получения списка активных заявок по счёту.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrders
     * @secure
     */
    ordersServiceGetOrders: (
      data: V1GetOrdersRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetOrdersResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrdersService
     * @name OrdersServicePostOrder
     * @summary Метод выставления заявки.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OrdersService/PostOrder
     * @secure
     */
    ordersServicePostOrder: (
      data: V1PostOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PostOrderResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OrdersService/PostOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrdersService
     * @name OrdersServiceReplaceOrder
     * @summary Метод изменения выставленной заявки.
     * @request POST:/tinkoff.public.invest.api.contract.v1.OrdersService/ReplaceOrder
     * @secure
     */
    ordersServiceReplaceOrder: (
      data: V1ReplaceOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PostOrderResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OrdersService/ReplaceOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1OrdersStreamService = {
    /**
     * No description
     *
     * @tags OrdersStreamService
     * @name OrdersStreamServiceTradesStream
     * @summary Stream сделок пользователя
     * @request POST:/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream
     * @secure
     */
    ordersStreamServiceTradesStream: (
      data: V1TradesStreamRequest,
      params: RequestParams = {},
    ) =>
      this.request<StreamResultOfV1TradesStreamResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1SandboxService = {
    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceCancelSandboxOrder
     * @summary Метод отмены торгового поручения в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/CancelSandboxOrder
     * @secure
     */
    sandboxServiceCancelSandboxOrder: (
      data: V1CancelOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1CancelOrderResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/CancelSandboxOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceCloseSandboxAccount
     * @summary Метод закрытия счёта в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/CloseSandboxAccount
     * @secure
     */
    sandboxServiceCloseSandboxAccount: (
      data: V1CloseSandboxAccountRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1CloseSandboxAccountResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/CloseSandboxAccount`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceGetSandboxAccounts
     * @summary Метод получения счетов в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxAccounts
     * @secure
     */
    sandboxServiceGetSandboxAccounts: (
      data: V1GetAccountsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetAccountsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxAccounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceGetSandboxOperations
     * @summary Метод получения операций в песочнице по номеру счёта.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperations
     * @secure
     */
    sandboxServiceGetSandboxOperations: (
      data: V1OperationsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1OperationsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceGetSandboxOperationsByCursor
     * @summary Метод получения операций в песочнице по номеру счета с пагинацией.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperationsByCursor
     * @secure
     */
    sandboxServiceGetSandboxOperationsByCursor: (
      data: V1GetOperationsByCursorRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetOperationsByCursorResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperationsByCursor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceGetSandboxOrderState
     * @summary Метод получения статуса заявки в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrderState
     * @secure
     */
    sandboxServiceGetSandboxOrderState: (
      data: V1GetOrderStateRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1OrderState, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrderState`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceGetSandboxOrders
     * @summary Метод получения списка активных заявок по счёту в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrders
     * @secure
     */
    sandboxServiceGetSandboxOrders: (
      data: V1GetOrdersRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetOrdersResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceGetSandboxPortfolio
     * @summary Метод получения портфолио в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxPortfolio
     * @secure
     */
    sandboxServiceGetSandboxPortfolio: (
      data: V1PortfolioRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PortfolioResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxPortfolio`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceGetSandboxPositions
     * @summary Метод получения позиций по виртуальному счёту песочницы.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxPositions
     * @secure
     */
    sandboxServiceGetSandboxPositions: (
      data: V1PositionsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PositionsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxPositions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceGetSandboxWithdrawLimits
     * @summary Метод получения доступного остатка для вывода средств в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxWithdrawLimits
     * @secure
     */
    sandboxServiceGetSandboxWithdrawLimits: (
      data: V1WithdrawLimitsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1WithdrawLimitsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxWithdrawLimits`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceOpenSandboxAccount
     * @summary Метод регистрации счёта в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/OpenSandboxAccount
     * @secure
     */
    sandboxServiceOpenSandboxAccount: (
      data: V1OpenSandboxAccountRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1OpenSandboxAccountResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/OpenSandboxAccount`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServicePostSandboxOrder
     * @summary Метод выставления торгового поручения в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/PostSandboxOrder
     * @secure
     */
    sandboxServicePostSandboxOrder: (
      data: V1PostOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PostOrderResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/PostSandboxOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceReplaceSandboxOrder
     * @summary Метод изменения выставленной заявки.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/ReplaceSandboxOrder
     * @secure
     */
    sandboxServiceReplaceSandboxOrder: (
      data: V1ReplaceOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PostOrderResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/ReplaceSandboxOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SandboxService
     * @name SandboxServiceSandboxPayIn
     * @summary Метод пополнения счёта в песочнице.
     * @request POST:/tinkoff.public.invest.api.contract.v1.SandboxService/SandboxPayIn
     * @secure
     */
    sandboxServiceSandboxPayIn: (
      data: V1SandboxPayInRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1SandboxPayInResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.SandboxService/SandboxPayIn`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1StopOrdersService = {
    /**
     * No description
     *
     * @tags StopOrdersService
     * @name StopOrdersServiceCancelStopOrder
     * @summary Метод отмены стоп-заявки.
     * @request POST:/tinkoff.public.invest.api.contract.v1.StopOrdersService/CancelStopOrder
     * @secure
     */
    stopOrdersServiceCancelStopOrder: (
      data: V1CancelStopOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1CancelStopOrderResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.StopOrdersService/CancelStopOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StopOrdersService
     * @name StopOrdersServiceGetStopOrders
     * @summary Метод получения списка активных стоп заявок по счёту.
     * @request POST:/tinkoff.public.invest.api.contract.v1.StopOrdersService/GetStopOrders
     * @secure
     */
    stopOrdersServiceGetStopOrders: (
      data: V1GetStopOrdersRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetStopOrdersResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.StopOrdersService/GetStopOrders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags StopOrdersService
     * @name StopOrdersServicePostStopOrder
     * @summary Метод выставления стоп-заявки.
     * @request POST:/tinkoff.public.invest.api.contract.v1.StopOrdersService/PostStopOrder
     * @secure
     */
    stopOrdersServicePostStopOrder: (
      data: V1PostStopOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1PostStopOrderResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.StopOrdersService/PostStopOrder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tinkoffPublicInvestApiContractV1UsersService = {
    /**
     * No description
     *
     * @tags UsersService
     * @name UsersServiceGetAccounts
     * @summary Метод получения счетов пользователя.
     * @request POST:/tinkoff.public.invest.api.contract.v1.UsersService/GetAccounts
     * @secure
     */
    usersServiceGetAccounts: (
      data: V1GetAccountsRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetAccountsResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.UsersService/GetAccounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersService
     * @name UsersServiceGetInfo
     * @summary Метод получения информации о пользователе.
     * @request POST:/tinkoff.public.invest.api.contract.v1.UsersService/GetInfo
     * @secure
     */
    usersServiceGetInfo: (data: V1GetInfoRequest, params: RequestParams = {}) =>
      this.request<V1GetInfoResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.UsersService/GetInfo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersService
     * @name UsersServiceGetMarginAttributes
     * @summary Расчёт маржинальных показателей по счёту.
     * @request POST:/tinkoff.public.invest.api.contract.v1.UsersService/GetMarginAttributes
     * @secure
     */
    usersServiceGetMarginAttributes: (
      data: V1GetMarginAttributesRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetMarginAttributesResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.UsersService/GetMarginAttributes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersService
     * @name UsersServiceGetUserTariff
     * @summary Запрос тарифа пользователя.
     * @request POST:/tinkoff.public.invest.api.contract.v1.UsersService/GetUserTariff
     * @secure
     */
    usersServiceGetUserTariff: (
      data: V1GetUserTariffRequest,
      params: RequestParams = {},
    ) =>
      this.request<V1GetUserTariffResponse, RpcStatus>({
        path: `/tinkoff.public.invest.api.contract.v1.UsersService/GetUserTariff`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
