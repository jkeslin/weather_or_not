import { render, screen, cleanup } from '@testing-library/react';
import UnitToggle from './../UnitToggle';
import { WeatherContext } from './../WeatherContext';

afterEach(cleanup);
  
test('renders UnitToggle', () => {
    renderUnitToggle();
    expect(screen.getByTestId('unit-toggle')).toBeInTheDocument();
});

test('button shows selected temperature units', () => {
    renderUnitToggle();
    expect(screen.getByText('°F')).toBeInTheDocument();
});

function renderUnitToggle() {
    const weather = { feelsLike: 280, tempMax: 300, tempMin: 290, displayUnits: 'f' };
    return render(
        <WeatherContext.Provider value={[weather, () => true]}>
            <UnitToggle />
        </WeatherContext.Provider>
    );
}
