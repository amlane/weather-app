import React from "react";
import { tempConverter } from "../utils/tempConverter";

function CurrentWeather({ data, location }) {
  //   console.log(data.current.weather[0].description);
  return (
    <>
      <p>{location.StreetAddresses[0].City}</p>
      <div>{data.current.weather[0].main}</div>
      <p>{tempConverter(data.current.temp)} &#176;</p>
    </>
  );
}

export default CurrentWeather;
