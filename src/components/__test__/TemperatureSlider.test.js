import { render, screen, cleanup } from '@testing-library/react';
import TemperatureSlider from './../TemperatureSlider';

const handleTemperatureChange = () => true;

afterEach(cleanup);
  
test('renders TemperatureSlider', () => {
    renderTemperatureSlider({ name: 'Jacket', tempNeeded: 60 });
    expect(screen.getByTestId('temperature-slider')).toBeInTheDocument();
});

test('displays garment name', () => {
    renderTemperatureSlider({ name: 'Jacket', tempNeeded: 60 });
    expect(screen.getByText('Jacket')).toBeInTheDocument();
});

test('value of slider is the temperature at which the garment is needed', () => {
    renderTemperatureSlider({ name: 'Jacket', tempNeeded: 60 });
    expect(screen.getByText('60')).toBeInTheDocument();
});

function renderTemperatureSlider(garment) {
    return render(
        <TemperatureSlider
            garment={garment}
            onTemperatureChange={handleTemperatureChange}
        />
    );
}
