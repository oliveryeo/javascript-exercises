const leapYears = function(year) {
    // Leap years must be divisible by 4
    if (year % 4 === 0) {
        // Leap years can be divisible by 400 && 100 at the same time.
        if ((year % 400 === 0) && (year % 100 === 0)) {
            return true;
        // Leap years cannot be divisible by 100 alone.
        } else if (year % 100 === 0) {
            return false;
        // The rest are leap years as they are divisble by 4.
        } else {
            return true;
        }
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
