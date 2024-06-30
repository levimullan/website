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
import colbert from "./assets/colbertmovie.mp4";
import sketch2 from "./assets/sketch2.png";
import agripark from "./assets/agripark1.png";
import headshot from "./assets/headshot.jpg";
import SpotifyWidget from "../04_Spotify/SpotifyWidget";

const Cover = () => {
  return (
    <div>
      <div className={styles.grid}>
        <div
          className={styles.images}
          style={{
            gridColumn: "1",
            gridRow: "1",
          }}>
          <img src={cryptPlan} />
        </div>

        <div
          className={styles.images}
          style={{
            gridColumn: "2",
            gridRow: "1 / 3",
          }}>
          <img src={bazaarAxo} />
        </div>

        <div
          className={styles.images}
          style={{
            gridColumn: "3 / 7",
            gridRow: "5",
          }}>
          <img src={typologyTraverse} />
        </div>

        <div
          style={{
            position: "relative",
            gridColumn: "1",
            gridRow: "5",
            overflow: "visible",
          }}>
          <SpotifyWidget />
        </div>

        <div
          className={styles.images}
          style={{
            gridColumn: "7 / 9",
            gridRow: "3 / 6",
          }}>
          <img src={typologyAxo} />
        </div>

        <div
          className={styles.images}
          style={{
            gridColumn: "3 / 5",
            gridRow: "3 / 5",
          }}>
          <img src={axoHostel} />
        </div>

        <div
          className={styles.images}
          style={{
            gridColumn: "7",
            gridRow: "2",
          }}>
          <img src={mensFashion} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "1",
            gridRow: "3 / 5",
          }}>
          <img src={cryptSection} />
        </div>

        <div
          className={styles.images}
          style={{
            gridColumn: "9",
            gridRow: "1",
          }}>
          <img src={wallSection} />
        </div>

        <div
          className={styles.images}
          style={{
            gridColumn: "5 / 7",
            gridRow: "3",
          }}>
          <img src={detriotElevation} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "2",
            gridRow: "4 / 6",
          }}>
          <img src={dressSection} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "3 / 5",
            gridRow: "1 / 3",
          }}>
          <img src={niagaraElevation} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "5 / 8",
            gridRow: "1",
          }}>
          <img src={metroAxo} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "5",
            gridRow: "4",
          }}>
          <img src={sleeve} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "5 / 7",
            gridRow: "2",
          }}>
          <img src={patCut} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "1",
            gridRow: "2",
          }}>
          <img src={sleeve2} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "8",
            gridRow: "2",
          }}>
          <img src={icons} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "2",
            gridRow: "3",
          }}>
          <img src={tobs} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "6",
            gridRow: "4",
          }}>
          <img src={cryptRoof} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "9",
            gridRow: "5",
          }}>
          <video height="100%" width="100%" controls loop autoPlay muted>
            <source src={colbert} type="video/mp4"></source>
          </video>
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "9",
            gridRow: "4",
          }}>
          <img src={sketch2} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "9",
            gridRow: "2 / 4",
          }}>
          <img src={agripark} />
        </div>
        <div
          className={styles.images}
          style={{
            gridColumn: "8",
            gridRow: "1",
          }}>
          <img src={headshot} />
        </div>
      </div>
    </div>
  );
};

export default Cover;
