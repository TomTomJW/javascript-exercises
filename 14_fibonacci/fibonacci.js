const fibonacci = function(input) {
    if ((Math.round(input) != input) || input < 0) {
      return "OOPS";
    }
    let fibonacciSequence = [];
    fibonacciSequence.push(0);
    fibonacciSequence.push(1);
    for (let i = 2; i < (input + 1); i++) {
      let sum = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(sum);
    };
    return fibonacciSequence[input];
};

// Do not edit below this line
module.exports = fibonacci;
