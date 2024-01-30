
//write a program to print the given number is palindrome or not

var num = 122
var temp = num
var remainder = 0 
reverse = 0
console.log(`The given number is ${num}`);
while(num>0) 
{
   remainder = num % 10 
   reverse = (reverse*10) + remainder 
   num = parseInt(num/10) 

}
if(temp==reverse)
{
console.log('The given number is palindrome');
}
else{
    console.log('The given number is not palindrome');
}
