import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./Components/WeatherDisplay";
import ForecastDisplay from "./Components/ForcastDisplay";
import SearchBar from "./Components/Search";
import "./Styles/App.css";

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const API_KEY = "04ee5bbb9f33f3d63ceddc2ac7df6a7c";

  useEffect(() => {
    // Fetch current weather
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch 5-day forecast
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        // Filter to get one forecast per day at 12:00 PM
        const filteredForecast = response.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(filteredForecast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
    fetchForecast();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputCity = e.target.elements.city.value;
    setCity(inputCity);
  };

  return (
    <div className="app">
      <h3> 101418497 Khoa Huynh - Lab test 2</h3>
      <form onSubmit={handleSearch} className="search-bar">
        <input type="text" name="city" placeholder="Enter city" />
        <button type="submit">Search</button>
      </form>
      {weather && <WeatherDisplay weather={weather} />}
      {forecast.length > 0 && <ForecastDisplay forecast={forecast} />}
    </div>
  );
};

export default App;
