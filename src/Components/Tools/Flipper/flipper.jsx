import "./flip.css";
import React, { useEffect, useState, useRef } from "react";

const flipper = ({ col, row, toDisplay, textContent }) => {
  const [flipped, setFlipped] = useState(false);
  const [transformOp, setTransformOp] = useState("none");
  const [perspectiveVal, setPerspectiveVal] = useState("1000");
  const container = useRef(null);
  const image = useRef(null);

  async function getFlipDir() {
    let w = image.current.width;
    let h = image.current.height;
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
    console.log(textContent);
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
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default flipper;
