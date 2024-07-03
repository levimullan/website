// Images
import { FiGithub } from "react-icons/fi";
// Styles
import "./App.css";
// Custom Components
import Menu from "./Components/00_Menu/Menu";
import Cover from "./Components/01_Cover/Cover";
import Agripark from "./Components/03_Agripark/Agripark.jsx";
import Magnify from "./Components/Tools/C_Magnify/Magnify";
import SpotifyWidget from "./Components/Tools/B_Spotify/SpotifyWidget";
import Crypt from "./Components/04_Crypt/Crypt.jsx";
import sound from "./assets/click.wav";
// Dependencies
import { useState, useEffect, createContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiSearchEyeLine, RiLinkedinLine } from "react-icons/ri";
// Context Exports
export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(null);
  const [magnifyState, setMagnifyState] = useState(false);

  var audio = new Audio(sound);
  audio.volume = 0.2;

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setMagnifyState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    audio.play();
  }, [magnifyState]);

  return (
    <PageContext.Provider value={page}>
      <div className="app">
        <div className="app-grid">
          <Menu />

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
          <Cover setter={setPage} />
          {/* <Agripark setter={setPage} /> */}
          {/* <Crypt setter={setPage} /> */}
          <SpotifyWidget />
          {/* <Flipper col={1} row={5} toDisplay={headshot} project={11} /> */}
        </div>
        <Magnify magState={magnifyState} />
      </div>
    </PageContext.Provider>
  );
}

export default App;
