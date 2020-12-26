import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';
import { toFahrenheit, toCelsius } from '../helpers/conversionHelpers';

const CurrentConditions = () => {
    const [value] = useContext(WeatherContext);

    const convertTemp = (temp) => {
        return value.displayUnits === '°C' ? toCelsius(temp) : toFahrenheit(temp);
    };
    
    if(value.tempMax === null) return <span></span>;
    return (
        <div>
            <h3>Feels Like: {convertTemp(value.feelsLike)}°</h3>
            <h3>High: {convertTemp(value.tempMax)}°</h3>
            <h3>Low: {convertTemp(value.tempMin)}°</h3>
        </div>
    );
}

export default CurrentConditions;