// Styles
import "./Menu.css";
//Dependencies
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
const Menu = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <div className="menu">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "135px",
          height: "50px",
          backgroundImage: "none",
          backgroundColor: "#fdfdfd",
          padding: "0px 15px",
        }}>
        <p style={{ color: "orangered" }}>Menu</p>
        <AiOutlineCaretDown
          className="menu-icon"
          onClick={() => {
            setMenuExpanded(!menuExpanded);
          }}
          style={menuExpanded ? {width: "10px", height: "10px", transform: "rotate(180deg)"} : { width: "10px", height: "10px"}}
        />
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>About</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Coffee Houses</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Arcades</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Detroit</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Niagara</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Italy 1</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Italy 2</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Toronto</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Chile</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Tobermory</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Writing</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "30px", backgroundPositionY: "-20px" } : {}}>
        <p style={menuExpanded ? { transform: "scaleY(1)" } : {}}>Furniture</p>
      </div>
      <div
        className={"subs-closed"}
        style={menuExpanded ? { color: "black", height: "25px", backgroundPositionY: "-20px" } : {}}></div>
    </div>
  );
};

export default Menu;
