import React from 'react';
import Image from 'next/image';

type Props = {
  data: {
    city: string;
    weather: { description: string; icon: string };
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    wind: { speed: number };
  };
};

const CurrentWeather = (props: Props) => {
  return (
    <div className="w-9/12 rounded-md shadow-md  mr-5   p-5 bg-sky-700 text-white    transition-all duration-1000 ease-out    ">
      <div className="flex justify-between items-center ">
        <div>
          <p className="font-bold text-4xl leading-none mb-7 tracking-wider  ">
            {props.data.city}
          </p>
          <p className="text-xl font-medium leading-none my-1">
            {props.data.weather[0].description}
          </p>
        </div>
        <Image
          src={`/icons/${props.data.weather[0].icon}.png`}
          height={100}
          width={100}
        />
      </div>
      <div className="flex justify-between items-center ">
        <p className="font-bold text-6xl m-5 w-6/12">
          {`${Math.round(props.data.main.temp)} °C`}
        </p>
        <div className="pl-10 w-6/12">
          <div className="flex justify-between">
            <span className="text-left text-xl">feels like</span>
            <span className="text-right text-2xl ">
              {`${Math.round(props.data.main.feels_like)} °C`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xl">wind</span>
            <span className="text-right text-2xl ">
              {`${Math.round(props.data.wind.speed)} m/s`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xl">humidity</span>
            <span className="text-right text-2xl ">
              {`${Math.round(props.data.main.humidity)} %`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xl">pressure</span>
            <span className="text-right text-2xl ">
              {' '}
              {`${Math.round(props.data.main.pressure)} hPa`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
