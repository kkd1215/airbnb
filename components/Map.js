import { getCenter } from "geolib";
import Image from "next/image";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  const [selectLocation, setSelectLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

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
      mapStyle="mapbox://styles/karan1215/cks2a10qb2bfx17mvsisb54x4"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      className="rounded-2xl shadow-xl overlay p-10"
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img
              src="/placeholder.png"
              role="img"
              onClick={() => setSelectLocation(result)}
              className="cursor-pointer h-10 w-10 shadow-2xl text-[#FD5B61] animate-bounce"
              aria-label="push-pin"
            />
          </Marker>
          {selectLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="flex flex-col z-10"
            >
              <div className="relative h-40 w-60 rounded-xl">
                <Image
                  src={result.img}
                  layout="fill"
                  objectFit="cover"
                  className="flex"
                />
                <div className="top-5 left-4 text-gray-800 font-bold">
                  <p>{result.title}</p>
                  <p className="text-xl">{result.price}</p>
                </div>
              </div>
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
