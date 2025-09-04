import React from 'react';
import DayOfWeekForcast from './HourOfDayForcast';
import icon from '../icons/Rainy.png';
import { convertDatetoTime } from '../utils/date';
import HourOfDayForcast from './HourOfDayForcast';

const DashboardHourlyForecast = ({ tempUnit, hourlyForecast }) => {
  // const weeklyData = [
  //   { day: 'Mon', temp: '20', icon },
  //   { day: 'Tue', temp: '22', icon },
  //   { day: 'Wed', temp: '21', icon },
  //   { day: 'Thu', temp: '29', icon },
  //   { day: 'Fri', temp: '24', icon },
  //   { day: 'Sat', temp: '28', icon },
  //   { day: 'Sun', temp: '24', icon },
  // ];

  hourlyForecast.map((hour) => {
    return {
      time: convertDatetoTime(hour.date),
      condition: hour.condition,
      temp_c: hour.temp_c,
      temp_f: hour.temp_f,
    };
  });

  return (
    <div className='flex flex-col h-1/2 max-md:h-full bg-[#e7f1f4] rounded-[20px] drop-shadow-lg max-md:min-h-80'>
      <div className='mt-4 ml-8'>
        <h1 className='text-2xl font-semibold'>Hourly Forecast</h1>
      </div>
      <div className='flex flex-1 p-6 justify-between'>
        <ul className='flex flex-row gap-2 overflow-y-auto'>
          {hourlyForecast.map((hour) => (
            <li>
              <HourOfDayForcast
                hour={hour.time}
                temp={hour.temp}
                tempUnit={tempUnit}
                icon={icon}
              />
            </li>
          ))}
        </ul>

        {/* <div className='flex flex-col w-[75px] bg-gradient-to-b from-[#bcd3db] via-[#D8E6EA] to-white rounded-[25px] justify-around items-center outline outline-1 outline-[#cbdce2] drop-shadow-md'>
                <p>Mon</p>
                <img src={icon} className='h-16' />
                <p>20°C</p>
              </div> */}
      </div>
    </div>
  );
};

export default DashboardHourlyForecast;
