import React from "react";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import { tempConverter } from "../utils/tempConverter";

function CurrentWeather({ data }) {
  //   console.log(data.current.weather[0].description);
  return (
    <>
      {/* <p>{location.StreetAddresses[0].City}</p> */}
      <div style={{ fontSize: "30px", padding: "10px 0 0" }}>
        Jefferson City
      </div>
      <div
        style={{
          fontSize: "16px",
          textTransform: "capitalize",
          fontWeight: "light",
          margin: "5px 0",
        }}
      >
        {data.current.weather[0].description}
      </div>
      <div style={{ fontSize: "80px", margin: "15px 0" }}>
        {tempConverter(data.current.temp)}&#176;
      </div>
      <section
        style={{ textAlign: "start", fontSize: "18px", margin: "0 0 10px" }}
      >
        <div>
          <span>TODAY</span> <span>{getDayOfWeek(-1)}</span>
        </div>
      </section>
    </>
  );
}

export default CurrentWeather;
