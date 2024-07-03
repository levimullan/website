// Styles
import "./Flipper.css";
import { BsBoxArrowInRight } from "react-icons/bs";
// Custom imports
import ProjectDescriptions from "../D_ProjectData/ProjectDescriptions.jsx";
import BingMaps from "../E_BingMaps/BingMaps.jsx";
// Project Dependencies
import React, { useEffect, useState} from "react";

const Flipper = ({ col, row, project }) => {
  const [flipped, setFlipped] = useState(false);
  const [perspectiveVal, setPerspectiveVal] = useState("1000");

  useEffect(() => {
    // console.log(cardProject);
  }, []);

  return (
    <div
      className="new-flip-card"
      style={{
        gridColumn: `${col}`,
        gridRow: `${row}`,
        perspective: `${perspectiveVal}px`,
      }}>
      <div
        className="new-flip-card-inner"
        style={{
          transform: flipped ? "rotateY(180deg)" : "",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
        }}>
        <div className="new-flip-card-front">
          <BingMaps option={project} />
        </div>
        <div className="new-flip-card-back" style={flipped ? {} : { transform: "rotateY(180deg)" }}></div>
      </div>
    </div>
  );
};

export default Flipper;
