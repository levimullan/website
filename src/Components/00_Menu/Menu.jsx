import SpotifyWidget from "../04_Spotify/SpotifyWidget";
import TextAccordian from "../Tools/TextAccordian/TextAccordian";
import Flipper from "../Tools/Flipper/flipper.jsx";
import headshot from "./assets/headshot.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { RiSearchEyeLine, RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";


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
      <div className="tools">
        <div className="tool">
          <RiSearchEyeLine />
        </div>
        <div className="tool">
          <HiOutlineMail />
        </div>
        <div className="tool">
          <RiLinkedinLine/>
        </div>
        <div className="tool">
          <FiGithub/>
        </div>
      </div>
      <Flipper col={1} row={4} toDisplay={headshot} />
      <div style={{ gridRow: "5" }}>
        <SpotifyWidget />
      </div>
    </div>
  );
};

export default Menu;
