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
import SpotifyWidget from "../04_Spotify/SpotifyWidget";
import welcome from "./assets/welcome.png";
import { useContext } from "react";
import { PageContext } from "../../App.jsx";
import Flipper from "../Archive_Components/drawer/flipper.jsx";
import chairPrototype from "../01_Cover/assets/chair-prototype.png";


const Cover = () => {

  const page = useContext(PageContext);

  return (
    <div>
      <div className={styles.grid}>
        <Flipper col={2} row={"1 / 3"} toDisplay={bazaarAxo} />
        <Flipper col={"3 / 7"} row={5} toDisplay={typologyTraverse} />
        <Flipper col={"7 / 9"} row={"3 / 6"} toDisplay={typologyAxo} />
        <Flipper col={"3 / 5"} row={"3 / 5"} toDisplay={axoHostel} />
        <Flipper col={7} row={2} toDisplay={mensFashion} />
        <Flipper col={1} row={"3 / 5"} toDisplay={cryptSection} />
        <Flipper col={9} row={1} toDisplay={wallSection} />
        <Flipper col={"5 / 7"} row={3} toDisplay={detriotElevation} />
        <Flipper col={2} row={"4 / 6"} toDisplay={dressSection} />
        <Flipper col={"3 / 5"} row={"1 / 3"} toDisplay={niagaraElevation} />
        <Flipper col={"5 / 8"} row={1} toDisplay={metroAxo} />
        <Flipper col={5} row={4} toDisplay={sleeve} />
        <Flipper col={"5 / 7"} row={2} toDisplay={patCut} />
        <Flipper col={1} row={2} toDisplay={sleeve2} />
        <Flipper col={8} row={2} toDisplay={icons} />
        <Flipper col={2} row={3} toDisplay={tobs} />
        <Flipper col={6} row={4} toDisplay={cryptRoof} />
        <Flipper col={9} row={4} toDisplay={sketch2} />
        <Flipper col={9} row={" 2 / 4"} toDisplay={agripark} />
        <Flipper col={8} row={1} toDisplay={headshot} />
        <Flipper col={1} row={1} toDisplay={cryptPlan} />
        <Flipper col={9} row={5} toDisplay={chairPrototype} />

        <div
          style={{
            gridColumn: "1",
            gridRow: "5",
          }}>
          <SpotifyWidget />
        </div>
      </div>
    </div>
  );
};

export default Cover;
