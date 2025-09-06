import React from 'react';
import DayOfWeekForcast from './DayOfWeekForcast';
import icon from '../icons/Rainy.png';

const DashboardWeeklyOverview = ({ tempUnit }) => {
  const weeklyData = [
    { day: 'Mon', temp: '20', icon },
    { day: 'Tue', temp: '22', icon },
    { day: 'Wed', temp: '21', icon },
  ];
  return (
    <div className='flex flex-col h-1/2 max-md:h-full bg-[#e7f1f4] rounded-[20px] drop-shadow-lg max-md:min-h-80'>
      <div className='mt-4 ml-8'>
        <h1 className='text-2xl font-semibold'>Weekly Forecast</h1>
      </div>
      <div className='flex flex-col flex-1 p-6 gap-2'>
        {weeklyData.map((dayData) => (
          <DayOfWeekForcast
            day={dayData.day}
            temp={dayData.temp}
            tempUnit={tempUnit}
            icon={dayData.icon}
          />
        ))}
        {/* <div className='flex flex-col w-[75px] bg-gradient-to-b from-[#bcd3db] via-[#D8E6EA] to-white rounded-[25px] justify-around items-center outline outline-1 outline-[#cbdce2] drop-shadow-md'>
                <p>Mon</p>
                <img src={icon} className='h-16' />
                <p>20°C</p>
              </div> */}
      </div>
    </div>
  );
};

export default DashboardWeeklyOverview;
