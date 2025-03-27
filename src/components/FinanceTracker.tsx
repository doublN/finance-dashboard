import { Icon } from "@/app/icons/Icon";
import { FinanceTrackerItem } from "./FinanceTrackerItem";

export function FinanceTracker() {
  return (
    <div className="flex items-center justify-between py-2 px-3 border-2 border-gray-200 rounded-xl bg-white">
      <div className="flex flex-1 justify-between items-center flex-wrap mr-4 gap-2">
        <FinanceTrackerItem label="Cryptos" value="3.2M+" />
        <FinanceTrackerItem label="Exchanges" value="801" />
        <FinanceTrackerItem
          label="Markep Cap"
          value="81.21T"
          percentChange="-1.98"
        />
        <FinanceTrackerItem
          label="24h Vol"
          value="$292.21B"
          percentChange="1.23"
        />
        <FinanceTrackerItem label="Dominance" value="BTC:6,27%" />
        <FinanceTrackerItem label="Fear & Greed" value="90/100" />
      </div>
      <button className="hover:cursor-pointer text-gray-400">
        <Icon name="cancel" size="small" />
      </button>
    </div>
  );
}
