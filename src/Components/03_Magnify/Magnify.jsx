import "./magnify.css";
import { useState, useEffect, useRef } from "react";

const MagnifyButton = ({ magState }) => {
  const [xPos, setXPos] = useState(null);
  const [yPos, setYPos] = useState(null);
  const magnifyingGlass = useRef(null);
  const wrapper = useRef(null);

  const SCALE = 2;
  const SIZE = 300;

  const addStyles = (el, styles) => Object.assign(el.style, styles);

  const getCanvas = async () => {
    const appClone = await document.body.cloneNode(true);
    addStyles(appClone, {
      position: "absolute",
      left: `0`,
      top: `0`,
      height: "100vh",
      width: "100vw",
      transform: `scale(${SCALE})`,
    });
    magnifyingGlass.current.appendChild(appClone);
    shiftBackground();
  };

  const handleMouseMove = async (event) => {
    setXPos(event.pageX);
    setYPos(event.pageY);
  };

  const shiftBackground = () => {
    let shiftX = -(SCALE * xPos) + SCALE * SIZE + SIZE + SIZE / 3 + 105;
    let shiftY = -(SCALE * yPos) + SCALE * SIZE + 20;
    magnifyingGlass.current.children[0].style.left = shiftX + "px";
    magnifyingGlass.current.children[0].style.top = shiftY + "px";
  };

  const cleanUpFunction = () => {
    magnifyingGlass.current.classList.add("growMag");
    wrapper.current.classList.add("greyWrap");
  };

  useEffect(() => {
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
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            zIndex: "2",
            border: "1px solid blue",
            overflow: "hidden",
          }}>
          <div
            ref={magnifyingGlass}
            style={{
              position: "absolute",
              padding: "0",
              margin: "0",
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
