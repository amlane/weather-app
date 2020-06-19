import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import CurrentWeather from "./CurrentWeather";
import WeeklyForecast from "./WeeklyForecast";

function Cards() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  // const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // TODO - handle if user has geolocation turned off
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    // won't allow the API calls until we have the lat/lon from the navigator
    if (lat !== null && lon !== null) {
      console.log("API request made");
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`
        )
        .then((res) => {
          console.log(res);
          setWeatherData(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });

      // axios
      //   .get(
      //     `https://geoservices.tamu.edu/Services/ReverseGeocoding/WebService/v04_01/HTTP/default.aspx?lat=${lat}&lon=${lon}&format=json&version=4.10&apiKey=${process.env.REACT_APP_REVERSE_GEOCODING_API_KEY}`
      //   )
      //   .then((res) => {
      //     console.log(res);
      //     setLocationData(res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err.response);
      //   });
    }
  }, [lat, lon]);
  // console.log(process.env.REACT_APP_REVERSE_GEOCODING_API_KEY);
  // if (!weatherData || !locationData) return <h1>Loading...</h1>;
  if (!weatherData) return <h1>Loading...</h1>;
  return (
    <>
      <header className="App-header">
        <CurrentWeather data={weatherData} />
      </header>
      <section className="App-header">
        <WeeklyForecast data={weatherData} />
      </section>
    </>
  );
}

export default Cards;

// checks if geolocation is turned on
// if ("geolocation" in navigator) {
//   console.log("Available");
// } else {
//   console.log("Not Available");
// }
