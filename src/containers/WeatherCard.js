import React from 'react';
import { resolve } from 'react-resolver';
import moment from 'moment';
import fetchWeather from '../utils/fetchWeather';
import WeatherCardComponent from '../components/weatherCardComponent';

const getTimeOfTheDay = time => {
  if (time < 12) return 'morn';
  if (time >= 12 && time <= 17) return 'day';
  if (time > 17 && time <= 21) return 'eve';
  if (time > 21 && time <= 24) return 'night';
  return 'day';
};

const round = value => Math.round(value);
const A_WEEK_OLD = moment().clone().subtract(7, 'days').startOf('day');
const A_WEEK_FORWARD = moment().clone().add(7, 'days').startOf('day');
const isWithinAWeek = momentDate => momentDate.isAfter(A_WEEK_OLD) && momentDate.isBefore(A_WEEK_FORWARD);

const Weather = ({ day, weatherData }) => {
  if (!isWithinAWeek(day)) return <div>7 day Weather forcast not available</div>;
  const dayOftheWeek = day.day();
  const time = moment().format('HH');
  const timeOfDay = getTimeOfTheDay(time);
  const currentWeather = weatherData.list[dayOftheWeek];
  const temp = round(currentWeather.temp[timeOfDay]);
  const min = round(currentWeather.temp.min);
  const max = round(currentWeather.temp.max);

  return (
    <WeatherCardComponent
      city={weatherData.city.name}
      date={day.format('dddd MMMM DD YYYY')}
      description={currentWeather.weather[0].description}
      temp={temp}
      tempMin={min}
      tempMax={max}
    />
  );
};

export default resolve('weatherData', () => fetchWeather())(Weather);
