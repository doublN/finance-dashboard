import { CryptoName } from "@/types/crypto";
import { PercentageChangeLabel } from "./PercentageChangeLabel";
import { Icon } from "@/app/icons/Icon";

export type CryptoTableRow = {
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
  readonly data: Array<CryptoTableRow>;
};

export function CryptoTable(props: Props) {
  const width = "w-4/24";
  const headerStyle = `py-2 text-left text-gray-500 border-t-2 border-b-2 border-gray-200`;

  const iconColor = {
    paypal: "bg-paypal",
    etherium: "bg-etherium",
    bitcoin: "bg-bitcoin",
    tether: "bg-tether",
    dogecoin: "bg-dogecoin",
  };

  return (
    <div className="flex flex-col min-h-0">
      <table className="w-full table-auto">
        <thead>
          <tr className=" text-gray-500 border-gray-200">
            <th className={`${headerStyle} w-1/24`}> </th>
            <th className={`${headerStyle} ${width}`}>NAME</th>
            <th className={`${headerStyle} ${width}`}>PRICE</th>
            <th className={`${headerStyle} ${width}`}>1H %</th>
            <th className={`${headerStyle} ${width}`}>24H %</th>
            <th className={`${headerStyle} ${width}`}>MARKET CAP i</th>
            <th className={`${headerStyle} ${width}`}>VOLUME i</th>
          </tr>
        </thead>
      </table>
      <div className="overflow-y-scroll min-h-0">
        <table className="w-full table-auto border-separate border-spacing-y-8">
          <tbody className="w-full ">
            {props.data.map((rowData) => (
              <tr key={rowData.currency.label}>
                <td className={"w-1/24"}>
                  {rowData.favourite ? (
                    <div className="text-amber-400">
                      <Icon name="star" size="medium" />
                    </div>
                  ) : (
                    <div className="text-gray-300">
                      <Icon name="starOutline" size="medium" />
                    </div>
                  )}
                </td>
                <td className={width}>
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
                <td className={width}>${rowData.price}</td>
                <td className={width}>
                  <PercentageChangeLabel value={rowData.oneHour.toString()} />
                </td>
                <td className={width}>
                  <PercentageChangeLabel
                    value={rowData.twentyFourHour.toString()}
                  />
                </td>
                <td className={width}>${rowData.marketCap}</td>
                <td className={width}>
                  <p>${rowData.volume.dollarValue}</p>
                  <p className="text-sm text-gray-500">
                    {rowData.volume.cryptoValue} {rowData.currency.abbreviation}
                  </p>
                </td>
              </tr>
            ))}
            {props.data.map((rowData) => (
              <tr key={rowData.currency.label}>
                <td>*</td>
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
      </div>
    </div>
  );
}
