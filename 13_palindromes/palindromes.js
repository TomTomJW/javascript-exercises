const palindromes = function (inputString) {
    let lowerCase = inputString.toLowerCase();
    let noSpaces = lowerCase.replaceAll(" ", "");
    let noPunctuation = noSpaces.replaceAll("!", "").replaceAll(".", "").replaceAll("?", "").replaceAll(",", "").replaceAll(":", "").replaceAll(";", "");
    for (let i = 0; i < noPunctuation.length; i++) {
        if (noPunctuation.charAt(i) != noPunctuation.charAt((noPunctuation.length - 1) - i)) {
            return false;
        }
    }
    return true;
};

console.log("testing");

// Do not edit below this line
module.exports = palindromes;