const moment = require('moment');

export const convertTimeToDay = (time) => {
  const timeObject = moment(time, 'YYYY-MM-DD HH:mm');
  return timeObject.format('dddd');
};

export const convertTimeToDate = (time) => {
  const timeObject = moment(time, 'YYYY-MM-DD HH:mm');
  return timeObject.format('DD MMMM YYYY');
};

export const reformatTime = (time) => {
  const timeObject = moment(time, 'HH:mm A');
  return timeObject.format('LT');
};

export const convertDatetoTime = (date) => {
  const timeObject = moment(date, 'YYYY-MM-DD HH:mm');
  return timeObject.format('LT');
};

export const timeGreaterThan = (time1, time2) => {};

export const timeLessThan = () => {};
