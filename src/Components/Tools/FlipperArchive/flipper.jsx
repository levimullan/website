import "./flip.css";
import React from "react";

const flipper = ({ col, row, toDisplay }) => {
  
  return (
    <div
      className="new-flip-card"
      style={{
        gridColumn: `${col}`,
        gridRow: `${row}`,
      }}>
      <div className="new-flip-card-inner">
        <div className="new-flip-card-front">
          <img src={toDisplay} />
        </div>
        <div className="new-flip-card-back"></div>
      </div>
    </div>
  );
};

export default flipper;
