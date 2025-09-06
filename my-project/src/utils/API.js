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
