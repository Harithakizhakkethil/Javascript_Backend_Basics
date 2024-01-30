//write a pgm to check whether a given number is prime or not using function

function prime(num){
    count = 0
for(i=0;i<=num;i++)
{
    if(num%i==0){ 
    count++
    
    }
}
console.log(count>2?`${num} is not prime`:`${num} is prime`);

}
prime(3)






