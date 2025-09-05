import React from 'react';

import rainy from '../icons/Rainy.png';
import clearNight from '../icons/clear-night.png';
import overcast from '../icons/overcast.png';
import partlyCloudlyNight from '../icons/partly-cloudy-night.png';
import partlyCloudy from '../icons/PartlyCloudy.png';
import rainThunder from '../icons/RainThunder.png';
import snowy from '../icons/Snowy.png';
import sunny from '../icons/Sunny.png';
import cloudy from '../icons/cloudy.png';
import misty from '../icons/fog.png';

export const mapConditionToIcon = (condition, sunrise, sunset) => {
  if (condition === 'Sunny') {
    return sunny;
  } else if (condition === 'Clear ') {
    return clearNight;
  } else if (condition === 'Partly Cloudy ') {
    return partlyCloudy;
  } else if (condition === 'Cloudy ') {
    return cloudy;
  } else if (condition === 'Overcast ') {
    return overcast;
  } else if (
    condition === 'Thundery outbreaks possible ' ||
    condition === 'Patchy light rain with thunder ' ||
    condition === 'Moderate or heavy rain with thunder ' ||
    condition === 'Patchy light snow with thunder ' ||
    condition === 'Moderate or heavy snow with thunder ' ||
    condition.includes('thunder')
  ) {
    return rainThunder;
  } else if (
    condition === 'Mist ' ||
    condition === 'Fog ' ||
    condition === 'Freezing fog ' ||
    condition.includes('fog') ||
    condition.includes('Mist') ||
    condition.includes('Fog')
  ) {
    return misty;
  } else if (
    condition === 'Patchy rain possible ' ||
    condition === 'Patchy freezing drizzle possible ' ||
    condition === 'Patchy light drizzle ' ||
    condition === 'Light drizzle ' ||
    condition === 'Freezing drizzle ' ||
    condition === 'Heavy freezing drizzle ' ||
    condition === 'Patchy light rain ' ||
    condition === 'Light rain ' ||
    condition === 'Moderate rain at times ' ||
    condition === 'Moderate rain ' ||
    condition === 'Heavy rain at times ' ||
    condition === 'Heavy rain ' ||
    condition === 'Light freezing rain ' ||
    condition === 'Moderate or heavy freezing rain ' ||
    condition === 'Light rain shower ' ||
    condition === 'Moderate or heavy rain shower ' ||
    condition === 'Torrential rain shower ' ||
    condition.includes('rain') ||
    condition.includes('drizzle')
  ) {
    return rainy;
  } else if (
    condition === 'Patchy snow possible ' ||
    condition === 'Patchy sleet possible ' ||
    condition === 'Blowing snow ' ||
    condition === 'Blizzard ' ||
    condition === 'Light sleet ' ||
    condition === 'Moderate or heavy sleet ' ||
    condition === 'Patchy light snow ' ||
    condition === 'Light snow ' ||
    condition === 'Patchy moderate snow ' ||
    condition === 'Moderate snow ' ||
    condition === 'Patchy heavy snow ' ||
    condition === 'Heavy snow ' ||
    condition === 'Ice pellets ' ||
    condition === 'Light sleet showers ' ||
    condition === 'Moderate or heavy sleet showers ' ||
    condition === 'Light snow showers ' ||
    condition === 'Moderate or heavy snow showers ' ||
    condition === 'Light showers of ice pellets ' ||
    condition === 'Moderate or heavy showers of ice pellets ' ||
    condition.includes('snow') ||
    condition.includes('sleet') ||
    condition.includes('Blizzard') ||
    condition.includes('pellets')
  ) {
    return snowy;
  }
};
