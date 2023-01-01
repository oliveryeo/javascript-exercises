const convertToCelsius = function(fahrenheit) {
  converted = (fahrenheit - 32) * (5/9);
  
  // https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript
  // Rounding to 1 d.p.
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(degreeCelsius) {
  converted = (degreeCelsius * 9/5) + 32;
  return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
