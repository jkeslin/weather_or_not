import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const WardrobeNeeds = (props) => {
    const [weather] = useContext(WeatherContext);
    console.log(weather);

    if(weather.feelsLike === null) {
        return <h1>What Shall We Wear Today?</h1>;
    }

    return <h1>Put On Your {props.garments[0].name}!</h1>;
}

export default WardrobeNeeds;