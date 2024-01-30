// write a prgm to print 'fizz' when number is divisible by 3, 'buzz' when the number is divisible by 5 and 'fizzbuzz' when the number is divisible by 15

var num = 25
if(num%3==0)
    {
        console.log('fizz');
    }
    else if(num%5==0)
    {
        console.log('buzz');
    }
    else if(num%15==0)
    {
        console.log('fizzbuzz');
    }
    
    else{
        console.log('number is not divisible');
    }