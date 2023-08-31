const palindromes = function (string) {
    let cleanString = Array.from(string).filter((val) => val !== '.' && val !== '!' && val !== ',' && val !== ' ');
    let cleanStringCopy = cleanString.slice();

    return cleanString.reverse().join('').toLowerCase() === cleanStringCopy.join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
