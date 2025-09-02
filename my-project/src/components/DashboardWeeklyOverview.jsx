import React from 'react';

const DashboardWeeklyOverview = ({ icon }) => {
  return (
    <div className='flex flex-col h-1/2 max-md:h-full bg-[#e7f1f4] rounded-[20px] drop-shadow-lg max-md:min-h-80'>
      <div className='mt-4 ml-8'>
        <h1 className='text-2xl font-semibold'>Weekly Forecast</h1>
      </div>
      <div className='flex flex-1 p-6 justify-between'>
        <div className='flex flex-col w-[75px] bg-[#cee3ea] rounded-[25px] justify-around items-center'>
          <p>Mon</p>
          <img src={icon} className='h-16 drop-shadow-md' />
          <p>20°C</p>
        </div>
        <div className='flex flex-col w-[75px] bg-[#cee3ea] rounded-[25px] justify-around items-center'>
          <p>Mon</p>
          <img src={icon} className='h-16 drop-shadow-md' />
          <p>20°C</p>
        </div>
        <div className='flex flex-col w-[75px] bg-[#cee3ea] rounded-[25px] justify-around items-center'>
          <p>Mon</p>
          <img src={icon} className='h-16 drop-shadow-md' />
          <p>20°C</p>
        </div>
        <div className='flex flex-col w-[75px] bg-[#cee3ea] rounded-[25px] justify-around items-center'>
          <p>Mon</p>
          <img src={icon} className='h-16 drop-shadow-md' />
          <p>20°C</p>
        </div>
        <div className='flex flex-col w-[75px] bg-[#cee3ea] rounded-[25px] justify-around items-center'>
          <p>Mon</p>
          <img src={icon} className='h-16 drop-shadow-md' />
          <p>20°C</p>
        </div>
        <div className='flex flex-col w-[75px] bg-[#cee3ea] rounded-[25px] justify-around items-center'>
          <p>Mon</p>
          <img src={icon} className='h-16 drop-shadow-md' />
          <p>20°C</p>
        </div>
        <div className='flex flex-col w-[75px] bg-[#cee3ea] rounded-[25px] justify-around items-center'>
          <p>Mon</p>
          <img src={icon} className='h-16 drop-shadow-md' />
          <p>20°C</p>
        </div>
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
