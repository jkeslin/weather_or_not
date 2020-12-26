import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { WeatherContext } from './WeatherContext';
import Grid from '@material-ui/core/Grid';
import axiosInstance from '../helpers/axios';

const LocationForm = () => {
    const [city, setCity] = useState('');
    const [, setWeather] = useContext(WeatherContext);

    const handleChange = event => {
        setCity(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        axiosInstance
            .get(`/weather?q=${city}`)
            .then(res => {
                const { temp_max, temp_min, feels_like } = res.data.main;
                setWeather(previous => ({
                    ...previous,
                    tempMax: temp_max,
                    tempMin: temp_min,
                    feelsLike: feels_like
                }));
            })
            .catch(error => {
                console.log(error);
                console.log('OH NO');
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction="column" alignItems="center" spacing={5}>
                <Grid item xs={12}>
                    <TextField label="US City Name" variant="outlined" value={city} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" color="primary" variant="contained">Get Current Conditions</Button>
                </Grid>   
            </Grid>
        </form>
    );
}

export default LocationForm;