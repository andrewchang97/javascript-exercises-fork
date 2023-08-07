const repeatString = function(string,number) {
    let words = "";
    if (number > 0) {
    for (i = 0; i < number; i++) {
        words += string;
    }
    return words;
    } else if (number < 0) {
        return 'ERROR';
    } else {
        return "";
    }
};


// Do not edit below this line
module.exports = repeatString;
