//write a pgm to find the second largest number and arrange the given three numbers in descending order.
var num1 = 10
var num2 = 4
var num3 = 8
if(num1>num2 && num1>num3 ){
    if(num2>num3){
    console.log(`${num2} is the second largest number`);
    console.log(`sorted in descending order ${num1} ${num2} ${num3}`);
    }
    else{
        console.log(`${num3} is the second largest number`);
        console.log(`sorted in descending order ${num1} ${num3} ${num2}`);
    }
}

else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`${num1} is the second largest number`);
        console.log(`sorted in descending order ${num2} ${num1} ${num3}`);
    }
    else{
        console.log(`${num3} is the second largest number`);
        console.log(`sorted in descending order ${num2} ${num3} ${num1}`);
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
    console.log(`${num1} is the second largest number`);
    console.log(`sorted in descending order ${num3} ${num1} ${num2}`);
    }

    else {
        console.log(`${num2} is the second largest number`);
        console.log(`sorted in descending order ${num3} ${num2} ${num1}`);
    }
}
else{
    console.log('all numbers are equal');
}