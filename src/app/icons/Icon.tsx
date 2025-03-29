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
import { Cancel } from "./svg/cancel";
import { Filter } from "./svg/filter";
import { Star } from "./svg/star";
import { StarOutline } from "./svg/starOutline";

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
  | "search"
  | "cancel"
  | "filter"
  | "star"
  | "starOutline";

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
  ["cancel", Cancel],
  ["filter", Filter],
  ["star", Star],
  ["starOutline", StarOutline],
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
