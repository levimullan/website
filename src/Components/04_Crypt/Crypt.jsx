//Images
import cryptAxo from "../../assets/crypt-axonometric.png";
import cryptPlan1 from "../../assets/plan-0.png";
import cryptPlan2 from "../../assets/plan-1.png";
import cryptPlan3 from "../../assets/plan-2.png";
import render1 from "../../assets/crypt-render-1.png";
import roof from "../../assets/axo-roof.png";
import cryptSection from "../../assets/crypt-section copy.png";
//Styles
import "./Crypt.css";
//Dependencies
import { useContext } from "react";
import { PageContext } from "../../App.jsx";
import ImageFlipper from "../Tools/A_Flipper/ImageFlipper.jsx";
import TextFlipper from "../Tools/A_Flipper/TextFlipper.jsx"
import MapFlipper from "../Tools/A_Flipper/MapFlipper.jsx"

const Crypt = () => {
  const page = useContext(PageContext);
  const projectNum = 5;

  return (
    <div className={"grid"}>
      <ImageFlipper col={"1 / 3"} row={"3 / 6"} toDisplay={cryptAxo} project={projectNum} />
      <ImageFlipper col={"3 / 5"} row={"4 / 6"} toDisplay={cryptPlan1} project={projectNum} />
      <ImageFlipper col={"5 / 7"} row={"4 / 6"} toDisplay={cryptPlan2} project={projectNum} />
      <ImageFlipper col={"7 / 9"} row={"4 / 6"} toDisplay={cryptPlan3} project={projectNum} />
      <ImageFlipper col={"7 / 9"} row={"1 / 4"} toDisplay={render1} project={projectNum} />
      <ImageFlipper col={"3 / 4"} row={"3 / 4"} toDisplay={roof} project={projectNum} />
      <ImageFlipper col={"5 / 7"} row={"1 / 4"} toDisplay={cryptSection} project={projectNum} />
      <TextFlipper col={"3 / 5"} row={"1 / 3"} project={projectNum} />
      <MapFlipper col={"1 / 3"} row={"1 / 3"} project={projectNum} />
    </div>
  );
};

export default Crypt;
