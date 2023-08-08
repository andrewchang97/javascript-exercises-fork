const palindromes = function (word) {
        const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedWord = cleanedWord.split('').reverse().join('');
        return cleanedWord === reversedWord;
    }

// Do not edit below this line
module.exports = palindromes;
