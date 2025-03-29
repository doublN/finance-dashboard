import { CryptoMarketCard } from "@/components/CryptoMarketCard";
import { FearAndGreedCard } from "@/components/FearAndGreedCard";
import { FinanceTracker } from "@/components/FinanceTracker";
import { PortfolioStatsCard } from "@/components/PortfolioStatsCard";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-4 py-10 px-6">
      <FinanceTracker />
      <div className="grid grid-cols-5 grid-rows-2 grow gap-4 h-[100vh]">
        <div className="col-span-3 row-span-2 border-2 border-gray-200 rounded-xl bg-white">
          My Portfolio
        </div>
        <PortfolioStatsCard />
        <FearAndGreedCard />
      </div>
      <CryptoMarketCard />
    </div>
  );
}
