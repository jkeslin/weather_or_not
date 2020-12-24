import React, { useState, createContext } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
    const [weather, setWeather] = useState({
        tempMax: null,
        tempMin: null,
        feelsLike: null,
        displayUnits: '°F'
    });

    return (
        <WeatherContext.Provider value={[weather, setWeather]}>
            {props.children}
        </WeatherContext.Provider>
    );
}