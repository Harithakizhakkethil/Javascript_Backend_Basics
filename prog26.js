// write a pgm to check whether a given number is prime or not
//prime numbers are those numbers which has only two factors - 1 and the number itself
// first method - better method

var num = 5
isPrime = true
for(i=2;i<num;i++)//2<5 //3<5 //4<5 //5<5
{
    if(num%i==0){ //5%2=!0 //5%3=!0 //5%4=!0
    isPrime = false
    break
    }
}
console.log(isPrime?`${num} is prime`:`${num} is not a prime`);

//another method
console.log('------------------');
var num = 6
count = 0
for(i=0;i<=num;i++)
{
    if(num%i==0){ 
    count++
    
    }
}
console.log(count>2?`${num} is not prime`:`${num} is prime`);
