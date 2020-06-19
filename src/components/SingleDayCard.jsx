import React from "react";
import moment from "moment";

function SingleDayCard({ daily, i }) {
  const getDayOfWeek = () => {
    const todaysDate = moment().format("d");

    let dateOfForecast = +todaysDate + 1 + i;
    console.log(todaysDate, dateOfForecast, i);
    if (dateOfForecast > 6) {
      dateOfForecast -= 7;
    }

    switch (dateOfForecast) {
      case 0:
        //code
        return "Sunday";
        break;
      case 1:
        //code
        return "Monday";
        break;
      case 2:
        //code
        return "Tuesday";
        break;
      case 3:
        //code
        return "Wednesday";
        break;
      case 4:
        //code
        return "Thursday";
        break;
      case 5:
        //code
        return "Friday";
        break;
      case 6:
        //code
        return "Saturday";
        break;
      default:
        return "Error";
    }
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
      <p>{getDayOfWeek()}</p>
      <p>{daily.weather[0].main}</p>
      <img
        src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
        alt={daily.weather[0].main}
      />
    </div>
  );
}

export default SingleDayCard;
