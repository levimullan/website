import React, { useMemo, useEffect, useState } from "react";
const BingKey = import.meta.env.VITE_APP_AUTH_BING;

const BingMaps = ({ option }) => {
  const [isSKDLoaded, setisSKDLoaded] = useState(false);
  const [isNamespaceAvailable, setIsNameSpaceAvailable] = useState(false);

  const mapData = useMemo(() => {
    switch (option) {
      case 2:
        return { lat: 42.3736, long: -83.0819, heading: 270, zoom: 20 };
      // case "Cochrane":
      //   return { lat: 42.3398, long: -83.0744, heading: 180, zoom: 20 };
      // case "Niagara":
      //   return { lat: 43.088859, long: -79.073588, heading: 270, zoom: 20 };
      case 4:
        return { lat: 41.88515, long: 12.5078, heading: 270, zoom: 17 };
      case 5:
        return { lat: 41.87596, long: 12.4799, heading: 270, zoom: 21 };
      // default:
      //   return { lat: 49.26116, long: -123.249079, heading: 270, zoom: 19 };
    }
  }, [option]);
  let map;

  const loadScript = () => {
    const existingScript = document.querySelector(
      `script[src="https://www.bing.com/api/maps/mapcontrol?key=${BingKey}"]`
    );

    if (existingScript) {
      setisSKDLoaded(true);
    } else {
      const script = document.createElement("script");
      script.src = `https://www.bing.com/api/maps/mapcontrol?key=${BingKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setisSKDLoaded(true);
      document.body.appendChild(script);
    }
  };

  const renderMap = () => {
    try {
      map = new Microsoft.Maps.Map(document.getElementById("map"), {
        credentials: BingKey,
        center: new Microsoft.Maps.Location(mapData.lat, mapData.long),
        mapTypeId: Microsoft.Maps.MapTypeId.birdseye,
        minZoom: 1,
        maxZoom: 25,
        liteMode: true,
        navigationBarMode: Microsoft.Maps.NavigationBarMode.compact,
        labelOverlay: Microsoft.Maps.LabelOverlay.hidden,
        showScalebar: false,
        showLogo: false,
        heading: mapData.heading,
        disableScrollWheelZoom: true,
        zoom: mapData.zoom,
      });

      var tileSource = new Microsoft.Maps.TileSource({
        uriConstructor: "https://ecn.t0.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g=129",
      });

      var tileLayerOptions = {
        mercator: tileSource,
        opacity: 0.6,
        zIndex: 100,
      };

      var tileLayer = new Microsoft.Maps.TileLayer(tileLayerOptions);
      map.layers.insert(tileLayer);
    } catch (e) {
      console.log("Map fail:", e);
    }
  };

  document.addEventListener("DOMContentLoaded", renderMap);

  useEffect(() => {
    loadScript();
  }, []);

  useEffect(() => {
    let checkNameSpaceInterval;

    const checkNameSpace = () => {
      if (Microsoft && Microsoft.Maps) {
        setIsNameSpaceAvailable(true);
      }
    };

    if (isNamespaceAvailable) {
      renderMap();
    } else {
      checkNameSpaceInterval = setInterval(checkNameSpace, 3000);
    }

    return () => {
      clearInterval(checkNameSpaceInterval);
      if (map) {
        map.dispose();
      }
    };
  }, [isNamespaceAvailable, option]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        // borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "1px 0px 3px 0px rgba(0, 0, 0, 0.7)",
      }}>
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          zIndex: "0",
        }}></div>
    </div>
  );
};

export default BingMaps;
