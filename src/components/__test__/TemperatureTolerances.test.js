import { render, screen, cleanup } from '@testing-library/react';
import TemperatureTolerances from './../TemperatureTolerances';
import { WeatherContext } from './../WeatherContext';

afterEach(cleanup);
  
test('renders TemperatureTolerances', () => {
    renderTemperatureTolerances();
    expect(screen.getByTestId('temperature-tolerances')).toBeInTheDocument();
});

test('displays instructions', () => {
    renderTemperatureTolerances();
    expect(screen.getByText('Set the temperatures at which you need the following items:')).toBeInTheDocument();
});

test('includes wardrobe needs', () => {
    renderTemperatureTolerances();
    expect(screen.getByText('Put On A')).toBeInTheDocument();
});

test('renders temperature slider for each garment', () => {
    renderTemperatureTolerances();
    expect(screen.queryAllByTestId('temperature-slider').length).toBe(4);
});

function renderTemperatureTolerances() {
    const weather = { feelsLike: 280, tempMax: 300, tempMin: 290, displayUnits: 'f' };
    return render(
        <WeatherContext.Provider value={[weather, () => true]}>
            <TemperatureTolerances />
        </WeatherContext.Provider>
    );
}
