// Styles
import "./MenuArchive.css";
//Dependencies
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
const Menu = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <div
      className="menu"
      onMouseEnter={() => {
        setMenuExpanded(true);
      }}
      onMouseLeave={() => {
        setMenuExpanded(false);
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "135px",
          height: "50px",
          backgroundImage: "none",
          padding: "0px 15px",
        }}>
        <h2>Menu</h2>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>About</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Coffee Houses</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Arcades</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Detroit</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Niagara</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Italy 1</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Italy 2</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Toronto</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Chile</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Tobermory</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Writing</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <i style={menuExpanded ? { transform: "scaleY(1)", color: "gray" } : {}}>Furniture</i>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "25px", backgroundPositionY: "-20px" } : {}}></div>
    </div>
  );
};

export default Menu;
