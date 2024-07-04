import React from "react";
import { useState } from "react";
import "./TestMenu.css";

const TestMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
    return (
      <div
        className="container"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}>
        <div className="menu-title">
          Title
        </div>
        <div className={isExpanded ? "subs-expanded" : "subs"}>
          About
        </div>
        <div className={isExpanded ? "subs-expanded" : "subs"}>
          Research
        </div>
        <div className={isExpanded ? "subs-expanded" : "subs"}>
          Professional
        </div>
        <div className={isExpanded ? "subs-expanded" : "subs"}>
          Academic
        </div>
        <div className={isExpanded ? "subs-expanded" : "subs"}>
          Personal
        </div>
      </div>
    );
};

export default TestMenu;
