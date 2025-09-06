const moment = require('moment');

export const convertTimeToDay = (time) => {
  const timeObject = moment(time, 'YYYY-MM-DD HH:mm');
  return timeObject.format('dddd');
};

export const convertDateToDay = (date) => {
  const timeObject = moment(date, 'YYYY-MM-DD');
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

export const timeBetween = (time1, time2, time3) => {
  return time1.isBetween(time2, time3);
};
