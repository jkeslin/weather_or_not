export const toCelsius = (kelvin) => {
    return (kelvin - 273).toFixed();
};
  
export const toFahrenheit = (kelvin) => {
    return (1.8*(kelvin - 273) + 32).toFixed();
};