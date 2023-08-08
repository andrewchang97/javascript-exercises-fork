const convertToCelsius = function(fahrenheit) {
  let celsiusConverted = (fahrenheit - 32) * (5/9)
  if (celsiusConverted > Math.floor(celsiusConverted)){
    return Math.round(10*celsiusConverted)/10;
  } else {
    return celsiusConverted;
  }
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitConverted = (celsius*(9/5)+32);
  if (fahrenheitConverted > Math.floor(fahrenheitConverted)){
    return Math.round(10*fahrenheitConverted)/10;
  } else {
    return fahrenheitConverted;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
