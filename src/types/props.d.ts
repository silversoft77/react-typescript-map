import { CoordinatesType } from "./mapbox";

export type MapPropsType = {
  width: number;
  height: number;
  zoom: number;
  coordinates: CoordinatesType;
  markers: Array<CoordinatesType>;
  handleClickMap: Function<mapboxgl.MapMouseEvent & mapboxgl.EventData>;
};

export type NavbarPropsType = {
  width: number;
  height: number;
  count: number;
  coordinates: CoordinatesType;
  handleChangeWidth: Function<React.ChangeEvent<HTMLInputElement>>;
  handleChangeHeight: Function<React.ChangeEvent<HTMLInputElement>>;
  handleChangeCount: Function<React.ChangeEvent<HTMLInputElement>>;
  handleClickPlot: VoidFunction;
};
