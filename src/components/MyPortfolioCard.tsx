"use client";
import { numberFormat } from "@/utils/numberFormat";
import { PercentageChangeLabel } from "./PercentageChangeLabel";
import { StatisticsTable } from "./StatisticsTable";
import { CurrencyDropdown } from "./CurrencyDropdown";

export function MyPortFolioCard() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">My Portfolio</h3>
          <div className="mt-3 flex items-center gap-3">
            <h1 className="text-3xl">
              <span className="text-gray-500">$</span>{" "}
              <span className="font-semibold">
                {numberFormat.format(14089.87)}
              </span>{" "}
            </h1>
            <PercentageChangeLabel value="5.95" />
          </div>
        </div>
        <CurrencyDropdown />
      </div>
      <hr className="text-gray-100 border-1 my-6" />
      <StatisticsTable />
    </div>
  );
}
