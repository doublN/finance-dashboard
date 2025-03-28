import { PortfolioStatsRanking } from "./PortfolioStatsRanking";

export function PortfolioStatsCard() {
  return (
    <div className="flex flex-col row-span-1 col-span-2 border-2 border-gray-200 rounded-xl bg-white py-6 px-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Portfolio Stats</h3>
        <button className="text-blue-900 font-semibold hover:cursor-pointer">
          <span className="underline underline-offset-3">View All</span> +
        </button>
      </div>
      <PortfolioStatsRanking />
    </div>
  );
}
