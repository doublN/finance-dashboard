"use client";

import { Icon } from "@/app/icons/Icon";
import { Card } from "./Card";
import { Search } from "./Search";
import { CryptoTable } from "./CryptoTable";
import { cryptoMarketTableData } from "@/data/cryptoMarketTableData";
import { useState } from "react";

export function CryptoMarketCard() {
  const [isGradientVisible, setIsGradientVisible] = useState(true);

  const searchSubmit = async (data: FormData) => {
    console.log(data.get("search") as string);
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
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
      <CryptoTable
        data={cryptoMarketTableData}
        setIsGradientVisible={setIsGradientVisible}
        isGradientVisible={isGradientVisible}
      />
      {isGradientVisible && (
        <div className="flex justify-center items-center absolute bottom-0 left-0 w-full bg-linear-to-t from-gray-50 to-transparent rounded-bl-lg rounded-br-lg h-30">
          <div className="border-2 rounded-lg border-gray-300 bg-white py-1 px-2">
            See more {cryptoMarketTableData.length} crypto
          </div>
        </div>
      )}
    </Card>
  );
}
