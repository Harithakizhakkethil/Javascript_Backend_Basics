// write a pgm to check a given number is odd or even using function and ternary operator

function odd_even(num1){
    return num1%2==0?'even':'odd'
    }
console.log(`the given number is ${odd_even(10)}`);
console.log("-----------------------------");

// write a pgm to check a given number is positive or negative using function and ternary operator
 
function pos_neg(num){
    return num>0?'positive':num==0?'neither positive nor negative':'negative'
    }
console.log(`the given number is ${pos_neg(-10)}`);