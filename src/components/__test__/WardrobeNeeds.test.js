import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import WardrobeNeeds from './../WardrobeNeeds';
import { WeatherContext } from './../WeatherContext';

afterEach(cleanup);
  
test('displays intro text when no weather conditions are given', () => {
    renderWardrobeNeeds({feelsLike: null});
    expect(screen.getByText('What Should I Wear Today?')).toBeInTheDocument();
});

test('displays message when no garments are needed', () => {
    renderWardrobeNeeds({ feelsLike: 310, tempMax: 310, tempMin: 290, displayUnits: 'f' });
    expect(screen.getByText('It\'s Warm! Go Outside!')).toBeInTheDocument();
});

test('displays message when garments are needed', () => {
    renderWardrobeNeeds({ feelsLike: 250, tempMax: 250, tempMin: 250, displayUnits: 'f' });
    expect(screen.getByText(/Jacket/)).toBeInTheDocument();
    expect(screen.getByText(/Hat/)).toBeInTheDocument();
    expect(screen.getByText(/Scarf/)).toBeInTheDocument();
    expect(screen.getByText(/Pair of Gloves/)).toBeInTheDocument();
});

function renderWardrobeNeeds(weather) {
    const garments = [
        { id: 1, name: 'Jacket', tempNeeded: 60 },
        { id: 2, name: 'Hat', tempNeeded: 50 },
        { id: 3, name: 'Scarf', tempNeeded: 30 },
        { id: 4, name: 'Pair of Gloves', tempNeeded: 40 }
    ];

    return render(
        <WeatherContext.Provider value={[weather, () => true]}>
            <WardrobeNeeds garments={garments}/>
        </WeatherContext.Provider>
    );
}
