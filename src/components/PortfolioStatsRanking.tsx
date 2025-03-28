import { CryptoName } from "@/app/types/crypto";
import { PortfolioStatsRankingRow } from "./PortfolioStatsRankingRow";

export function PortfolioStatsRanking() {
  const stats: Array<{
    name: CryptoName;
    label: string;
    percentage: number;
    amount: number;
  }> = [
    {
      name: "paypal",
      label: "PayPal USD",
      percentage: 40.87,
      amount: 6291.92,
    },
    {
      name: "bitcoin",
      label: "Bitcoin",
      percentage: 26.54,
      amount: 4823.43,
    },
    {
      name: "etherium",
      label: "Etherium",
      percentage: 16.71,
      amount: 2215.32,
    },
    {
      name: "tether",
      label: "Tether",
      percentage: 16.71,
      amount: 825.45,
    },
  ];

  return (
    <div className="grow flex flex-col justify-center gap-2">
      {stats.map((stat, index) => (
        <PortfolioStatsRankingRow
          key={stat.name}
          label={stat.label}
          name={stat.name}
          percentage={stat.percentage}
          amount={stat.amount}
          ranking={index}
        />
      ))}
    </div>
  );
}
