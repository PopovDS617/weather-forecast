import React, { useState } from 'react';
import CurrentWeather from '../components/current-weather/CurrentWeather';
import Forecast from '../components/forecast/Forecast';
import Search from '../components/search/Search';
import { WEATHER_API_URL } from '../utils/weather-fetch-helpers';

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
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
  // console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className="h-screen bg-zinc-800 font-mont  ">
      <div className="w-5/12 mx-auto py-5 px-5">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="flex justify-evenly items-start w-full mx-auto">
        <div className="w-6/12 flex justify-end items-start ">
          {currentWeather && <CurrentWeather data={currentWeather} />}
        </div>
        <div className="w-6/12 flex justify-start items-start">
          {forecastWeather && <Forecast data={forecastWeather} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
