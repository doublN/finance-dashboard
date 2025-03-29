import { CryptoTableRow } from "@/components/CryptoTable";

export const cryptoMarketTableData: Array<CryptoTableRow> = [
  {
    favourite: true,
    currency: {
      name: "bitcoin",
      label: "Bitcoin",
      abbreviation: "BTC",
    },
    price: 96214.35,
    oneHour: 1.23,
    twentyFourHour: -1.98,
    marketCap: 45719393811,
    volume: {
      dollarValue: 45719393811,
      cryptoValue: 469168,
    },
  },
  {
    favourite: false,
    currency: {
      name: "paypal",
      label: "Paypal USD",
      abbreviation: "PYUSD",
    },
    price: 6214.35,
    oneHour: -1.98,
    twentyFourHour: 1.23,
    marketCap: 406650097039,
    volume: {
      dollarValue: 14239863454,
      cryptoValue: 12931,
    },
  },
  {
    favourite: false,
    currency: {
      name: "etherium",
      label: "Etherium",
      abbreviation: "ETH",
    },
    price: 70214.35,
    oneHour: 0.81,
    twentyFourHour: 0.81,
    marketCap: 9080558135,
    volume: {
      dollarValue: 14239863454,
      cryptoValue: 4195204,
    },
  },
  {
    favourite: false,
    currency: {
      name: "dogecoin",
      label: "Dogecoin",
      abbreviation: "DOGE",
    },
    price: 65081.63,
    oneHour: -0.62,
    twentyFourHour: -1.62,
    marketCap: 11080558135,
    volume: {
      dollarValue: 2706080062,
      cryptoValue: 59734,
    },
  },
  {
    favourite: false,
    currency: {
      name: "tether",
      label: "Tether",
      abbreviation: "USDt",
    },
    price: 93234.12,
    oneHour: -1.12,
    twentyFourHour: 1.02,
    marketCap: 43212321,
    volume: {
      dollarValue: 32345232134,
      cryptoValue: 2312453,
    },
  },
];
