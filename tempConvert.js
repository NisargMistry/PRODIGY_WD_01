const readlineSync = require('readline-sync');

// Conversion Functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}

// Main Program
function main() {
  console.log("Temperature Conversion Tool");
  const units = ['Celsius', 'Fahrenheit', 'Kelvin'];
  
  const fromUnitIndex = readlineSync.keyInSelect(units, 'Select the unit to convert from:');
  if (fromUnitIndex === -1) {
    console.log("Operation cancelled.");
    return;
  }
  
  const toUnitIndex = readlineSync.keyInSelect(units, 'Select the unit to convert to:');
  if (toUnitIndex === -1) {
    console.log("Operation cancelled.");
    return;
  }

  const fromUnit = units[fromUnitIndex];
  const toUnit = units[toUnitIndex];
  
  if (fromUnit === toUnit) {
    console.log("The units to convert from and to must be different.");
    return;
  }
  
  const temperature = parseFloat(readlineSync.question(`Enter the temperature in ${fromUnit}: `));
  
  if (isNaN(temperature)) {
    console.log("Invalid temperature input. Please enter a numeric value.");
    return;
  }

  let convertedTemperature;
  if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
    convertedTemperature = celsiusToFahrenheit(temperature);
  } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
    convertedTemperature = celsiusToKelvin(temperature);
  } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
    convertedTemperature = fahrenheitToCelsius(temperature);
  } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
    convertedTemperature = fahrenheitToKelvin(temperature);
  } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
    convertedTemperature = kelvinToCelsius(temperature);
  } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
    convertedTemperature = kelvinToFahrenheit(temperature);
  }

  console.log(`${temperature} degrees ${fromUnit} is ${convertedTemperature.toFixed(2)} degrees ${toUnit}`);
}

// Run the main program
main();
