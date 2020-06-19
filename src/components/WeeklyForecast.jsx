import React from "react";
import SingleDayCard from "./SingleDayCard";

function WeeklyForecast({ data }) {
  return (
    <div>
      {data.daily.map((d, i) => {
        return <SingleDayCard daily={d} key={d.dt} i={i} />;
      })}
    </div>
  );
}

export default WeeklyForecast;
