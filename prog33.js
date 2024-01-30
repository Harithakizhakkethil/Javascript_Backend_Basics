//                      row+col
// 1              //1=> 1+1=2       //0=> 2+1=3
// 0 1                  2+2=4             3+2=5
// 1 0 1                3+1=4             4+1=5
// 0 1 0 1              3+3=6             4+3=7(odd nos)
//                      4+2=6
//                      4+4=8 (even numbers)

for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=row;col++){
       
        if((row+col)%2==0 ){
            str = str + " 1"
        }
        else{
            str = str + " 0"
        }
    }

    console.log(str);
}