import { Card } from "./Card";
import { PortfolioStatsRanking } from "./PortfolioStatsRanking";

export function PortfolioStatsCard() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Portfolio Stats</h3>
        <button className="text-blue-900 font-semibold hover:cursor-pointer">
          <span className="underline underline-offset-3">View All</span> +
        </button>
      </div>
      <PortfolioStatsRanking />
    </Card>
  );
}
