import React from 'react';

const HourOfDayForcast = ({ hour, icon, temp, tempUnit }) => {
  return (
    <div className='flex flex-col w-[70px] bg-[#cee3ea] rounded-[25px] justify-around items-center'>
      <p>{hour}</p>
      <img src={icon} className='h-14 drop-shadow-md' />
      <p>
        {temp}°{tempUnit}
      </p>
    </div>
  );
};

export default HourOfDayForcast;
