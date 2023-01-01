const repeatString = function(stringInput, number) {
    // Declare final string variable
    // Note: Need to set variable to empty string, otherwise 'undefined' will be returned.
    let finalString = '';
    
    // Return error if number is negative
    if (number < 0) {
        return 'ERROR';
    }
    
    // Concat appropriate number of stringInput into finalString.
    for (let i = 0; i < number; i++) {
        finalString += stringInput;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
