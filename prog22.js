//pgm to find the factorial of a number
//eg.4! = 1*2*3*4
 var num = 4
 var i = 1
 var fact = 1
 while(i<=num){
    fact = fact * i
    i++
 }
console.log(`factorial = ${fact}`);
