import { Logo } from "../app/icons/Logo";
import { LeftMenuButton } from "./LeftMenuButton";
import { LeftMenuSearch } from "./LeftMenuSearch";
import { UserCard } from "./UserCard";

const LeftMenu = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-5 border-b-2 border-gray-200">
        <Logo name="paypal" size="small" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <LeftMenuSearch />
          <nav className="flex flex-col gap-2 mt-2">
            <LeftMenuButton
              name="Dashboard"
              icon="home"
              link=""
              selected={false}
            />
            <LeftMenuButton
              name="Finance"
              icon="toll"
              link=""
              selected={true}
            />
            <LeftMenuButton
              name="Send and Request"
              icon="send"
              link=""
              selected={false}
            />
            <LeftMenuButton
              name="Rewards"
              icon="redeem"
              link=""
              selected={false}
            />
            <LeftMenuButton
              name="Wallet"
              icon="wallet"
              link=""
              selected={false}
            />
            <LeftMenuButton
              name="Activity"
              icon="settings"
              link=""
              selected={false}
            />
          </nav>
        </div>
        <div>
          <nav className="">
            <LeftMenuButton
              name="Notifications"
              icon="notifications"
              link=""
              selected={false}
            />
            <LeftMenuButton
              name="Help Center"
              icon="help"
              link=""
              selected={false}
            />
            <LeftMenuButton
              name="Settings"
              icon="settings"
              link=""
              selected={false}
            />
          </nav>
          <div className="m-4">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
