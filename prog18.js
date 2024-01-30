//input =   2   3   4
//output = 24  369  4936

//pattern 2*12  3*123  4*1234
//pattern 2+22 3+33+333 4+44+444+4444

var input = 3
var i = 1
str = ""
pro = 1
while(i<=input)//1 //2<=3  //3<=3
{
    str = str + i// ""+1="1" // "1"+2="12" //"12"+3="123"
    i++//2//3 //4
}
/* console.log(str); */
pro = input * str
console.log(pro);


 

