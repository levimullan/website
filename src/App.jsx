import "./App.css";
import { useState, useEffect, createContext } from "react";
import Menu from "./Components/00_Menu/Menu";
import Cover from "./Components/01_Cover/Cover";
import Flipper from "./Components/Tools/Flipper/flipper.jsx";
import headshot from "./Components/00_Menu/assets/headshot.jpg";
import Magnify from "./Components/03_Magnify/Magnify";
import SpotifyWidget from "./Components/04_Spotify/SpotifyWidget";
import { HiOutlineMail } from "react-icons/hi";
import { RiSearchEyeLine, RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

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
          <div className="tools">
            <div
              className="tool"
              onClick={() => {
                setMagnifyState(true);
              }}>
              <RiSearchEyeLine />
            </div>
            <div className="tool">
              <HiOutlineMail />
            </div>
            <div className="tool">
              <RiLinkedinLine />
            </div>
            <div className="tool">
              <FiGithub />
            </div>
          </div>
          <Cover setter={setPage} />
          <Flipper col={1} row={4} toDisplay={headshot} project={11} />
          <SpotifyWidget />
        </div>
        <Magnify magState={magnifyState} />
      </div>
    </PageContext.Provider>
  );
}

export default App;
