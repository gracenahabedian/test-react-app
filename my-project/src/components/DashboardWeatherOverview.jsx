import React, { useState } from 'react';

const DashboardWeatherOverview = ({
  location_icon,
  location,
  day,
  date,
  currentTemp,
  high,
  low,
  condition,
  feelsLike,
  icon,
  tempUnit,
  setTempUnit,
}) => {
  return (
    <div className='flex h-1/2 max-md:h-full bg-gradient-to-r from-[white] to-[#D8E6EA] rounded-[20px] drop-shadow-lg'>
      <div className='LHS flex flex-col ml-12 mt-6 mb-14 flex-1'>
        <div className='flex-1'>
          <div className='flex drop-shadow-lg rounded-[20px] w-[155px] h-8 bg-gradient-to-r from-white to-[#98bac4]'>
            <img src={location_icon} className='h-5 mt-[6px] ml-3' />
            <div className='flex items-center ml-2'>
              <p>{location}</p>
            </div>
          </div>
        </div>

        <h1 className='text-4xl font-semibold'>{day}</h1>
        <p>{date}</p>
        <p className='text-5xl font-bold mt-10'>
          {tempUnit == 'C' ? currentTemp : 'XYZ'}°{tempUnit}
        </p>
        <p>
          High: {high} Low: {low}
        </p>
      </div>

      <div className='RHS flex flex-col justify-center p-6 w-4/12 items-center mr-5'>
        <div className='flex flex-col min-w-32'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row w-full gap-2'>
              <div className='bg-[#98bac4] drop-shadow-lg flex-1 rounded-[20px]'>
                <div
                  className='flex justify-center'
                  onClick={() => {
                    setTempUnit('F');
                  }}
                >
                  <p>°F</p>
                </div>
              </div>
              <div
                className={`bg-[#5e8390ee] drop-shadow-lg flex-1 rounded-[20px]`}
              >
                <div className='flex justify-center'>
                  <p
                    className='text-black text-opacity-50'
                    onClick={() => {
                      setTempUnit('C');
                    }}
                  >
                    °C
                  </p>
                </div>
              </div>
            </div>
            <img src={icon} className='h-8/12 drop-shadow-lg' />
          </div>

          <div className='flex flex-col mt-2 items-center'>
            <p className='text-2xl font-medium'>{condition}</p>
            <p className='text-[15px]'>Feels Like {feelsLike}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWeatherOverview;
