import './App.css';
import LocationForm from './components/LocationForm';
import CurrentConditions from './components/CurrentConditions';
import UnitToggle from './components/UnitToggle';
import { WeatherProvider } from './components/WeatherContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Or Not</h1>
      </header>
      <main>
        <WeatherProvider>
          <UnitToggle />
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
