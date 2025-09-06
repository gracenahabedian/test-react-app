import moment from 'moment';

const APIkey = process.env.REACT_APP_API_KEY;

export const getCurrentData = async (location) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}`
  );
  const json = await res.json();
  return json;
};

export const getForecastData = async (location) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&aqi=yes`
  );
  const json = await res.json();
  return json;
};

export const getThreeDayForecast = async (location) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&aqi=yes&days=4`
  );
  const json = await res.json();
  const data = json.forecast.forecastday.map((f) => ({
    date: f.date,
    condition: f.day.condition.text,
    tempC: f.day.avgtemp_c,
    tempF: f.day.avgtemp_f,
  }));
  data.shift();
  return data;
};
