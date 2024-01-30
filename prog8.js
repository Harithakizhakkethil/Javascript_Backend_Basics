//write a program to swap b/w two numbers.
//eg: num1 =10 num2 =20   output num1 =20 num2 =10


var num1 = 10
var num2 = 20


var temp = num1
var num1 = num2
var num2 = temp
console.log(`values after swapping num1 = ${num1} and num2= ${num2}`);

//write a program to swap  two numbers. without using additional variable
//eg: num1 =10 num2 =20   output num1 =20 num2 =10

var num1 = 10
var num2 = 20
console.log(`values before swapping num1 = ${num1} and num2= ${num2}`);
num1 = num1 + num2
num2 = num1 - num2
num1 = num1 - num2
console.log(`values after swapping num1 = ${num1} and num2= ${num2}`);


