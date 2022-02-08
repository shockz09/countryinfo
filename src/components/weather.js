import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city })=> {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric `
      )
      .then(response => {
        setWeather(response.data);
      });
  }, [city]);

  if (!weather) return <div>error 404</div>;

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p><b>temperature:</b> {weather.main.temp} Celsius</p>

      {/* <img src ="http://openweathermap.org/img/wn/01d.png"  alt={city}/> */}
      <p><b>wind:</b> {weather.wind.speed} kph    ,   <b>direction:</b> {weather.wind.deg} </p>
    </div>
  );
}

export default Weather;