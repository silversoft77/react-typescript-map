import Map, { Marker } from "react-map-gl";

import { MapPropsType } from "../../types/props";

export default function Mapbox({
  width,
  height,
  zoom,
  coordinates,
  markers,
  handleClickMap,
}: MapPropsType) {
  return (
    <Map
      initialViewState={{
        zoom,
        longitude: coordinates.lng,
        latitude: coordinates.lat,
      }}
      style={{ width, height, borderRadius: 10 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      onClick={handleClickMap}
    >
      {markers.map((marker, ind) => (
        <Marker
          key={`marker-${marker.lng}-${marker.lat}`}
          longitude={marker.lng}
          latitude={marker.lat}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: 900,
            color: "red",
          }}
        >
          {ind}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="red"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </Marker>
      ))}
    </Map>
  );
}
