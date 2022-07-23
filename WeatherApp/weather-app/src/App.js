import { useState } from "react";
import './App.css';
import Axios from "axios";

function App() {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    description: "",
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "" 
  })

  const searchWeather = () => {
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7645bb6e380854d8225e1dd604d34d8a`
    ).then((response) => {
      console.log(response.data);
      setWeatherData({
        description: response.data.weather[0].description,
        temp: response.data.main.temp,
        temp_min: response.data.main.temp_min,
        temp_max: response.data.main.temp_max,
        humidity: response.data.main.humidity,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        country: response.data.sys.country
      })
    });
  };



  return (
    <div className="app">
      <div className="app__header">
        <h1>Weather App</h1>
        <div className="app__headerSearch">
          <input type="text" onChange={(event) => {
              setCity(event.target.value);
              console.log(event.target.value);
            }} 
          />
          <button onClick={ searchWeather } >Search </button>
        </div>
      </div>

      <div className="app__body">
          <h2>Description: {weatherData.description}</h2>
          <h2>Temp: {(weatherData.temp)/10} °C</h2>
          <h2>Min. Temp: {(weatherData.temp_min)/10} °C</h2>
          <h2>Max Temp: {(weatherData.temp_max)/10} °C</h2>
          <h2>Humidity: {weatherData.humidity}</h2>
      </div>

      <div className="app__footer">
        <strong>Copyright © 2022 Jyoti Maurya. All Rights Reserved</strong>

      </div>
    </div>
  );
}

export default App;
