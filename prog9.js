//write a pgm to check whether a person is eligible to vote

var age = 20
if(age>=18)
{
    console.log('eligible to vote');
}
else {
    console.log('not eligible to vote');
}

//using ternary operator
console.log(age>=18?'eligible to vote':'not eligible to vote');


// write a pgm to check whether the given number is positive or negative

var number = -10
 if (number>0){

        console.log('number is positive');
    }
   else if(number==0){

     console.log('number is neither positive nor negative'); 
        }
    else{
        console.log('number is negative');
    }

 //using ternary operator
 var num = -10
 console.log(num>0?'number is positive':num==0?'number is neither positive nor negative':'number is negative'); 
