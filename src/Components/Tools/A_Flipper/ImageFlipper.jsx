// Styles
import "./Flipper.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import sound from "./assets/click.wav";
// Custom imports
import ProjectDescriptions from "../D_ProjectData/ProjectDescriptions.jsx";
// Project Dependencies
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";

const ImageFlipper = ({ col, row, toDisplay, project }) => {
  const [flipped, setFlipped] = useState(false);
  const [transformOp, setTransformOp] = useState(false);
  const [perspectiveVal, setPerspectiveVal] = useState("1000");
  const [cardProject, setCardProject] = useState(ProjectDescriptions[project]);
  const [smallCard, setSmallCard] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(null);
  const container = useRef(null);
  const image = useRef(null);

  var audio = new Audio(sound);
  audio.volume = 0.2;

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
      setTransformOp(true);
      // console.log(transformOp);
    } else {
      setTransformOp(false);
      // console.log(transformOp);
    }
  }

  useEffect(() => {
    getFlipDir();
  }, []);

  return (
    <AnimatePresence>
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
        <motion.div
          className="new-flip-card-inner"
          animate={transformOp ? { rotateY: flipped ? 180 : 0 } : { rotateX: flipped ? 180 : 0 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "linear",
          }}>
          <div className="new-flip-card-front">
            <img className="flipimage" ref={image} src={toDisplay} />
          </div>
          <div
            className="new-flip-card-back"
            style={transformOp ? { transform: `rotateY(180deg)` } : { transform: "rotateX(180deg)" }}>
            <div>
              <h2 style={smallCard ? { fontSize: "0.9em" } : {}}>{cardProject.title}</h2>

              {!smallCard && (
                <>
                  <i style={{ fontSize: "0.8em" }}>{cardProject.subTitle}</i>
                  <hr />
                  {/* <p style={{ fontSize: "0.8em", marginTop: "5px" }}>{cardProject.brief}</p> */}
                </>
              )}
            </div>
            <BsBoxArrowInRight
              className="icon"
              style={mouseEnter ? { color: "black", cursor: "pointer" } : { color: "gray" }}
              onMouseEnter={() => {
                setMouseEnter(true);
              }}
              onMouseLeave={() => {
                setMouseEnter(false);
              }}
              onClick={() => {
                audio.play();
              }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ImageFlipper;
