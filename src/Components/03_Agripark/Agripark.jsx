//Images
import metroAxo from "../../assets/metro-axo.png";
import agripark from "../../assets/rendering1.png";
import escalator from "../../assets/ext.png";
import diagram from "../../assets/Diagram.png";
import collage from "../../assets/collage2.png"
import collage2 from "../../assets/collage1.png";
import collage3 from "../../assets/collage3.png";
//Styles
import "./Agripark.css";
//Dependencies
import { useContext } from "react";
import { PageContext } from "../../App.jsx";
import ImageFlipper from "../Tools/A_Flipper/ImageFlipper.jsx";
import TextFlipper from "../Tools/A_Flipper/TextFlipper.jsx"
import MapFlipper from "../Tools/A_Flipper/MapFlipper.jsx"

const Agripark = () => {
  const page = useContext(PageContext);
  const projectNum = 4;


  return (
    <div className={"grid"}>
      <ImageFlipper col={"1 / 6"} row={"1 / 3"} toDisplay={metroAxo} project={projectNum} />
      <ImageFlipper col={"7 / 9"} row={"1 / 4"} toDisplay={agripark} project={projectNum} />
      <TextFlipper col={"1 / 4"} row={"3 / 5"} project={projectNum} />
      <ImageFlipper col={"4 / 7"} row={"3 / 5"} toDisplay={escalator} project={projectNum} />
      <ImageFlipper col={"3 / 7"} row={"5 / 5"} toDisplay={diagram} project={projectNum} />
      <ImageFlipper col={"6"} row={"1"} toDisplay={collage} project={projectNum} />
      <ImageFlipper col={"6"} row={"2"} toDisplay={collage3} project={projectNum} />
      <ImageFlipper col={"1 / 3"} row={"5"} toDisplay={collage2} project={projectNum} />
      <MapFlipper col={"7 / 9"} row={"4 / 6"} project={projectNum} />
    </div>
  );
};

export default Agripark;
