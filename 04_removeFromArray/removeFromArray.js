//https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2#:~:text=When%20you%20call%20a%20function,is%20no%20function%20parameter%20limit.
// "arguments" is a local javascript object variable → contains the values of the arguments passed to the function

//https://sentry.io/answers/remove-specific-item-from-array/#:~:text=If%20you%20want%20to%20remove,to%20remove%20the%20first%20element.
// Find the index of the item to be removed → splice it away

const removeFromArray = function() {
    // "arguments" is a local javascript object variable → contains the values of the arguments passed to the function
    let array = arguments[0];
    
    for (let i = 1; i < arguments.length; i++){
        
        // Only run the code if the elements exists in the array
        if (array.includes(arguments[i])) {
            // Get index of the element to remove
            let elementIndex = array.indexOf(arguments[i]);
            // Splice away the element
            array.splice(elementIndex, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
