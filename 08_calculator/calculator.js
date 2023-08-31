const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	return args.length > 0 ? args.reduce((acc , cur) => acc + cur) : 0;
};

const multiply = function(args) {
  return args.reduce((acc, cur) => acc * cur);
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
  let result = 1;
	for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
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
