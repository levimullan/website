// Styles
import "./Menu.css";
//Dependencies
import { useAnimate, motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Menu = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <div className="menu">
      <div className="menu-item" style={{ backgroundImage: "none", backgroundColor: "white", border: "none", paddingLeft: "10px", padding: "5px" }}>
        <GiHamburgerMenu style={{ transform: "scale(0.9)", color: "orangered"}} />
      </div>
      <div className="menu-item" style={{ backgroundImage: "none", backgroundColor: "white"}}></div>
      <div className="menu-item"></div>
      <div className="menu-item">
        <p>About</p>
      </div>
      <div className="menu-item">
        <p>Bio</p>
      </div>
      <div className="menu-item">
        <p>Resume</p>
      </div>
      <div className="menu-item">
        <p>Research</p>
      </div>
      <div className="menu-item">
        <p>Work</p>
      </div>
      <div className="menu-item">
        <p>Seward</p>
      </div>
      <div className="menu-item">
        <p>Ash</p>
      </div>
      <div className="menu-item">
        <p>Niagara</p>
      </div>
      <div className="menu-item">
        <p>Italy</p>
      </div>
      <div className="menu-item">
        <p>Chile</p>
      </div>
      <div className="menu-item">
        <p>Toronto</p>
      </div>
      <div className="menu-item">
        <p>Tobermory</p>
      </div>
      <div className="menu-item">
        <p>Personal</p>
      </div>
      <div className="menu-item"></div>

      <div className="menu-item" style={{ backgroundImage: "none", backgroundColor: "white" }}></div>
    </div>
  );
};

export default Menu;
