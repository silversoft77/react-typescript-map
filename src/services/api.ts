import axios, { AxiosError, AxiosResponse } from "axios";

import { API_ENDPOINT, SERVER_URL } from "../constants/urls";
import { CoordinatesRequest } from "../types/api";

export const getCoordinates = (data: CoordinatesRequest) =>
  axios
    .post(`${SERVER_URL}/${API_ENDPOINT}/mapbox/coordinates`, data, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((receipt: AxiosResponse) => receipt.data)
    .catch((error: AxiosError) => console.error(error.message));
