import React from "react";
import "../Styles/App.css";

const ForecastDisplay = ({ forecast }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="forecast-container">
      {forecast.map((day) => {
        const date = new Date(day.dt_txt);
        const weekday = daysOfWeek[date.getDay()];
        const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

        return (
          <div key={day.dt} className="forecast-card">
            <p>{weekday}</p>
            <img src={iconUrl} alt={day.weather[0].description} />
            <p>{Math.round(day.main.temp)}°C</p>
          </div>
        );
      })}
    </div>
  );
};

export default ForecastDisplay;
