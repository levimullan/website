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
    <div
      className="menu"
      style={{
      gridColumn: "1",
      gridRow: "1 / 5",
      display: "grid",
      border: "4px solid white",
    }}>
      
   </div>
  );
};

export default Menu;
