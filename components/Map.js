import { getCenter } from "geolib";
import Image from "next/image";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { StarIcon } from "@heroicons/react/solid";

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
              className="bg-green-400 z-10 rounded-2xl"
            >
              <div className="flex flex-col">
                <img
                  src={result.img}
                  objectFit="contain"
                  className="h-[180px] w-full mt-4 mb-3 rounded-lg"
                />
                <p className="text-md font-bold mb-2">{result.title}</p>
                <p className="text-md font-semibold mb-2">{result.price}</p>
                <div className="flex items-center justify-between">
                  <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400 m-1" />
                    {result.star}
                  </p>
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
