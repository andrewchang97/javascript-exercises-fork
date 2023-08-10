const fibonacci = function(place) {
    let initial = 0;
    let add = 1;
    let sum;
    let number = parseInt(place)
for (i = 0; i < (number - 1); i++) {
    sum = initial + add;
    initial = add;
    add = sum;
} if (sum > 0 && number > 0){
    return sum;
} else if (sum = 1 && number > 0) {
    return 1
} else {
    return "OOPS"
}
};

// Do not edit below this line
module.exports = fibonacci;
