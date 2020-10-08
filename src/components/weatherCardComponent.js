import React from 'react';

const WeatherCardComponent = ({
  date, city, description, temp, tempMin, tempMax,
}) => {
  const desc = `${description.charAt(0).toUpperCase()}${description.slice(1)}`;
  return (
    <div>
      <div>
        <div>{city}</div>
        <div>{date}</div>
        <p>{desc}</p>
        <p>{`${temp}°C`}</p>
        <div>{`${tempMax}°/${tempMin}°`}</div>
      </div>
    </div>
  );
};

export default WeatherCardComponent;
