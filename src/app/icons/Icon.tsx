import { FunctionComponent } from "react";
import { Help } from "./svg/help";
import { Home } from "./svg/home";
import { Notifications } from "./svg/notifications";
import { Person } from "./svg/person";
import { Redeem } from "./svg/redeem";
import { Send } from "./svg/send";
import { Settings } from "./svg/settings";
import { Toll } from "./svg/toll";
import { Wallet } from "./svg/wallet";
import { Search } from "./svg/search";

export type IconName =
  | "help"
  | "home"
  | "notifications"
  | "person"
  | "redeem"
  | "send"
  | "settings"
  | "toll"
  | "wallet"
  | "search";

export type IconSize = "small" | "medium" | "large";

type Props = {
  readonly name: IconName;
  readonly size: IconSize;
};

const icons = new Map<IconName, FunctionComponent>([
  ["help", Help],
  ["home", Home],
  ["notifications", Notifications],
  ["person", Person],
  ["redeem", Redeem],
  ["send", Send],
  ["settings", Settings],
  ["toll", Toll],
  ["wallet", Wallet],
  ["search", Search],
]);

export function Icon(props: Props) {
  const IconComponent = icons.get(props.name) ?? Help;

  const classes = {
    small: "w-[20px] [&svg]:w-[12px] [&svg]:h-[12px]",
    medium: "w-[30px] [&svg]:w-[22px] [&svg]:h-[22px]",
    large: "w-[50px] [&svg]:w-[42px] [&svg]:h-[42px]",
  }[props.size];

  return (
    <div className={classes}>
      <IconComponent />
    </div>
  );
}
