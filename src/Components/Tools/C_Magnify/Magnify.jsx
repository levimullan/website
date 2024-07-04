// Styles
import "./Magnify.css";
// Dependencies
import { useState, useEffect, useRef } from "react";

const MagnifyButton = ({ magState }) => {
  const [frameHeight, setFrameHeight] = useState(null);
  const [frameWidth, setFrameWidth] = useState(null);
  const [xPos, setXPos] = useState(null);
  const [yPos, setYPos] = useState(null);
  const magnifyingGlass = useRef(null);
  const wrapper = useRef(null);

  const SCALE = 2;
  const SIZE = 300;

  const addStyles = (el, styles) => Object.assign(el.style, styles);

  const getCanvas = async () => {
    const bodyClone = document.body.cloneNode(true);
    addStyles(bodyClone, {
      position: "relative",
      transform: `scale(${SCALE})`,
    });
    magnifyingGlass.current.appendChild(bodyClone);
    shiftBackground();
  };

  const handleMouseMove = async (event) => {
    setXPos(event.pageX);
    setYPos(event.pageY);
  };

  const shiftBackground = () => {
    let shiftX = xPos;
    let shiftY = yPos;
    magnifyingGlass.current.children[0].style.left = shiftX + "px";
    magnifyingGlass.current.children[0].style.top = shiftY + "px";
  };

  useEffect(() => {
    setFrameHeight(document.documentElement.clientHeight);
    setFrameWidth(document.documentElement.clientWidth);
    console.log(frameHeight, frameWidth);
    if (magState && magnifyingGlass.current.children[0]) {
      shiftBackground();
    }
  }, [xPos, yPos]);

  useEffect(() => {
    if (magState) {
      getCanvas();
      magnifyingGlass.current.classList.add("growMag");
      wrapper.current.classList.add("greyWrap");
    }
  }, [magState]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {magState && (
        <div
          ref={wrapper}
          style={{
            position: "relative",
            zIndex: "2",
          }}>
          <div
            ref={magnifyingGlass}
            style={{
              position: "absolute",
              height: `${SIZE}px`,
              width: `${SIZE}px`,
              left: `${xPos - SIZE / 2}px`,
              top: `${yPos - SIZE / 2}px`,
              overflow: "hidden",
              borderRadius: "50%",
              zIndex: "1",
            }}></div>
        </div>
      )}
    </>
  );
};

export default MagnifyButton;
