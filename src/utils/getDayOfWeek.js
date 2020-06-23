import moment from "moment";

export const getDayOfWeek = (i) => {
  const todaysDate = moment().format("d");

  let dateOfForecast = +todaysDate + 1 + i;
  if (dateOfForecast > 6) {
    dateOfForecast -= 7;
  }

  switch (dateOfForecast) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Error";
  }
};
