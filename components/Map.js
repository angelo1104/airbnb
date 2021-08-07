import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function Map({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const [selectedLocation, setSelectedLocation] = useState(null);

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/angelo1004/cks1pr7jt2hjl17lf5rmur2pk"}
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResults.map((result, i) => (
        <div key={i}>
          <Marker longitude={result?.long} latitude={result?.lat}>
            <p
              role={"img"}
              aria-label={"push-pin"}
              className={"cursor-pointer text-xl animate-bounce"}
              onClick={() =>
                setSelectedLocation({
                  longitude: result?.long,
                  latitude: result?.lat,
                })
              }
            >
              📌
            </p>
          </Marker>
          {selectedLocation?.longitude === result?.long &&
          selectedLocation?.latitude === result?.lat ? (
            <Popup
              longitude={result?.long}
              latitude={result?.lat}
              closeOnClick
              closeButton
              className={"z-50"}
              onClose={() => setSelectedLocation(null)}
            >
              {result?.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
