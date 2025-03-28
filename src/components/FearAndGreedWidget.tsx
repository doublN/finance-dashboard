type Props = {
  readonly percentage: number;
};

export function FearAndGreedWidget(props: Props) {
  const value = (props.percentage / 100) * 92;

  console.log(value);

  const positionStyle = { left: `${value}%` };

  return (
    <div className="relative border border-gray-200 rounded-lg bg-white p-3">
      <div className="rounded-full bg-gray-100 p-1 flex h-5">
        <div className="h-full w-1/5 bg-red-600 rounded-l-md"></div>
        <div className="h-full w-1/5 bg-amber-600"></div>
        <div className="h-full w-1/5 bg-amber-300"></div>
        <div className="h-full w-1/5 bg-lime-400"></div>
        <div className="h-full w-1/5 bg-green-600 rounded-r-md"></div>
        <div
          style={positionStyle}
          className={`absolute top-[10px] rounded-full border-2 border-white h-6 w-6 bg-black`}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <p>Index: 0%</p>
        <p>Index: 100%</p>
      </div>
    </div>
  );
}
