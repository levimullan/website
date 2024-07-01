import "./SpotifyWidget.css";
import livingRoom from "../01_Cover/assets/living-room.png";
import { useRef, useState, useEffect } from "react";
import { processData } from "./utilCurrentListening";

function SpotifyWidget() {
  const [isPlaying, setisPlaying] = useState(false);
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [albumCoverUrl, setAlbumCoverUrl] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [previewLink, setPreviewLink] = useState("");
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
      moreFrequent = setInterval(setStates, 20000);
    } else {
      lessFrequent = setInterval(setStates, 100000);
    }

    return () => {
      clearInterval(moreFrequent);
      clearInterval(lessFrequent);
    };
  }, []);

  const playAudio = (id) => {
    if (navigator.userActivation.hasBeenActive) {
      const audio = document.getElementById(id);
      audio.volume = 0.01;
      audio.play();
      increaseVol(audio);
    }
  };

  function increaseVol(audio) {
    console.log(audio.volume);
    setTimeout(() => {
      if (audio.volume < 0.2) {
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
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"
            style={isPlaying ? { animation: "bounce" } : {}}
            ref={containerRef}>
            <img src={isPlaying ? albumCoverUrl : livingRoom} style={{ width: "100%", height: "100%" }} />
          </div>

          <div className="flip-card-back">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Current track: </p>
              <br />
              <br />
            </div>

            <audio id="sound" controls src={previewLink}></audio>
            <a
              href={spotifyLink}
              onMouseEnter={() => playAudio("sound")}
              onMouseLeave={() => pauseAudio("sound")}
              target="_blank">
              {isPlaying ? <p className="title">{song}</p> : <p className="title">Nothing Playing.</p>}
            </a>
            <br />
            {isPlaying ? <p className="artist">{artist}</p> : <p className="artist">Check back later!</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SpotifyWidget;
