import { FinanceTracker } from "@/components/FinanceTracker";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-4 my-10 mx-6">
      <FinanceTracker />
      <div className="grid grid-cols-2 grid-rows-2 grow gap-4">
        <div className="row-span-2 border-2 border-gray-200 rounded-xl bg-white">
          My Portfolio
        </div>
        <div className="border-2 border-gray-200 rounded-xl bg-white">
          stats
        </div>
        <div className="border-2 border-gray-200 rounded-xl bg-white">
          Fear and Greed
        </div>
      </div>
      <div className="grow border-2 border-gray-200 rounded-xl bg-white">
        Crypto Market
      </div>
    </div>
  );
}
