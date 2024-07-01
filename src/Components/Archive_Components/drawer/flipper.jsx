import "./flip.css";
import React, { useEffect, useState, useRef } from "react";

const flipper = ({ col, row, toDisplay }) => {
  const [flipped, setFlipped] = useState(false);
  const [transformOp, setTransformOp] = useState("none");
  const container = useRef(null);
  const image = useRef(null);


  async function getFlipDir() {
    let ratio = Math.round(Math.abs(image.current.width / image.current.height) * 10) / 10;
    if (ratio < 1.6) {
      setTransformOp ("rotateY(180deg)");
      console.log(transformOp);
    } else {
      setTransformOp("rotateX(180deg)");
      console.log(transformOp);
    }
  }

  useEffect(() => {
    getFlipDir();
  },[])

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
      }}>
      <div
        className="new-flip-card-inner"
        style={{
          transform: flipped ? `${transformOp}` : "",
          transition: "transform 1s",
          transformStyle: "preserve-3d",
        }}>
        <div className="new-flip-card-front">
          <img className="flipimage" ref={image} src={toDisplay} />
        </div>
        <div className="new-flip-card-back" style={{ transform: `${transformOp}` }}></div>
      </div>
    </div>
  );
};

export default flipper;
