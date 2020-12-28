import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';
import { toFahrenheit, toCelsius } from '../helpers/conversionHelpers';

const CurrentConditions = () => {
    const [weather] = useContext(WeatherContext);

    //Temperature data from API is in Kelvin
    const convertTemp = (temp) => {
        return weather.displayUnits === 'f' ? toFahrenheit(temp) : toCelsius(temp) ;
    };
    
    if(weather.tempMax === null) return <span data-testid="no-weather"></span>;
    return (
        <div data-testid="current-conditions" className="current-conditions">
            <h2>Feels Like: {convertTemp(weather.feelsLike)}°</h2>
            <h3>High: {convertTemp(weather.tempMax)}° Low: {convertTemp(weather.tempMin)}°</h3>
        </div>
    );
}

export default CurrentConditions;