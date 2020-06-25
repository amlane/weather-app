import React from "react";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import { tempConverter } from "../utils/tempConverter";
import "../styles/CurrentWeather.css";

function CurrentWeather({ data, location }) {
  return (
    <>
      <div className="city-name">
        {location.StreetAddresses[0].City.toLowerCase()}
      </div>
      {/* <div className="city-name">Jefferson City</div> */}
      <div className="weather-description">
        {data.current.weather[0].description}
      </div>
      <div className="current-temp">
        {tempConverter(data.current.temp)}&#176;
      </div>
      <section className="today">
        <div>
          <span>{getDayOfWeek(-1)}</span> <span>TODAY</span>
        </div>
      </section>
    </>
  );
}

export default CurrentWeather;
