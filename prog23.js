// write a pgm to display numbers whose exponential is in the range of 8 to 36
// you can input the power / exponential
//power=2 1=1 2=4 3=9 4=16 5=25 6=36 7=49 // 3 4 5 6
//power=3 1=1 2=8 3=27 4=64 //2,3

var power = 2
var num =1
while(num<=36){ //1<=36 //2<=36 //3<=36 //4<=36
    if(8<=(num**power)&& (num**power)<=36){  //8<=9<=36 //8<=16<=36
        console.log(num);//3 //4
    }
    num++//2 //3 //4
}