"use client";
import { CryptoTableRow, CryptoTableRowType } from "./CryptoTableRow";

type Props = {
  readonly data: Array<CryptoTableRowType>;
};

export function CryptoTable(props: Props) {
  const width = "w-4/24";
  const headerStyle = `py-2 text-left text-gray-500 border-t-2 border-b-2 border-gray-200`;

  return (
    <div className="flex flex-col min-h-0 mb-[-24px]">
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
      <div
        id="scrollbox"
        className="overflow-y-scroll min-h-0 scrollbar-thin scrollbar-color scrollbar-thumb-gray-200 scrollbar-track-white"
        onScroll={() => {
          // console.log("hi");
        }}
      >
        <table className="w-full table-auto border-separate border-spacing-y-8">
          <tbody className="w-full ">
            {props.data.map((rowData) => (
              <CryptoTableRow
                key={rowData.currency.label}
                data={rowData}
                widthStyle={width}
              />
            ))}
            {props.data.map((rowData) => (
              <CryptoTableRow
                key={rowData.currency.label}
                data={rowData}
                widthStyle={width}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
