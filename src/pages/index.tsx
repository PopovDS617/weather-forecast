import React, { useState } from 'react';
import CurrentWeather from '../components/current-weather/CurrentWeather';
import Search from '../components/search/Search';
import { WEATHER_API_URL } from '../utils/weather-fetch-helpers';

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(' ');
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };
  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className="h-screen bg-green-200  ">
      <div className="w-9/12 mx-auto py-5 px-5">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div>
        <CurrentWeather />
      </div>
    </div>
  );
};

export default Home;
