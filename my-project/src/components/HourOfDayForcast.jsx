import React from 'react';

const HourOfDayForcast = ({ time, icon, temp, tempUnit }) => {
  return (
    <div className='flex flex-col w-[85px] h-full bg-[#cee3ea] rounded-[25px] justify-around items-center'>
      <p>{time}</p>
      <img src={icon} className='h-14 drop-shadow-md' />
      <p>
        {temp}°{tempUnit}
      </p>
    </div>
  );
};

export default HourOfDayForcast;
