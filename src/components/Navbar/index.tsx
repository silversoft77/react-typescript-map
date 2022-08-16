import { NavbarPropsType } from "../../types/props";

import styles from "./style";

export default function Navbar({
  width,
  height,
  count,
  coordinates,
  handleChangeWidth,
  handleChangeHeight,
  handleChangeCount,
}: NavbarPropsType) {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>Mapbox</h1>

      <input
        type="number"
        onChange={handleChangeWidth}
        defaultValue={width}
        className={styles.input}
        min={0}
        max={1200}
      />
      <input
        type="number"
        onChange={handleChangeHeight}
        defaultValue={height}
        className={styles.input}
        min={0}
        max={800}
      />
      <input
        type="text"
        onChange={handleChangeCount}
        defaultValue={count}
        className={styles.input}
        min={0}
        max={100}
      />

      <button type="button" className={styles.button}>
        Plot
      </button>

      <div className={styles.coordinates}>
        lng: {Number(coordinates.lng).toFixed(3)}
        <br />
        lat: {Number(coordinates.lat).toFixed(3)}
      </div>
    </div>
  );
}
