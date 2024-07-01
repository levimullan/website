import "./App.css";
import { useState, useEffect, createContext } from "react";
import Menu from "./Components/00_Menu/Menu";
import Cover from "./Components/01_Cover/Cover";
import Magnify from "./Components/03_Magnify/Magnify";

export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(null);
  const [magnifyState, setMagnifyState] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setMagnifyState(false);
    } else if (event.key === "i") {
      setMagnifyState(true);
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
            <Cover setter={setPage} />
        </div>
        <Magnify magState={magnifyState} />
      </div>
    </PageContext.Provider>
  );
}

export default App;
