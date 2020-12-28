import { toFahrenheit, toCelsius } from '../conversionHelpers';

test('temperature is correct converted from kelvin to Celsius', () => {
    expect(toCelsius(280)).toBe('7');
});

test('temperature is correct converted from kelvin to Fahrenheit', () => {
    expect(toFahrenheit(280)).toBe('45');
});

test('temperature is converted to the nearest whole degree', () => {
    expect(toFahrenheit(280.88)).toBe('46');
    expect(toCelsius(280.01)).toBe('7');
});