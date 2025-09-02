import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import icon from '../icons/Rainy.png';
import {
  convertTimeToDate,
  convertTimeToDay,
  reformatTime,
} from '../utils/date';
import location_icon from '../icons/pin.png';
import windIcon from '../icons/wind.png';
import uvIcon from '../icons/ultraviolet.png';
import humidityIcon from '../icons/humidity-2.png';
import visibilityIcon from '../icons/visibility.png';
import sunriseIcon from '../icons/sunrise-2.png';
import sunsetIcon from '../icons/sunset-2.png';
import DashboardWeatherOverview from '../components/DashboardWeatherOverview';
import DashboardWeeklyOverview from '../components/DashboardWeeklyOverview';
import DashboardCurrentHighlights from '../components/DashboardCurrentHighlights';

function Weather() {
  const { location } = useParams(); // Extracts the 'userId' parameter from the URL
  const [currentTemp, setCurrentTemp] = useState(null);
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [high, setHigh] = useState(null);
  const [low, setLow] = useState(null);
  const [condition, setCondition] = useState('');
  const [feelsLike, setFeelsLike] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [uv, setUv] = useState(null);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  const fetchData = async () => {
    try {
      const weatherResponse = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`
      );
      const weatherJson = await weatherResponse.json();
      setCurrentTemp(weatherJson.current.temp_c);
      setDate(convertTimeToDate(weatherJson.current.last_updated));
      setDay(convertTimeToDay(weatherJson.current.last_updated));
      setCondition(weatherJson.current.condition.text);
      setFeelsLike(weatherJson.current.feelslike_c);
      setWind(weatherJson.current.wind_kph);
      setHumidity(weatherJson.current.humidity);
      setVisibility(weatherJson.current.vis_km);
      setUv(weatherJson.current.uv);

      const forecastResponse = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`
      );
      const forecastJson = await forecastResponse.json();
      setHigh(forecastJson.forecast.forecastday[0].day.maxtemp_c);
      setLow(forecastJson.forecast.forecastday[0].day.mintemp_c);
      setSunrise(
        reformatTime(forecastJson.forecast.forecastday[0].astro.sunrise)
      );
      setSunset(
        reformatTime(forecastJson.forecast.forecastday[0].astro.sunset)
      );
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <div className='h-full p-6 flex gap-6 max-md:flex-col'>
      <div className='flex h-full flex-col gap-6 w-[40%] max-md:w-full'>
        <DashboardWeatherOverview
          location_icon={location_icon}
          location={location}
          day={day}
          date={date}
          currentTemp={currentTemp}
          high={high}
          low={low}
          condition={condition}
          feelsLike={feelsLike}
          icon={icon}
        />
        <DashboardWeeklyOverview icon={icon} />
      </div>
      <div className='flex h-full w-[60%] flex-col gap-6 max-md:w-full'>
        <DashboardCurrentHighlights
          windIcon={windIcon}
          wind={wind}
          uvIcon={uvIcon}
          uv={uv}
          humidityIcon={humidityIcon}
          humidity={humidity}
          visibility={visibility}
          visibilityIcon={visibilityIcon}
          sunriseIcon={sunriseIcon}
          sunrise={sunrise}
          sunsetIcon={sunsetIcon}
          sunset={sunset}
        />

        <div className='flex-1 bg-[#e7f1f4] rounded-[20px] drop-shadow-lg'>
          {/* <p className='text-black'>
            Find the weather in <Link to={'/weather/Paris'}>Paris</Link>,{' '}
            <Link to={'/weather/Sydney'}>Sydney</Link>, or{' '}
            <Link to={'/weather/Berlin'}>Berlin</Link>
          </p>
          <p className='mt-10 text-black'>
            Looking for Weather in {location}...
          </p>
          {currentTemp} */}
          <Link to={'/weather/Sydney'}>Sydney</Link>
        </div>
      </div>
    </div>
  );
}
// #D8E6EA

export default Weather;
