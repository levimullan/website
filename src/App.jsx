import "./App.css";
import { useState, useEffect } from "react";
import Cover from "./Components/01_Cover/Cover";
import Magnify from "./Components/03_Magnify/Magnify";

function App() {
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
    <div className="app">
      <Magnify magState={magnifyState} />
      <Cover />
    </div>
  );
}

export default App;
