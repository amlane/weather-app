import React from "react";
import { tempConverter } from "../utils/tempConverter";

function CurrentWeather({ data }) {
  //   console.log(data.current.weather[0].description);
  return (
    <>
      {/* <p>{location.StreetAddresses[0].City}</p> */}
      <div style={{ fontSize: "30px" }}>Jefferson City</div>
      <div
        style={{
          fontSize: "18px",
          textTransform: "capitalize",
          fontWeight: "light",
        }}
      >
        {data.current.weather[0].description}
      </div>
      <div style={{ fontSize: "80px", fontWeight: "light" }}>
        {tempConverter(data.current.temp)}&#176;
      </div>
    </>
  );
}

export default CurrentWeather;
