//          *
//        *   *
//      *   *   *
//    *    *   *   *

for(row=1;row<=4;row++){//1<=4 //2<=4 //3<=4
    str = '' //''
    for(space=4;space>row;space--){//4>1//3>1//2>1>//1!>1 /// 4>2//3>2//2!>2 //4>3//3!>3  ///4>4
        str = str+ " "//""//"" ""//"" "" ""// /// ""//"" ""/// 
    } 
    for(col=1;col<=row;col++){//1<=1 //2!<=1 ///1<=2//2<=2//3!<=2 /// 1<=3//2<=3//3<=3//4!<=3 ///1<=4//2<=4//3<=4//4<=4//5!<=4
        str = str + ' *'//""""""*//""""* /// 
    }
 console.log(str);   
}


//* * * *
//* * *
//* * 
//* 
console.log('----------------');
for(row=1;row<=4;row++){
    str=''
    for(col=row;col<=4;col++){
        str = str + " *"
    }
    console.log(str);
}



