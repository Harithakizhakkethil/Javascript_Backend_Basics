// write a pgm to display a number in its reverse order
// tips : 123%10 = 3 (remainder will be the last number)
//        123/10 = 12.3 (quotient will be first two numbers)
var num = 123
var remainder = 0 
reverse = 0
console.log(`The given number is ${num}`);
while(num>0) //123>0 //12>0
{
   remainder = num % 10 // 123%10=3 
   reverse = (reverse*10) + remainder   //(0*10)+3=3  
   num = parseInt(num/10) // 123/10=12.3=>12  

}
console.log(`reverse of the given number is ${reverse}`);