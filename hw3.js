//write a pgm to print all prime numbers between 1-50
//prime numbers factors - 1 and number itself
// a number will not have factors that are greater than that number


for(i=2;i<=50;i++){ //2<=50
    count = 0
    for(j=1;j<=i;j++){ //1<=2//2<=3//3<=3
        if(i%j==0){ //2%1==0 //2%2==0 //2%3!=0
            count++ //1//2//3
           
        }
    }
    if(count==2){
        console.log(i);
      
    }
}






//write a pgm to find the lcm(otherthan one) of a given number
var num3 = 12
var num4 = 28


for(i=2;i<=num3 && i<=num4;i++){
    if(num3%i==0 && num4%i==0){
        lcm = i
        break
    }
    
 }
 
 console.log(`least common  of ${num3} and ${num4} is ${lcm}`); 