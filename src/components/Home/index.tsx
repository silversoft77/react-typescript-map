import React, { useState } from "react";

import Navbar from "../Navbar";
import Mapbox from "../Mapbox";
import { CoordinatesType } from "../../types/mapbox";
import cityInfo from "../../constants/cityInfo";

import styles from "./style";

export default function Home() {
  const [width, setWidth] = useState<number>(1200);
  const [height, setHeight] = useState<number>(800);
  const [count, setCount] = useState<number>(0);
  const [coordinates, setCoordinates] = useState<CoordinatesType>(
    cityInfo.coordinates
  );

  const handleClickMap = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
    setCoordinates(e.lngLat);
  };

  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(e.target.value));
  };

  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(e.target.value));
  };

  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <Navbar
        width={width}
        height={height}
        count={count}
        coordinates={coordinates}
        handleChangeWidth={handleChangeWidth}
        handleChangeHeight={handleChangeHeight}
        handleChangeCount={handleChangeCount}
      />

      <Mapbox
        coordinates={coordinates}
        width={width}
        height={height}
        handleClickMap={handleClickMap}
      />
    </div>
  );
}
