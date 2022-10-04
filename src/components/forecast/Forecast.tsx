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
      <div className="w-8/12 rounded-md     py-2 px-5 text-white">
        <Accordion allowZeroExpanded>
          {props.data.list.slice(0, 10).map((item, index) => (
            <AccordionItem key={Math.random() * 10}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="w-12/12 flex items-center justify-center cursor-pointer text-l my-2 ml-5 h-15 py-1 px-2 bg-sky-700 rounded-lg ">
                    <Image
                      src={`/icons/${item.weather[0].icon}.png`}
                      height={50}
                      width={50}
                    />
                    <label className="flex-1 flex-shrink-1 font-semibold ml-5">
                      {dateConverter(item.dt)}
                    </label>
                    <label className="flex-1 flex-shrink-1 ml-5 text-right">
                      {item.weather[0].description}
                    </label>
                    <label className="font-bold text-right ml-10">
                      {`${Math.round(item.main.temp)} °C`}
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Fragment>
  );
};

export default Forecast;
