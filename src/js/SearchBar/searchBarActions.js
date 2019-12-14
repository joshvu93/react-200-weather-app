import axios from "axios";

export const getWeather = city => ({
  type: "GET_WEATHER",
  payload: axios.get(`/search/${city}`)
});