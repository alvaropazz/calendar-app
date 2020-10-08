import React from 'react';

const WeatherCardComponent = ({
  date, city, description, temp, tempMin, tempMax,
}) => {
  const desc = `${description.charAt(0).toUpperCase()}${description.slice(1)}`;
  return (
    <div className="topContainer">
      <div className="rightSide">
        <div className="city">{city}</div>
        <div className="date">{date}</div>
        <span className="description">{desc}</span>
        <span className="temp">{`${temp}°C`}</span>
        <div className="tempMinMax">{`${tempMax}°/${tempMin}°`}</div>
      </div>
    </div>
  );
};

export default WeatherCardComponent;
