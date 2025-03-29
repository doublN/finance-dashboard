import { Icon } from "@/app/icons/Icon";
import { Card } from "./Card";
import { Search } from "./Search";
import { CryptoTable, CryptoTableRow } from "./CryptoTable";

export function CryptoMarketCard() {
  const searchSubmit = async (data: FormData) => {
    "use server";
    console.log(data.get("search") as string);
  };

  const data: Array<CryptoTableRow> = [
    {
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
  ];

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Crypto Market</h3>
        <div className="flex gap-2">
          <Search
            placeholder="Search crypto..."
            action={searchSubmit}
            label="Crypto search"
            showLabel={false}
            canKeyboardFocus={false}
          />
          <button className="flex items-center gap-2 p-1 px-2 border-2 border-gray-200 rounded-xl font-semibold hover:cursor-pointer">
            <Icon name="filter" size="small" />
            Filter
          </button>
        </div>
      </div>
      <CryptoTable data={data} />
    </Card>
  );
}
