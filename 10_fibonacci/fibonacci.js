const fibonacci = function(a) {
    if (a < 0) return "OOPS"; // Negative number error handling

    let start = 1;
    let end = 1;

    if (a == 1 || a == 2) {
        return 1;
    } else {
        for (i = 2; i < a; i++) { // My fibonacci algorithm starts from 3rd number onwards
            // Assign temp variable to end → Add end to start → Assign start to previous end value (held by temp variable)
            let tmp = end;
            end += start;
            start = tmp;
        }
    }
    
    return end;
};  

// Do not edit below this line
module.exports = fibonacci;
