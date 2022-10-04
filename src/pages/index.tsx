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

  return (
    <div className="h-full flex flex-col justify-between align-middle">
      <div className="lg:w-5/12 sm:w-8/12 mx-auto mt-12">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="flex  flex-col    lg:flex-row justify-evenly items-start w-full mx-auto my-12  ">
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
