import { CryptoName } from "@/app/types/crypto";

type Props = {
  readonly name: CryptoName;
  readonly label: string;
  readonly percentage: number;
  readonly amount: number;
  readonly ranking: number;
};

export function PortfolioStatsRankingRow(props: Props) {
  const colorVariants = {
    paypal: {
      barStyle: "bg-paypal-light border-paypal",
      iconStyle: "bg-paypal",
      percentageStyle: "text-paypal",
    },
    etherium: {
      barStyle: "bg-etherium-light border-etherium",
      iconStyle: "bg-etherium",
      percentageStyle: "text-etherium",
    },
    bitcoin: {
      barStyle: "bg-bitcoin-light border-bitcoin",
      iconStyle: "bg-bitcoin",
      percentageStyle: "text-bitcoin",
    },
    tether: {
      barStyle: "bg-tether-light border-tether",
      iconStyle: "bg-tether",
      percentageStyle: "text-tether",
    },
    dogecoin: {
      barStyle: "bg-dogecoin-light border-dogecoin",
      iconStyle: "bg-dogecoin",
      percentageStyle: "text-dogecoin",
    },
  }[props.name];

  const widthVariants = ["w-8/10", "w-7/10", "w-6/10", "w-5/10"];

  return (
    <div className="flex items-center justify-between">
      <div
        className={`${colorVariants.barStyle} ${
          widthVariants[props.ranking]
        } border-l-2 rounded-lg flex items-center justify-between px-3 h-10`}
      >
        <div className="flex items-center gap-1">
          <div
            className={`${colorVariants.iconStyle} w-5 h-5 rounded-full`}
          ></div>
          <span>{props.label}</span>
        </div>
        <span className={`${colorVariants.percentageStyle} text-sm`}>
          {props.percentage}%
        </span>
      </div>
      <p className="font-semibold">${props.amount}</p>
    </div>
  );
}
