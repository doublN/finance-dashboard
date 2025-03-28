type Props = {
  readonly value: number;
};

export function FearAndGreedLabel(props: Props) {
  let bgColorStyle = "";
  let label = "";

  if (props.value >= 80) {
    bgColorStyle = "bg-green-100";
    label = "Greed";
  } else if (props.value >= 60) {
    bgColorStyle = "bg-lime-100";
    label = "Greed";
  } else if (props.value >= 40) {
    bgColorStyle = "bg-yellow-100";
    label = "Neutral";
  } else if (props.value >= 20) {
    bgColorStyle = "bg-amber-100";
    label = "Fear";
  } else if (props.value >= 0) {
    bgColorStyle = "bg-red-100";
    label = "Fear";
  }

  return (
    <span className={`p-2 rounded-full font-semibold ${bgColorStyle}`}>
      {label} - {props.value}
    </span>
  );
}
