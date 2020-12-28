import './App.css';
import LocationForm from './components/LocationForm';
import CurrentConditions from './components/CurrentConditions';
import UnitToggle from './components/UnitToggle';
import TemperatureTolerances from './components/TemperatureTolerances';
import { WeatherProvider } from './components/WeatherContext';

function App() {
  return (
    <div className="App" data-testid="app">
      <main>
        <WeatherProvider>
          <UnitToggle />
          <TemperatureTolerances />
          <LocationForm />
          <CurrentConditions />
        </WeatherProvider>
      </main>
      <footer>
        Created by Jeff Keslin
      </footer>
    </div>
  );
}

export default App;
