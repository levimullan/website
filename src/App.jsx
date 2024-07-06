// Images
import { FiGithub } from "react-icons/fi";
// Styles
import "./App.css";
// Custom Components
import Menu from "./Components/00_Menu/Menu";
import MenuData from "./Components/Tools/D_ProjectData/MenuData";
import Cover from "./Components/01_Cover/Cover";
// import Agripark from "./Components/03_Agripark/Agripark.jsx";
import Magnify from "./Components/Tools/C_Magnify/Magnify";
import SpotifyWidget from "./Components/Tools/B_Spotify/SpotifyWidget";
// import Crypt from "./Components/04_Crypt/Crypt.jsx";
import sound from "./assets/click.wav";
// Dependencies
import { useState, useEffect, createContext, useRef } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiSearchEyeLine, RiLinkedinLine } from "react-icons/ri";
// Context Exports
export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(null);
  const [magnifyState, setMagnifyState] = useState(false);
  const app = useRef(null);
  const appGrid = useRef(null);

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
    if (navigator.userActivation.hasbeenActive) {
      audio.play();
    }
  }, [magnifyState]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div ref={app} id="app" className="app">
      <div ref={appGrid} id="app-grid" className="app-grid">
        <div className="grid-menu">
          {MenuData.map((item) => {
            return <Menu key={item.title} menuObject={item} setPage={setPage} page={page} />;
          })}
        </div>
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
        <Cover setPage={setPage} page={page} />
        <SpotifyWidget />
      </div>
      <Magnify magState={magnifyState} nodeToClone={appGrid} />
    </div>
  );
}

export default App;
