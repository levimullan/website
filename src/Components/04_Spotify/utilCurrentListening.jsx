const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);
const CUR_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  // Try to fetch authorization token
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
  });
  return response.json();
};

export const fetchData = async () => {
  try {
    const { access_token } = await getAccessToken();
    const response = await fetch(CUR_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (response.ok) {
      const data = await response.text();
      if (data.trim() !== "") {
        return JSON.parse(data);
      } else {
        console.warn("Received an empty response", data);
        return null;
      }
    } else {
      throw new Error("Network response was not ok!");
    }
  } catch (error) {
    console.error("Error fetching or parsing data", error);
  }
};

export const processData = async () => {
  const jsonResults = await fetchData();
  if (jsonResults && jsonResults.is_playing !== undefined && jsonResults.item) {
    const isPlaying = jsonResults.is_playing;
    const title = jsonResults.item.name;
    const artists = jsonResults.item.artists.map((_artist) => _artist.name).join(", ");
    const albumCover = jsonResults.item.album.images[0].url;
    const spotLink = jsonResults.item.external_urls.spotify;
    const previewURL = jsonResults.item.preview_url;
    return { isPlaying, title, artists, albumCover, spotLink, previewURL };
  } else {
    return { isPlaying: false, title: null, artists: null, albumCover: null, spotLink: null, previewURL: null };
  }
};
