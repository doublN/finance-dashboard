import { FunctionComponent } from "react";
import { PaypalLogo } from "./svg/paypalLogo";

export type LogoName = "paypal";

export type LogoSize = "small" | "medium" | "large";

type Props = {
  readonly name: LogoName;
  readonly size: LogoSize;
};

const logos = new Map<LogoName, FunctionComponent>([["paypal", PaypalLogo]]);

export function Logo(props: Props) {
  const LogoComponent = logos.get(props.name) ?? PaypalLogo;

  const sizeClass = {
    small: "w-[150px] [&svg]:w-[142px] [&svg]:h-[142px]",
    medium: "w-[225px] [&svg]:w-[217px] [&svg]:h-[217px]",
    large: "w-[300px] [&svg]:w-[292px] [&svg]:h-[292px]",
  }[props.size];

  return (
    <div className={sizeClass}>
      <LogoComponent />
    </div>
  );
}
