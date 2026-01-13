const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(inputArray) {
  return inputArray.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const multiply = function(inputArray) {
  return inputArray.reduce((acc, item) => {
    return acc * item;
  });
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(input) {
  if (input < 0) {
    return NaN;
  }
  if (input == 0) {
    return 1;
  }
  let fact = 1;
  for (let i = 1; i <= input; i++) {
    fact = fact * i;
  }
  return fact;
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
