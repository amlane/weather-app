import React from "react";
import { tempConverter } from "../utils/tempConverter";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import "../styles/SingleDayCard.css";

function SingleDayCard({ daily, i }) {
  const displayDay = () => {
    return getDayOfWeek(i);
  };

  return (
    <div className="single-day-card ">
      <p className="display-day">{displayDay()}</p>
      <img
        src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}
        alt={daily.weather[0].main}
      />
      <div className="temps">
        <p>{tempConverter(daily.temp.max)}</p>
        <p>{tempConverter(daily.temp.min)}</p>
      </div>
    </div>
  );
}

export default SingleDayCard;
