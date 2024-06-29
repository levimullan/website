import "./SpotifyWidget.css";
import SpotLogo from "./SpotLogo";
import { useRef, useState, useEffect } from "react";
import { processData } from "./utilCurrentListening";
import gsap from "gsap";

function SpotifyWidget() {
  const [isPlaying, setisPlaying] = useState(false);
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [albumCoverUrl, setAlbumCoverUrl] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const setStates = async () => {
    const arr = await processData();
    setisPlaying(arr.isPlaying);
    setSong(arr.title + ", by ");
    setArtist(arr.artists);
    setAlbumCoverUrl(arr.albumCover);
    setSpotifyLink(arr.spotLink);
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

  return (

      isPlaying &&
        <div className="spotify" ref={containerRef}>
        <a href={spotifyLink} target="_blank">
          <img src={albumCoverUrl} style={{ width: "100%", height: "100%" }} />
          </a>
        </div>
  )
}

export default SpotifyWidget;
