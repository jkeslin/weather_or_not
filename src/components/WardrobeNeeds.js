import React, { useContext, useState, useEffect } from 'react';
import { WeatherContext } from './WeatherContext';
import { toFahrenheit, toCelsius } from '../helpers/conversionHelpers';

const WardrobeNeeds = ({ garments }) => {
    const [wardrobe, setWardrobe] = useState([]);
    const [weather] = useContext(WeatherContext);
    
    useEffect(() => {
        setWardrobe(garments.filter(garment => isGarmentNeeded(garment, weather)))},
        [weather, garments]
    );

    const isGarmentNeeded = (garment, weather) => {
        return weather.displayUnits === 'f' ?
            garment.tempNeeded >= toFahrenheit(weather.feelsLike) :
            garment.tempNeeded >= toCelsius(weather.feelsLike);
    }

    if (weather.feelsLike === null) return <h1>What Should I Wear Today?</h1>;

    if (wardrobe.length === 0) return <h1>It's Warm! Go Outside!</h1>;

    if (wardrobe.length === 1) return <h1>Put On A {<span>{wardrobe[0].name}!</span>}</h1>;

    return <h1>Put On A{
        wardrobe.map((item, index) => {
            const isLastItem = wardrobe.length - 1 === index;
            if(isLastItem) return <span key={item.id}> and {item.name}!</span>
            return <span key={item.id}> {item.name},</span>
        })}</h1>;
}

export default WardrobeNeeds;