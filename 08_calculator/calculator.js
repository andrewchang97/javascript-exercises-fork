const add = function(x,y) {
	let answerAdd = x + y;
  return answerAdd;
};

const subtract = function(x,y) {
	let answerSubt = x - y;
  return answerSubt;
};

const sum = function(sumArray) {
  let answerSum = 0
  if (sumArray.length > 0){
  for (let i=0; i<sumArray.length;i++){
    answerSum += sumArray[i];
  }
  return answerSum;
} else {
  return 0;
}
};

const multiply = function(mulArray) {
  let multStart = 1;
  for (i = 0; i < mulArray.length; i++)
    multStart = multStart * mulArray[i];
  return multStart
};

const power = function(a,b) {
	let functionPower = Math.pow(a,b)
  return functionPower;
};

const factorial = function(factorialNum) {
	if (factorialNum < 0){
    return "ERROR"
  } else if (factorialNum === 0){
    return 1;
  } else if (factorialNum > 0){
    for (i = factorialNum - 1; i >= 1; i--){
    factorialNum = factorialNum * i
    }
    return factorialNum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
