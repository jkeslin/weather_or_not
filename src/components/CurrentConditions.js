import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const CurrentConditions = () => {
    const [value] = useContext(WeatherContext);

    const convertTemp = (temp) => {
        if(value.displayUnits === '°C') return (temp - 273).toFixed();
        return (1.8*(temp - 273) + 32).toFixed();
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