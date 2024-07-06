// Styles
import "./Magnify.css";
// Dependencies
import { useState, useEffect, useRef } from "react";

const MagnifyButton = ({ magState, nodeToClone }) => {
  const [xPos, setXPos] = useState(null);
  const [yPos, setYPos] = useState(null);
  const [offsetTop, setOffsetTop] = useState(null);
  const [offsetLeft, setOffsetLeft] = useState(null);
  const magnifyingGlass = useRef(null);

  const SCALE = 2;
  const SIZE = 300;

  const addStyles = (el, styles) => Object.assign(el.style, styles);

  const setOffsets = () => {
    if (nodeToClone) {
      setOffsetTop(nodeToClone.current.getBoundingClientRect().top);
      setOffsetLeft(nodeToClone.current.getBoundingClientRect().left);
      console.log(offsetTop, offsetLeft);
    }
  };

  const getCanvas = async () => {
    setOffsets();
    const clone = await nodeToClone.current.cloneNode(true);
    addStyles(clone, {
      position: "absolute",
      transformOrigin: "top left",
      left: `${-xPos * 2 + 2 * offsetLeft + SIZE / 2}px`,
      top: `${-yPos * 2 + 2 * offsetTop + SIZE / 2}px`,
      transform: `scale(${SCALE})`,
    });
    magnifyingGlass.current.appendChild(clone);
  };

  const handleMouseMove = async (event) => {
    setXPos(event.pageX);
    setYPos(event.pageY);
  };

  const shiftBackground = () => {
    let shiftX = -xPos * 2 + 2 * offsetLeft + SIZE / 2;
    let shiftY = -yPos * 2 + 2 * offsetTop + SIZE / 2;
    magnifyingGlass.current.children[0].style.left = shiftX + "px";
    magnifyingGlass.current.children[0].style.top = shiftY + "px";
  };

  useEffect(() => {
    if (magState) {
      shiftBackground();
    }
  }, [xPos, yPos]);

  useEffect(() => {
    if (magState) {
      getCanvas();
      magnifyingGlass.current.classList.add("growMag");
    }
  }, [magState]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setOffsets);
    };
  }, []);

  return (
    <>
      {magState && (
        <div
          ref={magnifyingGlass}
          style={{
            position: "absolute",
            height: `${SIZE}px`,
            width: `${SIZE}px`,
            top: `${yPos - SIZE / 2}px`,
            left: `${xPos - SIZE / 2}px`,
            overflow: "hidden",
            borderRadius: "50%",
            zIndex: "1",
          }}></div>
      )}
    </>
  );
};

export default MagnifyButton;
