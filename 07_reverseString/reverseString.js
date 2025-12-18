const reverseString = function(inputString) {
    let listOfChars = inputString.split('');
    let reversedListOfChars = listOfChars.reverse();
    let reversedString = reversedListOfChars.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
