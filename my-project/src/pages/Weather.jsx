import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Weather() {
  const [data, setData] = useState({});
  const { location } = useParams(); // Extracts the 'userId' parameter from the URL
  const [currentTemp, setCurrentTemp] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`
      );
      const json = await response.json();
      setData(json);
      setCurrentTemp(json.current.temp_c);
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
    <div className='h-full p-10'>
      <h1 className='text-2xl font-bold'>Weather</h1>
      <p>
        Find the weather in <Link to={'/weather/Paris'}>Paris</Link>,{' '}
        <Link to={'/weather/Sydney'}>Sydney</Link>, or{' '}
        <Link to={'/weather/Berlin'}>Berlin</Link>
      </p>
      <p className='mt-10'>Looking for Weather in {location}...</p>
      {currentTemp}
    </div>
  );
}

export default Weather;
