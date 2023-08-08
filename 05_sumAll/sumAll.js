const sumAll = function(x,y) {
//peusocode:
// Make a code to add all the numbers within a range. So if the two numbers are
// 1 and 5, I will take 5 and 1 and use them as the limits. I might want to make a loop
// where I make something a variable like j and add i's to it, and begin by having
// i = the first value until it equals the last value, each time adding it to j.
// at the end return the sum
let total = 0
if (x < y){
    for (i = x; i < y + 1; i++){
        total = total + i;
    } 
} else if (x > y){
    for (i = y; i < x + 1; i++){
     total = total + i;
    }
}
if (typeof x != "number"){
    return "ERROR"
} else if (typeof y != "number"){
    return "ERROR"
} else if (total >= 0){
    return total;
} else (total < 0)
    return "ERROR"
}

// Do not edit below this line
module.exports = sumAll;
