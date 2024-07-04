//Images
import cryptPlan from "../../assets/crypt-plan.png";
import bazaarAxo from "../../assets/bazaar-axo.png";
import typologyTraverse from "../../assets/typology-traverse.png";
import typologyAxo from "../../assets/typology-axo.png";
import axoHostel from "../../assets/hostel-axo.png";
import mensFashion from "../../assets/mens-fashion.png";
import detriotElevation from "../../assets/detroit-elevation.png";
import dressSection from "../../assets/dress-section.png";
import niagaraElevation from "../../assets/niagara-elevation.png";
import metroAxo from "../../assets/metro-axo.png";
import sleeve from "../../assets/sleeve.png";
import cryptRoof from "../../assets/crypt-roof.png";
import patCut from "../../assets/1830pat.png";
import sleeve2 from "../../assets/sleeve-2.png";
import icons from "../../assets/icons.png";
import tobs from "../../assets/tobs.png";
import sketch2 from "../../assets/sketch2.png";
import agripark from "../../assets/agripark1.png";
import chairPrototype from "../../assets/chair2.png";
import digfem1 from "../../assets/digitalfemme1.png";
import digfem2 from "../../assets/digfemme2.png";
import sketch from "../../assets/axonometric.png";
import chair2 from "../../assets/chair-prototype.png";
import chile1 from "../../assets/elevation.png";
import plan1 from "../../assets/plan-1.png";
import typesection from "../../assets/section2.png";
import colbert from "../../assets/colbert.png";
import dresscolbert from "../../assets/dresscolbert.png";

//Styles
import styles from "./styles.module.css";
//Dependencies
import { useContext } from "react";
import { PageContext } from "../../App.jsx";
import Flipper from "../Tools/A_Flipper/ImageFlipper.jsx";

const Cover = ({ setter }) => {
  const page = useContext(PageContext);

  return (
    <div className={styles.covergrid}>
      <Flipper col={1} row={"1 / 3"} toDisplay={bazaarAxo} project={0} />
      <Flipper col={"2 / 6"} row={5} toDisplay={typologyTraverse} project={6} />
      <Flipper col={"6 / 8"} row={"3 / 6"} toDisplay={typologyAxo} project={6} />
      <Flipper col={"2 / 4"} row={"3 / 5"} toDisplay={axoHostel} project={10} />
      <Flipper col={6} row={2} toDisplay={mensFashion} project={0} />
      <Flipper col={"2 / 4"} row={6} toDisplay={detriotElevation} project={1} />
      <Flipper col={1} row={"4 / 6"} toDisplay={dressSection} project={0} />
      <Flipper col={"2 / 4"} row={"1 / 3"} toDisplay={niagaraElevation} project={3} />
      <Flipper col={"4 / 7"} row={1} toDisplay={metroAxo} project={4} />
      <Flipper col={4} row={4} toDisplay={sleeve} project={0} />
      <Flipper col={"4 / 6"} row={2} toDisplay={patCut} project={0} />
      <Flipper col={7} row={2} toDisplay={icons} project={11} />
      <Flipper col={1} row={3} toDisplay={tobs} project={7} />
      <Flipper col={5} row={4} toDisplay={cryptRoof} project={5} />
      <Flipper col={8} row={4} toDisplay={sketch2} project={9} />
      <Flipper col={8} row={" 2 / 4"} toDisplay={agripark} project={4} />
      <Flipper col={8} row={1} toDisplay={sleeve2} project={0} />
      <Flipper col={7} row={1} toDisplay={cryptPlan} project={5} />
      <Flipper col={8} row={5} toDisplay={chairPrototype} project={8} />
      <Flipper col={9} row={"4 / 6"} toDisplay={digfem1} project={12} />
      <Flipper col={5} row={6} toDisplay={digfem2} project={12} />
      <Flipper col={9} row={"1 / 3"} toDisplay={sketch} project={9} />
      <Flipper col={1} row={6} toDisplay={chair2} project={8} />
      <Flipper col={"6 / 9"} row={6} toDisplay={chile1} project={10} />
      <Flipper col={9} row={3} toDisplay={plan1} project={5} />
      <Flipper col={"4 / 6"} row={3} toDisplay={typesection} project={6} />
      <Flipper col={4} row={6} toDisplay={colbert} project={0} />
      <Flipper col={9} row={6} toDisplay={dresscolbert} project={0} />
    </div>
  );
};

export default Cover;
