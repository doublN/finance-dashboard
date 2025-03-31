"use client";

import { useState } from "react";

export function StatisticsTableRangeWidget() {
  const [selected, setSelected] = useState("7D");

  const values = ["1D", "7D", "1M", "3M", "ALL"];

  return (
    <div className="p-2 bg-gray-100 rounded-xl">
      {values.map((value) => (
        <button
          key={value}
          className={`py-1 px-2 ${
            value === selected ? "bg-white drop-shadow-sm" : "text-gray-400"
          }  rounded-lg font-semibold hover:cursor-pointer`}
          onClick={() => {
            setSelected(value);
          }}
        >
          <span>{value}</span>
        </button>
      ))}
    </div>
  );
}
