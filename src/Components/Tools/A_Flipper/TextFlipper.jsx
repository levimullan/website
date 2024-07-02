// Styles
import "./Flipper.css";
// Custom imports
import ProjectDescriptions from "../D_ProjectData/ProjectDescriptions.jsx";
import { PageContext } from "../../../App.jsx";
// Project Dependencies
import React, { useEffect, useState } from "react";
import { useContext } from "react";

const Flipper = ({ col, row, project, customText }) => {
  // useStates
  const [flipped, setFlipped] = useState(false);
  const [transformOp, setTransformOp] = useState("none");
  const [perspectiveVal, setPerspectiveVal] = useState("1000");
  const [cardProject, setCardProject] = useState(ProjectDescriptions[project]);

  // Page Context
  const page = useContext(PageContext);

  useEffect(() => {
    console.log(cardProject);
  });

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
        <div className="new-flip-card-front" style={{padding: "20px"}}>
          {cardProject && (
            <>
              <h1 style={{color: "orangered"}}>{cardProject.title}</h1>
              <i>{cardProject.subTitle}</i>
              <hr />
              <br />
              <p style={{fontWeight: "lighter"}}>{cardProject.brief}</p>
              <br />
              <p style={{ fontWeight: "lighter" }}>{cardProject.extra}</p>
            </>
          )}
          {!cardProject &&  customText }
        </div>

        <div className="new-flip-card-back" style={flipped ? {} : { transform: "rotateY(180deg)" }}>
          <h1>back</h1>
        </div>
      </div>
    </div>
  );
};

export default Flipper;
