const add = function (a, b) {
  return a + b

};

const subtract = function (a, b) {
  return a - b

};

const sum = function (sumArr) {
  // let totalSum = 0
  // sumArr.forEach(element => {
  //   totalSum += element
  //   return totalSum
  // });

  let sumArray = sumArr.reduce((accumulator, item) => accumulator + item, 0)
  return sumArray
};

const multiply = function (multArr) {
  let multArray = multArr.reduce((accumulator, item) => accumulator * item, 1)
  return multArray
};

const power = function (a, b) {
  let total = 1
  for (let i = 0; i < b; i++) {
    total *= a
  }
  return total
};

const factorial = function (a) {
  let total = 0
  let factArr = []
  for (let i = 1; i < a + 1; i++) {
    factArr.push(i)
  }
  let factMult = factArr.reduce((accumulator, item) => accumulator * item, 1)
  return factMult

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
