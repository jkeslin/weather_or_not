import React, { useContext, useState, useEffect } from 'react';
import { WeatherContext } from './WeatherContext';
import { toFahrenheit, toCelsius } from '../helpers/conversionHelpers';

const WardrobeNeeds = (props) => {
    const [wardrobe, setWardrobe] = useState([]);
    const [weather] = useContext(WeatherContext);
    
    useEffect(() => {
        setWardrobe(props.garments.filter(garment => isGarmentNeeded(garment, weather)))},
        [weather, props.garments]
    );

    const isGarmentNeeded = (garment, weather) => {
        return weather.displayUnits === '°F' ?
            garment.value >= toFahrenheit(weather.feelsLike) :
            garment.value >= toCelsius(weather.feelsLike);
    }

    if(weather.feelsLike === null) {
        return <h1>What Shall We Wear Today?</h1>;
    }

    return <h1>Put On Your{wardrobe.map(item => <span key={item.id}> {item.name} </span>)}!</h1>;
}

export default WardrobeNeeds;