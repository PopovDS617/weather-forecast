import React from 'react';
import Image from 'next/image';
type Props = {};

const CurrentWeather = (props: Props) => {
  return (
    <div className="w-4/12 rounded-md shadow-md mx-auto my-5 p-5 bg-slate-700 text-white ">
      <div className="flex justify-between items-center ">
        <div>
          <p className="font-bold text-4xl leading-none mb-7 tracking-wider  ">
            Name
          </p>
          <p className="font-bold text-xl leading-none my-1">sunny</p>
        </div>
        <Image src="/icons/01d.png" height={100} width={100} />
      </div>
      <div className="flex justify-between items-center ">
        <p className="font-bold text-6xl m-5 w-6/12">22 °C</p>
        <div className="pl-10 w-6/12">
          <div className="flex justify-between">
            <span className="text-left text-xl">feels like</span>
            <span className="text-right text-2xl ">22 °C </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xl">wind</span>
            <span className="text-right text-2xl ">2 m/s </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xl">humidity</span>
            <span className="text-right text-2xl ">40% </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left text-xl">зкуыыгку</span>
            <span className="text-right text-2xl ">40 hPa </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
