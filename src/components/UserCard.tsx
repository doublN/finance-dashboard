import { Icon } from "@/app/icons/Icon";

export function UserCard() {
  return (
    <div className="flex items-center content-stretch gap-3 p-2 bg-white rounded-xl border-2 border-gray-200 drop-shadow-sm">
      <div className="bg-gray-200 text-gray-500 border-2 w-10 h-10 border-white drop-shadow-sm rounded-full flex items-center justify-center">
        <Icon name="person" size="medium" />
      </div>
      <div>
        <p className="font-semibold">Nathan Newberry</p>
        <p className="text-sm">n.newberry@hotmail.com</p>
      </div>
    </div>
  );
}
