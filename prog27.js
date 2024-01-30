//write a pgm to find the GCD/HCF of 2 numbers
// eg : 12 - 1 , 2 , 3 , 4 , 6 , 12
//      28 - 1 , 2 , 4 , 7 , 14 , 28
//common factors - 1 2 4   HCF - 4


var num1 = 12
var num2 = 28
gcd = 0
if(num1>num2){
for(i=1;i<=num1;i++){
    if(num1%i==0 && num2%i==0){
        gcd = i
    }
 }
}
else{
    for(i=1;i<=num1;i++){
        if(num1%i==0 && num2%i==0){
            gcd = i
        }
    }
}
console.log(`gcd of ${num1} and ${num2} is ${gcd}`);


//another method
var num3 = 12
var num4 = 28
gcd = 0
for(i=1;i<=num3 && i<=num4;i++){
    if(num1%i==0 && num2%i==0){
        gcd = i
    }
 }
 console.log(`gcd of ${num1} and ${num2} is ${gcd}`);

