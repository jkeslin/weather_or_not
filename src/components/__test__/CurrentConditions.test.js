import { render, screen, cleanup } from '@testing-library/react';
import CurrentConditions from './../CurrentConditions';
import { WeatherContext } from './../WeatherContext';
import { toFahrenheit, toCelsius } from '../../helpers/conversionHelpers';

afterEach(cleanup);
  
test('renders empty span when no weather conditions are provided', () => {
    renderCurrentConditions({tempMax: null});
    expect(screen.getByTestId('no-weather')).toBeInTheDocument();
});

test('renders current weather conditions', () => {
    const weather = { feelsLike: 280, tempMax: 300, tempMin: 290, displayUnits: 'f' };
    renderCurrentConditions(weather);
    expect(screen.getByTestId('current-conditions')).toBeInTheDocument();
});

test('temperatures are converted from kelvin to Fahrenheit', () => {
    const weather = { feelsLike: 280, tempMax: 300, tempMin: 290, displayUnits: 'f' };
    renderCurrentConditions(weather);
    expect(screen.getByText(`Feels Like: ${toFahrenheit(weather.feelsLike)}°`)).toBeInTheDocument();
});

test('temperatures are converted from kelvin to Celsius', () => {
    const weather = { feelsLike: 280, tempMax: 300, tempMin: 290, displayUnits: 'c' };
    renderCurrentConditions(weather);
    expect(screen.getByText(`Feels Like: ${toCelsius(weather.feelsLike)}°`)).toBeInTheDocument();
});

function renderCurrentConditions(weather) {
    return render(
        <WeatherContext.Provider value={[weather, () => true]}>
            <CurrentConditions />
        </WeatherContext.Provider>
    );
}
