const reverseString = function(x) {
    let split = x.split("");
    let reverseArray = split.reverse();
    let join = reverseArray.join("");
    return join;
};

// Do not edit below this line
module.exports = reverseString;
