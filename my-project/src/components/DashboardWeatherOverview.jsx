import React, { useState } from 'react';
import locationIcon from '../icons/pin.png';
import icon from '../icons/Rainy.png';
import { mapConditionToIcon } from '../utils/mapConditionToIcon';
import { timeBetween } from '../utils/date';
const moment = require('moment');

const DashboardWeatherOverview = ({
  location,
  weather,
  tempUnit,
  setTempUnit,
}) => {
  return (
    <div className='flex h-1/2 max-md:h-full bg-gradient-to-r from-[white] to-[#D8E6EA] rounded-[20px] drop-shadow-lg'>
      <div className='LHS flex flex-col ml-12 mt-6 mb-14 flex-1'>
        <div className='flex-1'>
          <div className='flex drop-shadow-lg rounded-[20px] w-[155px] h-8 bg-gradient-to-r from-white to-[#98bac4]'>
            <img src={locationIcon} className='h-5 mt-[6px] ml-3' />
            <div className='flex items-center ml-2'>
              <p>{location}</p>
            </div>
          </div>
        </div>

        <h1 className='text-4xl font-semibold'>{weather?.day}</h1>
        <p>{weather?.date}</p>
        <p className='text-5xl font-bold mt-10'>
          {tempUnit === 'C' ? weather?.currentTempC : weather?.currentTempF}°
          {tempUnit}
        </p>
        <p>
          High: {tempUnit === 'C' ? weather?.highC : weather?.highF} Low:{' '}
          {tempUnit === 'C' ? weather?.lowC : weather?.lowF}
        </p>
      </div>

      <div className='RHS flex flex-col justify-center p-6 w-4/12 items-center mr-5'>
        <div className='flex flex-col min-w-32'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row w-full gap-2'>
              <div
                className={`drop-shadow-lg flex-1 rounded-[20px] ${
                  tempUnit === 'F'
                    ? 'bg-[#5e8390ee]'
                    : 'bg-[#98bac4] hover:bg-[#83aab6]'
                }`}
              >
                <div
                  className='flex justify-center'
                  onClick={() => {
                    setTempUnit('F');
                  }}
                >
                  <p
                    className={`${
                      tempUnit === 'F'
                        ? 'text-black text-opacity-50'
                        : 'text-black'
                    }`}
                  >
                    °F
                  </p>
                </div>
              </div>
              <div
                className={`drop-shadow-lg flex-1 rounded-[20px] ${
                  tempUnit === 'C'
                    ? 'bg-[#5e8390ee]'
                    : 'bg-[#98bac4] hover:bg-[#83aab6]'
                }`}
              >
                <div
                  className='flex justify-center'
                  onClick={() => {
                    setTempUnit('C');
                  }}
                >
                  <p
                    className={`${
                      tempUnit === 'C'
                        ? 'text-black text-opacity-50'
                        : 'text-black'
                    }`}
                  >
                    °C
                  </p>
                </div>
              </div>
            </div>
            <img
              src={mapConditionToIcon(
                weather?.condition,
                !timeBetween(
                  moment(weather?.time, 'YYYY-MM-DD HH:mm A'),
                  moment(weather?.sunriseTemp, 'HH:mm A'),
                  moment(weather?.sunsetTemp, 'HH:mm A')
                )
              )}
              className='h-8/12 drop-shadow-lg'
            />
          </div>

          <div className='flex flex-col mt-2 items-center'>
            <p className='text-2xl font-medium'>{weather?.condition}</p>
            <p className='text-[15px]'>
              Feels Like{' '}
              {tempUnit === 'C' ? weather?.feelsLikeC : weather?.feelsLikeF}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWeatherOverview;
