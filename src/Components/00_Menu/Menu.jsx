// Styles
import "./Menu.css";
//Dependencies
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <div className="menu-contents">
          <div className="menu-icon">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
