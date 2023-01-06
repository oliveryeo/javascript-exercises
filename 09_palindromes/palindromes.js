const palindromes = function (string) {
    //// Remove punctuation and word breaks → Join everything together → Compare forward vs backwards.
    // Note that regex needs to be in between two slashes (a.k.a //). "\W" means any non-word character.
    // Make them lowercase to make it case-insensitive
    string = string.replace(/\W/g, "").toLowerCase();

    // Find a condition that if the length of the string divided by 2 is zero, stop when i = before the middle number. If not when i = the middle number, compare if its the same letter before stopping.
    let j = string.length - 1;

    if (string.length % 2 === 0) { // Even length
        for (let i = 0; i < string.length; i++) {
            if (i === string.length/2) { // Once it cross the mid point, means everything is equal
                return true;
            }
            if (string[i] !== string[j]) {
                return false;
            }

            j--; // Decrement j
        }
    } else { // Odd length
        for (let i = 0; i < string.length; i++) {
            if (i > string.length/2) { // Once it cross the mid point, means everything is equal
                return true;
            }
            if (string[i] !== string[j]) {
                return false;
            }

            j--; // Decrement j
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
