// write a pgm to print largest number among the two given numbers
 var num1 = 1
 var num2 = 1
 if(num1>num2)
 {
    console.log(`${num1} is greater than ${num2}`);
 }
 else if(num1<num2)
{
    console.log(`${num2} is greater than ${num1}`);
 }
 else{
    console.log(`${num1} and ${num2} are equal`);
 }

// write a pgm to print largest number among three given numbers

var num1 = 1
var num2 = 2
var num3 = 2

if(num1>num2 && num1>num3)
{
   console.log(`${num1} is greater`);
}
else if(num2>num1 && num2>num3)
{
   console.log(`${num2} is greater`);
}
else if(num3>num2 && num3>num1){
   console.log(`${num3} is greater`);
   
}
else if(num1===num2 && num1>num3){
   console.log(`${num1} and ${num2}  are greater numbers`); 
}
else if(num1===num3 && num1>num2){
   console.log(`${num1} and ${num3}  are greater numbers`); 
}
else if(num2===num3 && num2>num1){
   console.log(`${num3} and ${num2}  are greater numbers`); 
}

else{
   console.log(`All numbers are equal`);
}

 


