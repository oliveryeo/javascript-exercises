const sumAll = function(numberOne, numberTwo) {
    // Error checking for negative numbers
    if (numberOne < 0 || numberTwo < 0) {
        return 'ERROR';
    }

    // Error checking for non-number arguments (string and array)
    if (typeof numberOne != "number" || typeof numberTwo != "number") {
        return 'ERROR';
    }

    // Work with smaller number as first argument.
    if (numberOne < numberTwo) {
        let sum = numberOne;
        // Starting number is numberOne + 1, then add all the way to numberTwo.
        for (let i = numberOne + 1; i <= numberTwo; i++) {
            sum += i;
        }
        return sum;
    }

    // Work with larger number first argument. (essentially reversed)
    if (numberOne > numberTwo) {
        let sum = numberTwo;
        // Starting number is numberOne + 1, then add all the way to numberTwo.
        for (let i = numberTwo + 1; i <= numberOne; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
