const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) { // Note: What is passed in is an array
	return a.reduce(function (sum, number) {
    return sum + number;
  }, 0)
};

const multiply = function(a) { // Note: What is passed in is an array
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    if (total === 0){ // If total is not assigned to first number, do so and continue loop
      total = a[i];
      continue;
    }
    // Keep Multiplying
    total *= a[i];
  }

  return total;
};

const power = function(a, b) {
	return a ** b;
};

function factorial(a) { // Using recursion
  if (a > 1) { // 5*4*3*2*1
    return a * factorial(a - 1);
  } else { // If a === 1, return 1 (last number of the mulitply chain)
    return 1;
  }
}
	

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
