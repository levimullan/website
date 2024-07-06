// Styles
import "./Menu.css";
//Dependencies
import { useState, useEffect } from "react";

const Menu = ({ menuObject, setPage, page }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [subs, setMenuSubs] = useState([]);

  const handleClick = (newPage) => {
    console.log("setting page from ", page, "to", newPage);
    setPage(newPage);
  };

  useEffect(() => {
    if (menuObject.subs) {
      setMenuSubs(menuObject.subs);
    }
  }, []);

  useEffect(() => {
    if (subs.includes(page)) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
      setMenuExpanded(false);
    }
  }, [page]);

  const handleHover = () => {
    if (!menuActive) {
      setMenuExpanded(!menuExpanded);
    }
  };

  return (
    <div className="menu" onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()}>
      <div className="menu-title">
        <h3 style={menuExpanded ? { color: "black" } : {}}>{menuObject.title}</h3>
      </div>
      <div style={menuExpanded ? { boxShadow: "-4px 0 3px -3px #00000020" } : {}} className="submenu">
        {subs &&
          subs.map((sub) => {
            return (
              <div
                className="subs-closed"
                key={sub.title}
                style={
                  menuExpanded
                    ? {
                        color: "black",
                        height: "30px",
                        backgroundPositionY: "-20px",
                      }
                    : {}
                }>
                <p
                  onClick={() => handleClick(sub)}
                  style={menuExpanded ? { cursor: "pointer", transform: "scaleY(1)", color: "black", textDecoration: (page == sub) ? "underline" : ""} : {}}>
                  {sub.title}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
