var question = prompt("What would you like to do? Choose add, subtract, multiply or divide");
var num1 = parseInt(prompt("enter a number: "));
var num2 = parseInt(prompt("enter another number: "));

var add = function(num1, num2){
return num1 + num2
};

var subtract = function(num1, num2){
return num1 - num2
};

var multiply = function(num1, num2){
return num1 * num2
};

var divide = function(num1, num2){
return num1 / num2
};


if (question==="add") {
  document.write("Your total is " + add(num1 ,num2));
}  else if (question==="subtract") {
  document.write("Your total is " + subtract(num1 ,num2));
} else if (question==="multiply") {
  document.write("Your total is " + multiply(num1 ,num2));
} else if (question==="divide") {
  document.write("Your total is " + divide(num1 ,num2));
} else {
  document.write("You did not enter a valid answer");
}
