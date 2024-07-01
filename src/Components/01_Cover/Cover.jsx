import styles from "./styles.module.css";
import cryptPlan from "./assets/crypt-plan.png";
import bazaarAxo from "./assets/bazaar-axo.png";
import typologyTraverse from "./assets/typology-traverse.png";
import typologyAxo from "./assets/typology-axo.png";
import axoHostel from "./assets/hostel-axo.png";
import mensFashion from "./assets/mens-fashion.png";
import cryptSection from "./assets/crypt-section.png";
import wallSection from "./assets/wall-section.png";
import detriotElevation from "./assets/detroit-elevation.png";
import dressSection from "./assets/dress-section.png";
import niagaraElevation from "./assets/niagara-elevation.png";
import metroAxo from "./assets/metro-axo.png";
import sleeve from "./assets/sleeve.png";
import cryptRoof from "./assets/crypt-roof.png";
import patCut from "./assets/1830pat.png";
import sleeve2 from "./assets/sleeve-2.png";
import icons from "./assets/icons.png";
import tobs from "./assets/tobs.png";
import sketch2 from "./assets/sketch2.png";
import agripark from "./assets/agripark1.png";
import headshot from "./assets/headshot.jpg";
import { useContext, useEffect } from "react";
import { PageContext } from "../../App.jsx";
import Flipper from "../Tools/Flipper/flipper.jsx";
import chairPrototype from "../01_Cover/assets/chair-prototype.png";
import ProjectDescriptions from "../ProjectDescriptions.jsx"


const Cover = ({setter}) => {

  const page = useContext(PageContext);

  return (
    <div className={styles.grid}>
      <Flipper col={1} row={"1 / 3"} toDisplay={bazaarAxo} textContent={ProjectDescriptions[0]} />
      <Flipper col={"2 / 6"} row={5} toDisplay={typologyTraverse} textContent={ProjectDescriptions[0]} />
      <Flipper col={"6 / 8"} row={"3 / 6"} toDisplay={typologyAxo} textContent={ProjectDescriptions[0]} />
      <Flipper col={"2 / 4"} row={"3 / 5"} toDisplay={axoHostel} textContent={ProjectDescriptions[0]} />
      <Flipper col={6} row={2} toDisplay={mensFashion} />
      {/* <Flipper col={1} row={"3 / 5"} toDisplay={cryptSection} /> */}
      <Flipper col={8} row={1} toDisplay={wallSection} textContent={ProjectDescriptions[0]} />
      <Flipper col={"4 / 6"} row={3} toDisplay={detriotElevation} textContent={ProjectDescriptions[0]} />
      <Flipper col={1} row={"4 / 6"} toDisplay={dressSection} textContent={ProjectDescriptions[0]} />
      <Flipper col={"2 / 4"} row={"1 / 3"} toDisplay={niagaraElevation} textContent={ProjectDescriptions[0]} />
      <Flipper col={"4 / 7"} row={1} toDisplay={metroAxo} textContent={ProjectDescriptions[0]} />
      <Flipper col={4} row={4} toDisplay={sleeve} textContent={ProjectDescriptions[0]} />
      <Flipper col={"4 / 6"} row={2} toDisplay={patCut} textContent={ProjectDescriptions[0]} />
      {/* <Flipper col={1} row={2} toDisplay={sleeve2} textContent={ProjectDescriptions[0]}/> */}
      <Flipper col={7} row={2} toDisplay={icons} textContent={ProjectDescriptions[0]} />
      <Flipper col={1} row={3} toDisplay={tobs} textContent={ProjectDescriptions[0]} />
      <Flipper col={5} row={4} toDisplay={cryptRoof} textContent={ProjectDescriptions[0]} />
      <Flipper col={8} row={4} toDisplay={sketch2} textContent={ProjectDescriptions[0]} />
      <Flipper col={8} row={" 2 / 4"} toDisplay={agripark} />
      <Flipper col={8} row={1} toDisplay={sleeve2} textContent={ProjectDescriptions[0]} />
      <Flipper col={7} row={1} toDisplay={cryptPlan} textContent={ProjectDescriptions[0]} />
      <Flipper col={8} row={5} toDisplay={chairPrototype} textContent={ProjectDescriptions[0]} />
    </div>
  );
};

export default Cover;
