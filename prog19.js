//pattern 2+22 3+33+333 4+44+444+4444

var i = 3
str = ""
sum = 0
f_sum = 0
count  = 1

    while(count<=i){ //1<=3 2<=3 3<=3
        str = str + i //""+3="3"// "3"+3="33" // "33"+3="333"
        sum = str * 1 //3 // 33 //333
        f_sum = f_sum + sum // 0+3=3 // 3+33=36 // 36+333=369
        count++ //2 //3 //4
        }

 console.log(f_sum);

 //another method using predefined method - Number()

 inp = 4
 j = 1
 str = ""
 add = 0
 while(j<=inp){
    str = str + inp
    add = add + Number(str) //string will be converted into number 
    j++
 }
 console.log(add);

