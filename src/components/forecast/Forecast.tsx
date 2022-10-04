import React, { Fragment } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import Image from 'next/image';
import { dateConverter } from '../../utils/date-helpers';

type Weather = {
  city: string;
  dt: number;
  weather: { description: string; icon: string };
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
  };
  wind: { speed: number };
};

type Props = {
  data: {
    list: Weather[];
  };
};

const Forecast = (props: Props) => {
  return (
    <Fragment>
      <div className="w-9/12 rounded-md       px-5 text-white">
        <Accordion allowZeroExpanded>
          {props.data.list.slice(0, 11).map((item, index) => (
            <AccordionItem key={Math.random() * 10}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="w-12/12 flex items-center justify-center cursor-pointer text-xl mb-2 ml-5 h-15 py-1 px-2 bg-sky-700 rounded-lg bg-opacity-70 transition-all duration-300 hover:bg-opacity-100 ">
                    <Image
                      src={`/icons/${item.weather[0].icon}.png`}
                      height={50}
                      width={50}
                    />
                    <span className="flex-1 flex-shrink-1 font-semibold ml-5">
                      {dateConverter(item.dt)}
                    </span>
                    <span className="flex-1 flex-shrink-1 ml-5 text-right">
                      {item.weather[0].description}
                    </span>
                    <span className="font-bold text-right ml-10">
                      {`${Math.round(item.main.temp)} °C`}
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-sky-900 text-l my-2 ml-5 h-15 py-1 px-2 rounded-lg text-right  ">
                <div className="w-12/12 mx-auto flex justify-evenly items-center flex-wrap ">
                  <div className="mx-1  ">
                    <span className="mx-1">feels like:</span>
                    <span>{`${Math.round(item.main.feels_like)} °C`}</span>
                  </div>
                  <div className="mx-1">
                    <span className="mx-1">wind:</span>
                    <span>{`${Math.round(item.wind.speed)} m / s`}</span>
                  </div>
                  <div className="mx-1">
                    <span className="mx-1">humidity:</span>
                    <span>{`${item.main.humidity} %`}</span>
                  </div>
                  <div className="mx-1">
                    <span className="mx-1">pressure:</span>
                    <span>{`${item.main.pressure} hPa`}</span>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Fragment>
  );
};

export default Forecast;
