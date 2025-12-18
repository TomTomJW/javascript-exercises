const repeatString = function(string, input) {
    if (input < 0) {
        return 'ERROR'
    }
    let value = '';
    for (let i = 0; i < input; i++) {
        value = value + string;
    }
    return value;
};



// Do not edit below this line
module.exports = repeatString;
