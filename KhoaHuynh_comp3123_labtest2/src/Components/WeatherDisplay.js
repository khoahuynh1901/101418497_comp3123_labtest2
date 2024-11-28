import React from "react";
import "../Styles/App.css";

const WeatherDisplay = ({ weather }) => {
  const { name, main, weather: weatherDetails } = weather;
  const weatherIcon = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  // Get current date and weekday
  const now = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekday = daysOfWeek[now.getDay()];
  const formattedDate = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="weather-display">
      <h2>
        {name}: {Math.round(main.temp)}°C
      </h2>
      <p>
        {weekday}, {formattedDate}
      </p>
      {/* Display weekday and formatted date */}
      <img src={weatherIcon} alt={weatherDetails[0].description} />
      <p>{weatherDetails[0].description}</p>
      <p>Feels Like: {Math.round(main.feels_like)}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
    </div>
  );
};

export default WeatherDisplay;
