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
        fontSize: "18px",
      }}
    >
      <p style={{ width: "25%", textAlign: "start", fontWeight: "bold" }}>
        {displayDay()}
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}
        alt={daily.weather[0].main}
      />
      <div style={{ display: "flex" }}>
        <p style={{ fontWeight: "bold", margin: "0 5px" }}>
          {tempConverter(daily.temp.max)}
        </p>
        <p style={{ fontWeight: "light", margin: "0 5px" }}>
          {tempConverter(daily.temp.min)}
        </p>
      </div>
    </div>
  );
}

export default SingleDayCard;
