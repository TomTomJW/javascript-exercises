const findTheOldest = function(inputArray) {
    inputArray.forEach(item => {
        if (!item.hasOwnProperty('yearOfDeath')) {
            item.yearOfDeath = (new Date()).getFullYear();
        }
    });
    let ages = inputArray.map(item => item.yearOfDeath - item.yearOfBirth);
    let sortedAges = ages.sort(sortingFn);
    let oldestAge = sortedAges[0];
    return inputArray.find(item => (item.yearOfDeath - item.yearOfBirth) == oldestAge);
};

function sortingFn(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

// Do not edit below this line
module.exports = findTheOldest;
