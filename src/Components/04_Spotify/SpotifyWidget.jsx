import "./SpotifyWidget.css";
import SpotLogo from "./assets/spotify-icon.svg";
import { useRef, useState, useEffect } from "react";
import { processData } from "./utilCurrentListening";
import chairPrototype from "../01_Cover/assets/chair-prototype.png";

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

  if (isPlaying) {
    return (
      <>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" ref={containerRef}>
              <img src={albumCoverUrl} style={{ width: "100%", height: "100%" }} />
            </div>

            <div className="flip-card-back">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Now Playing </p>
                <br />
                <br />
              </div>

              <audio id="sound" controls src={previewLink}></audio>
              <a
                href={spotifyLink}
                onMouseEnter={() => playAudio("sound")}
                onMouseLeave={() => pauseAudio("sound")}
                target="_blank">
                <p className="title">{song}</p>
              </a>
              <br />
              <p>
                <p className="artist">{artist}</p>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="images">
        <img src={chairPrototype} />
      </div>
    );
  }
}

export default SpotifyWidget;
