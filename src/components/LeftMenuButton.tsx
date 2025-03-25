import { Icon, IconName } from "@/app/icons/Icon";

type Props = {
  readonly name: string;
  readonly icon: IconName; //TO CHANGE
  readonly link: string;
  readonly selected: boolean;
};

export function LeftMenuButton(props: Props) {
  let spanSelectedStyle = "";
  let buttonSelectedStyle = "text-gray-500";

  if (props.selected) {
    spanSelectedStyle = "bg-blue-900 rounded-lg rounded-2 h-8 ";
    buttonSelectedStyle =
      "border-2 rounded-md border-gray-200 bg-white text-blue-900";
  }

  return (
    <div className={`flex items-center pr-4`}>
      <span className={`w-1 mx-2 relative ${spanSelectedStyle}`}></span>
      <button
        className={`flex items-center w-full p-2 pl-2 hover:cursor-pointer ${buttonSelectedStyle}`}
      >
        <Icon name={props.icon} size="small" />
        <span className="pl-2 text-sm">{props.name}</span>
      </button>
    </div>
  );
}
