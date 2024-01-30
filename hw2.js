//write a pgm to print the given three digit number is armstrong or not
//153 = 1^3 + 5^3 + 3^3 = 1+125+27 = 153

 var num = 153
 var temp = num
 var sum = 0 
 var remainder = 0
 while(num>0) //153>0 // 15>0 //1>0
 {
    remainder = num % 10 //153%10=3 //15%10=5 //1%10=1
    sum = sum + remainder * remainder * remainder //0+3*3*3=27 //27+5*5*5=152 //152+1*1*1=153
    num = parseInt(num/10) // 153/10=15.3=>15 //15/10=1.5=>1 1/10=0
 } 
 if(sum == temp){ //153==153
    console.log(`${temp} is an Armstrong number`);
 }
 else{
    console.log(`${temp} is not an Armstrong number`);
 }