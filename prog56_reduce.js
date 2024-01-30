a = [10,2,3,15,30,32,5]

//find the highest
highest = a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(highest);

//find the lowest
lowest = a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(lowest);

//find the sum of all numbers in the array
sum = a.reduce((num1,num2)=>num1+num2)
console.log(sum);
