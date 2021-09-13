import Menu from "../../Menu";
import Logo from "../../Logo";
import CartButton from "../../CartDisplay";

import "./styles.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <Menu />
      </div>
      <div className="nav-right">
        <Logo />
        <CartButton />
      </div>
    </div>
  );
};

export default Nav;
