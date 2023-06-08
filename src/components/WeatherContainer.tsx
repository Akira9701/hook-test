import React, { useEffect, useState } from 'react';

import type { IWeather } from '../types';

import WeatherItem from './WeatherItem';

const WeatherContainer = () => {
  const [weather, setWetaher] = useState<IWeather | null>(null);
  useEffect(() => {
    fetch(
      'http://localhost:8080/https://api.weather.yandex.ru/v2/forecast?lat=55.00835&lon=82.93573&extra=true',
      {
        method: 'GET',
        headers: {
          'X-Yandex-API-Key': '0f79c17c-d363-4ca4-bbb7-e71464a0c5cd'
        }
      }
    )
      .then((res) => res.json())
      .then((data: IWeather) => {
        setWetaher(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const timeHours = weather !== null ? new Date(weather.now * 1000).getHours() : 0;

  return (
    <article
      className={`weather ${
        timeHours > 8 && timeHours < 18 ? 'weather_container_day' : 'weather_container_night'
      }`}
    >
      {weather !== null ? <WeatherItem weather={weather} /> : <div className='loader' />}
      {/* <div className='loader' /> */}
    </article>
  );
};

export default WeatherContainer;
