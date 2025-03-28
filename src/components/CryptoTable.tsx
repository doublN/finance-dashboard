import { CryptoName } from "@/app/types/crypto";
import { PercentageChangeLabel } from "./PercentageChangeLabel";

export type CryptoTableRow = {
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
  data: Array<CryptoTableRow>;
};

export function CryptoTable(props: Props) {
  const headerStyle = "py-2 text-left";

  const iconColor = {
    paypal: "bg-paypal",
    etherium: "bg-etherium",
    bitcoin: "bg-bitcoin",
    tether: "bg-tether",
    dogecoin: "bg-dogecoin",
  };

  return (
    <table>
      <thead>
        <tr className="text-sm text-gray-500 border-t-2 border-b-2 border-gray-200">
          <th> </th>
          <th className={headerStyle}>NAME</th>
          <th className={headerStyle}>PRICE</th>
          <th className={headerStyle}>1H %</th>
          <th className={headerStyle}>24H %</th>
          <th className={headerStyle}>MARKET CAP i</th>
          <th className={headerStyle}>VOLUME i</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((rowData) => (
          <tr key={rowData.currency.name}>
            <td className="py-10">*</td>
            <td>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${
                    iconColor[rowData.currency.name]
                  }`}
                ></div>
                <div>
                  <p className="font-semibold">{rowData.currency.label}</p>
                  <p className="text-sm text-gray-500">
                    {rowData.currency.abbreviation}
                  </p>
                </div>
              </div>
            </td>
            <td>${rowData.price}</td>
            <td>
              <PercentageChangeLabel value={rowData.oneHour.toString()} />
            </td>
            <td>
              <PercentageChangeLabel
                value={rowData.twentyFourHour.toString()}
              />
            </td>
            <td>${rowData.marketCap}</td>
            <td>
              <p>${rowData.volume.dollarValue}</p>
              <p className="text-sm text-gray-500">
                {rowData.volume.cryptoValue} {rowData.currency.abbreviation}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
