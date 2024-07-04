// Images
import livingRoom from "../../../assets/living-room.png";
// Styles
import "./SpotifyWidget.css";
//Dependencies
import { useRef, useState, useEffect } from "react";
import { processData } from "./utilCurrentListening";
import { AnimatePresence, cubicBezier, easeInOut, motion } from "framer-motion";
import { PiSpotifyLogoLight } from "react-icons/pi";

function SpotifyWidget() {
  const [isPlaying, setisPlaying] = useState(false);
  const [song, setSong] = useState(null);
  const [artist, setArtist] = useState(null);
  const [albumCoverUrl, setAlbumCoverUrl] = useState(null);
  const [spotifyLink, setSpotifyLink] = useState(null);
  const [previewLink, setPreviewLink] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const containerRef = useRef(null);

  const setStates = async () => {
    const arr = await processData();
    setisPlaying(arr.isPlaying);
    setSong(arr.title);
    setArtist(arr.artists);
    setAlbumCoverUrl(arr.albumCover);
    setSpotifyLink(arr.spotLink);
    setPreviewLink(arr.previewURL);
  };

  useEffect(() => {
    setStates();
    let lessFrequent;
    let moreFrequent;
    if (isPlaying) {
      moreFrequent = setInterval(setStates, 2500);
    } else {
      lessFrequent = setInterval(setStates, 5000);
    }

    return () => {
      clearInterval(moreFrequent);
      clearInterval(lessFrequent);
    };
  }, []);

  const playAudio = (id) => {
    if (navigator.userActivation.hasBeenActive || navigator.userActivation.isActive) {
      const audio = document.getElementById(id);
      audio.volume = 0.01;
      audio.play();
      increaseVol(audio);
    }
  };

  function increaseVol(audio) {
    console.log(audio.volume);
    setTimeout(() => {
      if (audio.volume < 0.1) {
        audio.volume = audio.volume + 0.005;
        console.log("new vol", audio.volume);
        increaseVol(audio);
      }
    }, 300);
  }

  const pauseAudio = (id) => {
    document.getElementById(id).pause();
  };

  return (
    <motion.div
      className="spotify-widget"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}>
      <motion.div
        className="nothing-playing"
        initial={isPlaying ? { opacity: 0 } : { opacity: 1 }}
        animate={isPlaying ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}>
          <p className="title">Nothing Playing</p>
      </motion.div>
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="playing-card"
            key={"playingCard"}
            initial={{ opacity: 0, rotateY: 0 }}
            animate={isFlipped ? { opacity: 1, rotateY: 180 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            exit={{ opacity: 0 }}>
            <div className="playing-front">
              <img src={albumCoverUrl} />
            </div>
            <div className="playing-back">
              <p className="artist">Currently Playing:</p>
              <audio id="sound" controls src={previewLink}></audio>
              <div>
              <div onMouseEnter={() => playAudio("sound")} onMouseLeave={() => pauseAudio("sound")}>
                <a href={spotifyLink} target="_blank" className="title">
                  {song}
                </a>
              </div>
              <p className="artist">{artist}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SpotifyWidget;
