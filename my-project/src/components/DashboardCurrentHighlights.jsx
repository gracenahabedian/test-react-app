import React from 'react';
import windIcon from '../icons/wind.png';
import uvIcon from '../icons/ultraviolet.png';
import humidityIcon from '../icons/humidity-2.png';
import visibilityIcon from '../icons/visibility.png';
import sunriseIcon from '../icons/sunrise-2.png';
import sunsetIcon from '../icons/sunset-2.png';
import airQualityIcon from '../icons/air-quality-1.png';
import rainIcon from '../icons/water-drops (1).png';

const DashboardCurrentHighlights = ({ weather }) => {
  const possibleAirQualityData = [
    { airQuality: 1, desc: 'Good' },
    { airQuality: 2, desc: 'Moderate' },
    { airQuality: 3, desc: 'Unhealthy for sensitive' },
    { airQuality: 4, desc: 'Unhealthy' },
    { airQuality: 5, desc: 'Very Unhealthy' },
    { airQuality: 6, desc: 'Hazardous' },
  ];

  const airQualityArray = possibleAirQualityData.filter(
    (airQualityData) => airQualityData.airQuality === weather?.airQuality
  );

  let airQualityDesc = '';
  if (airQualityArray.length > 0) {
    airQualityDesc = airQualityArray[0].desc;
  }

  return (
    <div className='h-1/2 flex flex-col max-md:h-full bg-gradient-to-r from-[#e7f1f4] to-[#92bbc6] rounded-[20px] drop-shadow-lg'>
      <div className='mt-4 ml-8'>
        <h1 className='text-2xl font-semibold'>Today's Highlight</h1>
      </div>
      <div className='flex flex-1 h-64 p-4 ml-4 mb-4'>
        <div className='flex flex-col w-[150px] mr-4 gap-4'>
          <div className='flex flex-col h-1/2 rounded-[20px] shadow-[inset_0px_5px_11px_0px_rgba(0,_0,_0,_0.1)]'>
            <div className='flex justify-center mt-2'>
              <img src={windIcon} className='h-4 mr-2 mt-1' />
              <p>Wind Status</p>
            </div>
            <div className='flex flex-row justify-end mt-2 mr-[18px]'>
              <p className='font-semibold text-2xl'>{weather?.wind}</p>
              <p className='text-sm mt-2 ml-2'>km / h</p>
            </div>
          </div>
          <div className='flex flex-col h-1/2 rounded-[20px] shadow-[inset_0px_5px_11px_0px_rgba(0,_0,_0,_0.1)]'>
            <div className='flex justify-center mt-2'>
              <img src={uvIcon} className='h-5 mr-2 mt-[2px]' />
              <p>UV Index</p>
            </div>
            <div className='flex flex-row justify-end mt-2 mr-7'>
              <p className='font-semibold text-2xl'>{weather?.uv}</p>
              <p className='text-sm mt-2 ml-2'>uv</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[150px] mr-4 gap-4'>
          <div className='flex flex-col h-1/2 rounded-[20px] shadow-[inset_0px_5px_11px_0px_rgba(0,_0,_0,_0.1)]'>
            <div className='flex justify-center mt-2'>
              <img src={humidityIcon} className='h-5 mr-2 mt-[2px]' />
              <p>Humidity</p>
            </div>
            <div className='flex flex-row justify-end mt-2 mr-7'>
              <p className='font-semibold text-2xl'>{weather?.humidity}</p>
              <p className='text-sm mt-2 ml-2'>%</p>
            </div>
          </div>
          <div className='flex flex-col h-1/2 rounded-[20px] shadow-[inset_0px_5px_11px_0px_rgba(0,_0,_0,_0.1)]'>
            <div className='flex justify-center mt-2'>
              <img src={visibilityIcon} className='h-5 mr-2 mt-[2px]' />
              <p>Visibility</p>
            </div>
            <div className='flex flex-row justify-end mt-2 mr-8'>
              <p className='font-semibold text-2xl'>{weather?.visibility}</p>
              <p className='text-sm mt-2 ml-2'>km</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[150px] mr-4 gap-4'>
          <div className='flex flex-col h-1/2 rounded-[20px] shadow-[inset_0px_5px_11px_0px_rgba(0,_0,_0,_0.1)]'>
            <div className='flex justify-center mt-2'>
              <img src={airQualityIcon} className='h-5 mr-2 mt-[2px]' />
              <p>Air Quality</p>
            </div>
            <div className='flex flex-row justify-end mt-2 mr-7'>
              <p className='font-semibold text-2xl'>{weather?.airQuality}</p>
              <p className='text-sm mt-2 ml-2'>{airQualityDesc}</p>
            </div>
          </div>
          <div className='flex flex-col h-1/2 rounded-[20px] shadow-[inset_0px_5px_11px_0px_rgba(0,_0,_0,_0.1)]'>
            <div className='flex justify-center mt-2'>
              <img src={rainIcon} className='h-5 mr-2 mt-[2px]' />
              <p>Rain Chance</p>
            </div>
            <div className='flex flex-row justify-end mt-2 mr-8'>
              <p className='font-semibold text-2xl'>{weather?.rainChance}</p>
              <p className='text-sm mt-2 ml-2'>%</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[280px] gap-4 mr-4'>
          <div className='flex flex-row h-1/2 rounded-[20px] shadow-[inset_0px_5px_11px_0px_rgba(0,_0,_0,_0.1)] px-7 py-4'>
            <div className='flex items-center'>
              <img src={sunriseIcon} className='h-16' />
            </div>
            <div className='flex flex-1 flex-col justify-center items-end'>
              <div className='flex flex-col justify-end'>
                <p className='text-sm mr-[42px]'>Sunrise</p>
                <p className='font-semibold text-2xl'>{weather?.sunrise}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row h-1/2 rounded-[20px] shadow-[inset_0px_5px_11px_0px_rgba(0,_0,_0,_0.1)]'>
            <div className='flex items-center ml-7'>
              <img src={sunsetIcon} className='h-16' />
            </div>
            <div className='flex flex-1 flex-col justify-center items-end mr-7'>
              <div className='flex flex-col justify-end'>
                <p className='text-sm mr-[42px]'>Sunset</p>
                <p className='font-semibold text-2xl'>{weather?.sunset}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCurrentHighlights;
