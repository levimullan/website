// Images
import headshot from "./assets/headshot.jpg";
import { FiGithub } from "react-icons/fi";
// Styles
import "./App.css";
// Custom Components
import Menu from "./Components/00_Menu/Menu";
import Cover from "./Components/01_Cover/Cover";
import Agripark from "./Components/03_Agripark/Agripark.jsx";
import Flipper from "./Components/Tools/A_Flipper/ImageFlipper.jsx";
import Magnify from "./Components/Tools/C_Magnify/Magnify";
import SpotifyWidget from "./Components/Tools/B_Spotify/SpotifyWidget";
// Dependencies
import { useState, useEffect, createContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiSearchEyeLine, RiLinkedinLine } from "react-icons/ri";
// Context Exports
export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(null);
  const [pushed, setPushed] = useState(false);
  const [magnifyState, setMagnifyState] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setMagnifyState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <PageContext.Provider value={page}>
      <div className="app">
        <div className="app-grid">
          <Menu />
          <div></div>
          <div className="tools">
            <div
              className="tool"
              onClick={() => {
                setMagnifyState(true);
              }}>
              <RiSearchEyeLine />
            </div>
            <a className="tool" href="mailto:lmullan@student.ubc.ca" target="_blank">
              <HiOutlineMail />
            </a>
            <a className="tool" href="https://www.linkedin.com/in/levimullan/" target="_blank">
              <RiLinkedinLine />
            </a>
            <a className="tool" href="https://github.com/levimullan" target="_blank">
              <FiGithub />
            </a>
          </div>
          {/* <Cover setter={setPage} /> */}
          <Agripark setter={setPage} />
          <SpotifyWidget />
          {/* <Flipper col={1} row={5} toDisplay={headshot} project={11} /> */}
        </div>
        <Magnify magState={magnifyState} />
      </div>
    </PageContext.Provider>
  );
}

export default App;
