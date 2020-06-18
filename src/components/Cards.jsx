import React, { useState, useEffect } from "react";
import axios from "axios";
import { tempConverter } from "../utils/tempConverter";
function Cards() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    console.log("testing");
    // don't make the API
    if (lat !== null && lon !== null) {
      console.log("API request made");
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`
        )
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [lat, lon]);

  // console.log(tempConverter(298.08));
  if (!data) return <h1>Loading...</h1>;
  return <div>{tempConverter(data.current.temp)} degrees</div>;
}

export default Cards;

// checks if geolocation is turned on
// if ("geolocation" in navigator) {
//   console.log("Available");
// } else {
//   console.log("Not Available");
// }
