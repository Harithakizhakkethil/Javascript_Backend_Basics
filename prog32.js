//          *
//        *   *
//      *       *
//    * * * * * * *

for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=7;col++){
        if(row+col==5 || col-row==3 || row==4){
            str = str +"*"
        }
        else{
            str = str + " "
        }
    }
    console.log(str);
}


// * * * * *
// *       *
// *       *
// *       *
// *       *
// *       *
// * * * * *

console.log("-----------------");
for(row=1;row<=7;row++){
    str  =""
    for(col=1;col<=5;col++){
        if(row==1||row==7||col==1||col==5){
            str = str +" *"
        }
        else{
            str = str + "  "
        } 
        
    }
    console.log(str);
}