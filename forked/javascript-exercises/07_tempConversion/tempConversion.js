const convertToCelsius = function (grados) {

  let gradosCelsius
  gradosCelsius = (grados - 32) * 5 / 9
  gradosCelsius = Math.round(gradosCelsius * 10) / 10
  return gradosCelsius

};

const convertToFahrenheit = function (grados) {
  let gradosFah
  gradosFah = (grados * 9 / 5) + 32
  gradosFah = Math.round(gradosFah * 10) / 10
  return gradosFah

};


// celsius => fahrenheit: (grados C * 9/5 + 32)
// fahrenheit => celsius: (grados F - 32) * (5/9)



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
