type Props = {
  readonly value: string;
};

export function PercentageChangeLabel(props: Props) {
  const number = parseFloat(props.value);

  if (!number) {
    return "";
  }

  if (number >= 0) {
    return (
      <span className="font-semibold text-green-800 bg-green-100 p-1 rounded-full border-1 border-green-200">
        ▲ {number}%
      </span>
    );
  } else {
    return (
      <span className="font-semibold text-red-800 bg-red-100 p-1 rounded-full border-1 border-red-200">
        ▼ {number}%
      </span>
    );
  }
}
