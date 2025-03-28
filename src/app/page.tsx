import { FinanceTracker } from "@/components/FinanceTracker";
import { PortfolioStatsCard } from "@/components/PortfolioStatsCard";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-4 py-10 px-6">
      <FinanceTracker />
      <div className="grid grid-cols-5 grid-rows-2 grow gap-4 max-h-[50vh]">
        <div className="col-span-3 row-span-2 border-2 border-gray-200 rounded-xl bg-white">
          My Portfolio
        </div>
        <PortfolioStatsCard />
        <div className=" col-span-2 row-span-1 border-2 border-gray-200 rounded-xl bg-white">
          Fear and Greed
        </div>
      </div>
      <div className="grow border-2 border-gray-200 rounded-xl bg-white">
        Crypto Market
      </div>
    </div>
  );
}
