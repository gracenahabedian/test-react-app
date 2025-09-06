import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  convertTimeToDate,
  convertTimeToDay,
  reformatTime,
  timeBetween,
} from '../utils/date';
import DashboardWeatherOverview from '../components/DashboardWeatherOverview';
import DashboardWeeklyOverview from '../components/DashboardWeeklyOverview';
import DashboardCurrentHighlights from '../components/DashboardCurrentHighlights';
import DashboardHourlyForecast from '../components/DashboardHourlyForecast';
import { mapConditionToIcon } from '../utils/mapConditionToIcon';
import { getCurrentData, getForecastData } from '../utils/API';

const moment = require('moment');

function Weather() {
  const { location } = useParams(); // Extracts the 'location' parameter from the URL

  const [weather, setWeather] = useState({
    currentTemp: '',
    date: '',
    day: '',
    high: '',
    low: '',
    condition: '',
    feelsLike: '',
    wind: '',
    humidity: '',
    visibility: '',
    uv: '',
    sunrise: '',
    sunset: '',
    airQuality: '',
    rainChance: '',
    hourlyForecast: [],
  });

  // part of a button
  const [tempUnit, setTempUnit] = useState('C');

  const fetchData = async () => {
    const wData = await getCurrentData(location);
    const fData = await getForecastData(location);

    const sunriseTemp = fData.forecast.forecastday[0].astro.sunrise;
    const sunsetTemp = fData.forecast.forecastday[0].astro.sunset;
    const hourlyForecast = fData.forecast.forecastday[0].hour.map((h) => {
      return {
        condition: h.condition.text,
        time: h.time,
        temp_c: h.temp_c,
        temp_f: h.temp_f,
        icon: mapConditionToIcon(
          h.condition.text,
          !timeBetween(
            moment(h.time, 'YYYY-MM-DD HH:mm A'),
            moment(sunriseTemp, 'HH:mm A'),
            moment(sunsetTemp, 'HH:mm A')
          )
        ),
      };
    });

    setWeather({
      ...weather,
      currentTemp: wData.current.temp_c,
      date: convertTimeToDate(wData.current.last_updated),
      day: convertTimeToDay(wData.current.last_updated),
      condition: wData.current.condition.text,
      feelsLike: wData.current.feelslike_c,
      wind: wData.current.wind_kph,
      humidity: wData.current.humidity,
      visibility: wData.current.vis_km,
      uv: wData.current.uv,
      high: fData.forecast.forecastday[0].day.maxtemp_c,
      low: fData.forecast.forecastday[0].day.mintemp_c,
      sunrise: reformatTime(sunriseTemp),
      sunset: reformatTime(sunsetTemp),
      airQuality: fData.forecast.forecastday[0].day.air_quality['us-epa-index'],
      rainChance: fData.forecast.forecastday[0].day.daily_chance_of_rain,
      hourlyForecast,
    });
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <div className='h-full p-6 flex gap-6 max-md:flex-col'>
      <div className='flex h-full flex-col gap-6 w-[40%] max-md:w-full'>
        <DashboardWeatherOverview
          location={location}
          weather={weather}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
        />
        <DashboardWeeklyOverview tempUnit={tempUnit} />
      </div>
      <div className='flex h-full w-[60%] flex-col gap-6 max-md:w-full'>
        <DashboardCurrentHighlights weather={weather} />
        <DashboardHourlyForecast
          tempUnit={tempUnit}
          hourlyForecast={weather.hourlyForecast}
        />
      </div>
    </div>
  );
}
// #D8E6EA

export default Weather;
