const findTheOldest = function(people) {
    people.sort((a, b) => {
        if (!a.yearOfDeath) {
            aAge = 2023 - a.yearOfBirth;
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        
        if (!b.yearOfDeath) {
            bAge = 2023 - b.yearOfBirth;
        } else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        
        if (aAge > bAge) {
            return -1;
        } else {
            return 1;
        }
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
