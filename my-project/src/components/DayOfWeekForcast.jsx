import React from 'react';

const DayOfWeekForcast = ({ day, icon, temp, tempUnit }) => {
  return (
    <div className='flex flex-row h-1/3 w-full bg-[#cee3ea] rounded-[25px] justify-around items-center'>
      <p>{day}</p>
      <img src={icon} className='h-12 drop-shadow-md' />
      <p>
        {temp}°{tempUnit}
      </p>
    </div>
  );
};

export default DayOfWeekForcast;
