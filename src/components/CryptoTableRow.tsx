import { Icon } from "@/app/icons/Icon";
import { CryptoName } from "@/types/crypto";
import { PercentageChangeLabel } from "./PercentageChangeLabel";

export type CryptoTableRowType = {
  favourite: boolean;
  currency: {
    name: CryptoName;
    label: string;
    abbreviation: string;
  };
  price: number;
  oneHour: number;
  twentyFourHour: number;
  marketCap: number;
  volume: {
    dollarValue: number;
    cryptoValue: number;
  };
};

type Props = {
  data: CryptoTableRowType;
  widthStyle: string;
};

export function CryptoTableRow(props: Props) {
  const iconColor = {
    paypal: "bg-paypal",
    etherium: "bg-etherium",
    bitcoin: "bg-bitcoin",
    tether: "bg-tether",
    dogecoin: "bg-dogecoin",
  };

  return (
    <tr key={props.data.currency.label}>
      <td className={"w-1/24"}>
        {props.data.favourite ? (
          <div className="text-amber-400">
            <Icon name="star" size="medium" />
          </div>
        ) : (
          <div className="text-gray-300">
            <Icon name="starOutline" size="medium" />
          </div>
        )}
      </td>
      <td className={props.widthStyle}>
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full ${
              iconColor[props.data.currency.name]
            }`}
          ></div>
          <div>
            <p className="font-semibold">{props.data.currency.label}</p>
            <p className="text-sm text-gray-500">
              {props.data.currency.abbreviation}
            </p>
          </div>
        </div>
      </td>
      <td className={props.widthStyle}>${props.data.price}</td>
      <td className={props.widthStyle}>
        <PercentageChangeLabel value={props.data.oneHour.toString()} />
      </td>
      <td className={props.widthStyle}>
        <PercentageChangeLabel value={props.data.twentyFourHour.toString()} />
      </td>
      <td className={props.widthStyle}>${props.data.marketCap}</td>
      <td className={props.widthStyle}>
        <p>${props.data.volume.dollarValue}</p>
        <p className="text-sm text-gray-500">
          {props.data.volume.cryptoValue} {props.data.currency.abbreviation}
        </p>
      </td>
    </tr>
  );
}
