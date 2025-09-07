import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  convertDatetoTime,
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
import {
  getThreeDayForecast,
  getCurrentData,
  getForecastData,
} from '../utils/API';
import SearchBar from '../components/SearchBar';
import { cities } from '../cityData';
const moment = require('moment');

function Weather() {
  const emptyWeatherData = {
    currentTempC: '',
    date: '',
    day: '',
    time: '',
    highC: '',
    lowC: '',
    condition: '',
    feelsLikeC: '',
    currentTempF: '',
    highF: '',
    lowF: '',
    feelsLikeF: '',
    wind: '',
    humidity: '',
    visibility: '',
    uv: '',
    sunrise: '',
    sunset: '',
    airQuality: '',
    rainChance: '',
    hourlyForecast: [],
    threeDayForecast: [],
  };
  const navigate = useNavigate();
  const { location } = useParams(); // Extracts the 'location' parameter from the URL
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(emptyWeatherData);

  // part of a button
  const [tempUnit, setTempUnit] = useState('C');

  const fetchData = async () => {
    const wData = await getCurrentData(location);
    const fData = await getForecastData(location);
    const f3Data = await getThreeDayForecast(location);

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
      currentTempC: wData.current.temp_c,
      date: convertTimeToDate(wData.current.last_updated),
      day: convertTimeToDay(wData.current.last_updated),
      time: convertDatetoTime(wData.current.last_updated),
      condition: wData.current.condition.text,
      feelsLikeC: wData.current.feelslike_c,
      currentTempF: wData.current.temp_f,
      highF: fData.forecast.forecastday[0].day.maxtemp_f,
      lowF: fData.forecast.forecastday[0].day.mintemp_f,
      feelsLikeF: wData.current.feelslike_f,
      wind: wData.current.wind_kph,
      humidity: wData.current.humidity,
      visibility: wData.current.vis_km,
      uv: wData.current.uv,
      highC: fData.forecast.forecastday[0].day.maxtemp_c,
      lowC: fData.forecast.forecastday[0].day.mintemp_c,
      sunrise: reformatTime(sunriseTemp),
      sunset: reformatTime(sunsetTemp),
      airQuality: fData.forecast.forecastday[0].day.air_quality['us-epa-index'],
      rainChance: fData.forecast.forecastday[0].day.daily_chance_of_rain,
      hourlyForecast,
      threeDayForecast: f3Data,
    });
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  useEffect(() => {
    // do a check here and see if the search exists in the cityData
    // if it doesnt exist, then send to error page
    if (search != '') {
      setWeather(emptyWeatherData);
      navigate(`/weather/${search}`);
    }
  }, [search]);

  // if location is not valid
  if (location) {
    if (!cities.map((c) => c.toLowerCase()).includes(location.toLowerCase())) {
      return (
        <div className='h-full w-full flex-col flex justify-center items-center gap-5'>
          <h1>Sorry! We can't find any valid weather data for "{location}"</h1>
          <button
            className='bg-[#D8BFD8] rounded-lg h-14 w-48 hover:bg-[#caaacadb]'
            onClick={() => navigate('/weather')}
          >
            <p className='font-medium'>Return to Home Page</p>
          </button>
        </div>
      );
    }
  }

  return (
    <div className='h-full w-full flex-col flex'>
      <SearchBar setSearch={setSearch} />

      <div className='flex-1 p-6 flex gap-6 max-md:flex-col'>
        <div className='flex h-full flex-col gap-6 w-[40%] max-md:w-full'>
          <DashboardWeatherOverview
            location={location}
            weather={weather}
            tempUnit={tempUnit}
            setTempUnit={setTempUnit}
          />
          <DashboardWeeklyOverview
            tempUnit={tempUnit}
            threeDayForecast={weather.threeDayForecast}
          />
        </div>
        <div className='flex h-full w-[60%] flex-col gap-6 max-md:w-full'>
          <DashboardCurrentHighlights weather={weather} />
          <DashboardHourlyForecast
            tempUnit={tempUnit}
            hourlyForecast={weather.hourlyForecast}
          />
        </div>
      </div>
    </div>
  );
}

export default Weather;
