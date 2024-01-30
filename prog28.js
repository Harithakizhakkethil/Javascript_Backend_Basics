//pattern printing - nested loop - loop within another loop

//         # # # # 
//         # # # # 
//         # # # #
//         # # # # 


for(row=1;row<=4;row++){//1<=4 //2<=4 //3<=4 //4<=4
    str = ''
    for(col=1;col<=4;col++){//1<=4 //2<=4 //3<=4 //4<=4 //5!<=4
    str = str + ' #'//# //## //###  //####
    }
    console.log(str);// #### //#### //#### //####
}
  // 1 1 1 1
  // 2 2 2 2
  // 3 3 3 3
  // 4 4 4 4
console.log("-----------------");


  for(row=1;row<=4;row++){//1<=4 2<=4
    str = ''
    for(col=1;col<=4;col++){//1<=4 2<=4 3<=4 4<=4
        str = str +` ${row}`//1 //11 111 1111 2 22 222 2222 ........
    }
    console.log(str);//1111 2222 3333 4444
  }