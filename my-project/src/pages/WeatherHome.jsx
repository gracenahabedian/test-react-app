import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import homeBG from '../icons/home-bg.png';

function WeatherHome() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // do a check here and see if the search exists in the cityData
    // if it doesnt exist, then send to error page
    if (search != '') {
      // setWeather(emptyWeatherData);
      navigate(`/weather/${search}`);
    }
  }, [search]);

  return (
    <div
      className='h-full w-full flex-row flex'
      style={{ backgroundImage: `url(${homeBG})` }}
    >
      <div className='flex flex-col pt-24 pl-28 gap-7'>
        <div className='pl-7'>
          <p className='text-5xl'>We've got</p>
          <div className='flex gap-3'>
            <p className='text-5xl'>you</p>
            <p className='text-5xl font-bold text-[#264F5B]'>covered</p>
          </div>
        </div>
        <div className='flex'>
          <SearchBar setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
}

export default WeatherHome;
