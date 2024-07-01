import "./flip.css";
import React, { useEffect, useState, useRef } from "react";

const flipper = ({ col, row, toDisplay }) => {
  const [flipped, setFlipped] = useState(false);
  const [flipDir, setFlipDir] = useState(false);
  const image = useRef(null);
  // let transformOp;

  // async function getFlipDir() {
  //   const img = new Image();
  //   img.src = toDisplay;
  //   if (img.width > img.height) {
  //     setFlipDir(false);
  //   } else {
  //     setFlipDir(true);
  //   }
  //   transformOp = flipDir ? "rotateY(180deg)" : "rotateX(180deg)";
  //   console.log(transformOp);
  // }

  return (
    <div
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
      }}>
      <div
        className="new-flip-card-inner"
        style={{
          transform: flipped ? "rotateX(180deg)" : "",
          transition: "transform 1s",
          transformStyle: "preserve-3d",
        }}>
        <div className="new-flip-card-front">
          <img class="flipimage" reft={image} src={toDisplay} />
        </div>
        <div className="new-flip-card-back" style={{ transform: "rotateX(180deg)" }}></div>
      </div>
    </div>
  );
};

export default flipper;
