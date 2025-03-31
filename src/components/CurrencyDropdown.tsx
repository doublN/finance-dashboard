import { Icon } from "@/app/icons/Icon";
import { CryptoName } from "@/types/crypto";
import { useState } from "react";

export function CurrencyDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<{ name: CryptoName; label: string }>(
    {
      name: "bitcoin",
      label: "Bitcoin",
    }
  );

  const colorVariants = {
    paypal: "bg-paypal",
    etherium: "bg-etherium",
    bitcoin: "bg-bitcoin",
    tether: "bg-tether",
    dogecoin: "bg-dogecoin",
  };

  const options: Array<{ name: CryptoName; label: string }> = [
    { name: "bitcoin", label: "Bitcoin" },
    { name: "paypal", label: "PayPal US" },
    { name: "etherium", label: "Etherium" },
    { name: "tether", label: "Tether" },
  ];

  return (
    <div className="relative z-10">
      <button
        className="border-2 border-gray-200 bg-white rounded-xl p-1 hover:cursor-pointer flex items-center justify-around min-w-40"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <div
          className={`${colorVariants[selected.name]} h-5 w-5 rounded-full`}
        ></div>

        <span className="font-semibold">{selected.label}</span>
        <span
          className={`text-gray-400 transition-all ${
            showDropdown ? "" : "rotate-180"
          }`}
        >
          <Icon name="chevron" size="medium" />
        </span>
      </button>
      <div
        className={`absolute flex-col border-2 border-gray-200 rounded-xl h-max-30 min-w-40 bg-white ${
          !showDropdown && "hidden"
        }`}
      >
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => {
              setSelected(option);
              setShowDropdown(false);
            }}
            className="flex items-center gap-3 py-2 px-3 w-full hover:cursor-pointer"
          >
            <div
              className={`${colorVariants[option.name]} h-5 w-5 rounded-full`}
            ></div>
            <span className="">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
