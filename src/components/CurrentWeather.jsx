import React from "react";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import { tempConverter } from "../utils/tempConverter";
import "../styles/CurrentWeather.css";

function CurrentWeather({ data }) {
  return (
    <>
      {/* <p>{location.StreetAddresses[0].City}</p> */}
      <div className="city-name">Jefferson City</div>
      <div className="weather-description">
        {data.current.weather[0].description}
      </div>
      <div className="current-temp">
        {tempConverter(data.current.temp)}&#176;
      </div>
      <section className="today">
        <div>
          <span>TODAY</span> <span>{getDayOfWeek(-1)}</span>
        </div>
      </section>
    </>
  );
}

export default CurrentWeather;
