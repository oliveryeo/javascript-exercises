const getTheTitles = function(a) {
    titles = []
    for (const obj of a){
        titles.push(obj.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
