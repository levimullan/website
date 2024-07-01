import TextAccordian from "../Tools/TextAccordian/TextAccordian";



import "./Menu.css";
import React from "react";

const Menu = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <div className="menu-contents">
          <TextAccordian title="About" subs={[{ title: "Bio" }, { title: "Resume" }]}></TextAccordian>
          <TextAccordian title="Research" />
          <TextAccordian
            title="Professional"
            subs={[{ title: "Seward" }, { title: "Cochrane" }, { title: "Niagara" }]}
          />
          <TextAccordian
            title="Academic"
            subs={[
              { title: "Agripark" },
              { title: "Crypt" },
              { title: "Urban Type" },
              { title: "El Chalten Hostel" },
              { title: "Bruce" },
              { title: "Furniture" },
            ]}
          />
          <TextAccordian title="Ant Stories" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
