import React from "react";
import { tempConverter } from "../utils/tempConverter";
import { getDayOfWeek } from "../utils/getDayOfWeek";

function SingleDayCard({ daily, i }) {
  const displayDay = () => {
    return getDayOfWeek(i);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "16px",
      }}
    >
      <p>{displayDay()}</p>
      <img
        src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
        alt={daily.weather[0].main}
      />
      <p style={{ textTransform: "bold" }}>{tempConverter(daily.temp.max)}</p>
      <p style={{ textTransform: "light" }}>{tempConverter(daily.temp.min)}</p>
    </div>
  );
}

export default SingleDayCard;
