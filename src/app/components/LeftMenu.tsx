import { Logo } from "../icons/Logo";

const LeftMenu = () => {
  return (
    <div>
      <div className="p-5 border-b-2 border-gray-200">
        <Logo name="paypal" size="small" />
      </div>
      <div>TOP MENU</div>
      <div>BOTTOM MENU</div>
    </div>
  );
};

export default LeftMenu;
