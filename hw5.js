//         *                                row 1 => 2*row-1 = 2*1-1 =1
//       * * *                              row 2 => 2*row-1 = 2*2-1 =3        
//     * * * * *                            row 3 => 2*row-1 = 2*3-1 =5
//   * * * * * * *     
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *


for(row=1;row<=5;row++){
    str = ""
    for(space=1;space<=5-row;space++){
        str = str + "  "
    } 
    for(col=0;col<2*row-1;col++){
        str = str + " *"
    }
 console.log(str);   
}
for(row=4;row>=1;row--){
    str = ""
    for(space=1;space<=5-row;space++){
        str = str + "  "
    } 
    for(col=0;col<2*row-1;col++){
        str = str + " *"
    }
 console.log(str);   
}
