import { PercentageChangeLabel } from "./PercentageChangeLabel";

type Props = {
  readonly label: string;
  readonly value: string;
  readonly percentChange?: string;
};

export function FinanceTrackerItem(props: Props) {
  return (
    <p className="text-sm">
      <span>{props.label}:</span>
      <span className="text-blue-900 font-semibold"> {props.value} </span>
      {props.percentChange && (
        <PercentageChangeLabel value={props.percentChange} />
      )}
    </p>
  );
}
