import { render, screen, cleanup, fireEvent, getByDisplayValue } from '@testing-library/react';
import LocationForm from './../LocationForm';
import { WeatherContext } from './../WeatherContext';

afterEach(cleanup);
  
test('renders LocationForm', () => {
    renderLocationForm({tempMax: null});
    expect(screen.getByTestId('location-form')).toBeInTheDocument();
});

test('allows user to input city name', () => {
    renderLocationForm({tempMax: null});
    const input = screen.getByLabelText('US City Name');
    fireEvent.change(input, {target: {value: 'Chicago'}});
    expect(input.value).toBe('Chicago');
    
});

function renderLocationForm(weather) {
    return render(
        <WeatherContext.Provider value={[weather, () => true]}>
            <LocationForm />
        </WeatherContext.Provider>
    );
}
