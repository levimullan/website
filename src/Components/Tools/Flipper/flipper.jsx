import "./flip.css";
import ProjectDescriptions from "../../ProjectDescriptions.jsx";
import React, { useEffect, useState, useRef } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";

const flipper = ({ col, row, toDisplay, project }) => {
  const [flipped, setFlipped] = useState(false);
  const [transformOp, setTransformOp] = useState("none");
  const [perspectiveVal, setPerspectiveVal] = useState("1000");
  const [cardProject, setCardProject] = useState(ProjectDescriptions[project]);
  const [smallCard, setSmallCard] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(null);
  const container = useRef(null);
  const image = useRef(null);

  async function getFlipDir() {
    let w = image.current.width;
    let h = image.current.height;
    if (w < 150) {
      setSmallCard(true);
    }
    if (w < 150 && h < 150) {
      setPerspectiveVal("300");
    }
    let ratio = Math.round(Math.abs(w / h) * 10) / 10;
    if (ratio < 1.6) {
      setTransformOp("rotateY(180deg)");
      // console.log(transformOp);
    } else {
      setTransformOp("rotateX(180deg)");
      // console.log(transformOp);
    }
  }

  useEffect(() => {
    getFlipDir();
    console.log(cardProject);
  }, []);

  return (
    <div
      ref={container}
      className="new-flip-card"
      onMouseEnter={() => {
        setFlipped(true);
      }}
      onMouseLeave={() => {
        setFlipped(false);
      }}
      style={{
        gridColumn: `${col}`,
        gridRow: `${row}`,
        perspective: `${perspectiveVal}px`,
      }}>
      <div
        className="new-flip-card-inner"
        style={{
          transform: flipped ? `${transformOp}` : "",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
        }}>
        <div className="new-flip-card-front">
          <img className="flipimage" ref={image} src={toDisplay} />
        </div>
        <div className="new-flip-card-back" style={{ transform: `${transformOp}` }}>
          <div>
            <h2 style={smallCard ? { fontSize: "0.9em" } : {}}>{cardProject.title}</h2>
            <i style={smallCard ? { fontSize: "0.8em" } : {}}>{cardProject.subTitle}</i>
          </div>
          <BsBoxArrowInRight
            className="icon"
            style={mouseEnter ? { color: "black", cursor: "pointer" } : { color: "white" }}
            onMouseEnter={() => {
              setMouseEnter(true);
            }}
            onMouseLeave={() => {
              setMouseEnter(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default flipper;
