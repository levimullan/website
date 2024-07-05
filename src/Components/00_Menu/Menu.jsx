// Styles
import "./Menu.css";
//Dependencies
import { useState, useEffect } from "react";

const Menu = ({ menuObject, setPage, page }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [subs, setMenuSubs] = useState([]);

  const handleClick = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (menuObject.subs) {
      setMenuSubs(menuObject.subs);
    }
  }, []);

  return (
    <div
      className="menu"
      onMouseEnter={() => setMenuExpanded(true)}
      onMouseLeave={() => setMenuExpanded(false)}
      style={menuExpanded ? {} : {}}>
      <div className="menu-title">
        <h3>{menuObject.title}</h3>
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
                  style={menuExpanded ? { transform: "scaleY(1)", color: "rgb(157, 157, 157)" } : {}}>
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
