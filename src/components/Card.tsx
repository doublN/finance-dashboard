import { ReactNode } from "react";

type Props = {
  readonly children: ReactNode | Array<ReactNode>;
};

export function Card(props: Props) {
  return (
    <div className="relative grow flex flex-col row-span-1 col-span-2 border-2 border-gray-100 rounded-xl bg-white py-6 px-5 min-h-0">
      {props.children}
    </div>
  );
}
