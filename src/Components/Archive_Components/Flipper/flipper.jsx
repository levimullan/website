import "./flip.css";
import React from "react";

const flipper = (img) => {
  return (
    <div
      className="new-flip-card"
      style={{
        gridColumn: "1",
        gridRow: "1",
      }}>
      <div className="new-flip-card-inner">
        <div className="new-flip-card-front">
          <img src={img} />
        </div>
        <div className="new-flip-card-back"></div>
      </div>
    </div>
  );
};

export default flipper;
