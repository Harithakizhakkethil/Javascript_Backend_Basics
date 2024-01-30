//  *
//  * *
//  * * * 
//  * * * *
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

for(row=1;row<=4;row++){
    str = '' 
    for(space=1;space>row;space++){
        str = str+ " "
        } 
    for(col=1;col<=row;col++){
        str = str + ' *'
    }
    
 console.log(str);   
}
for(row=1;row<=5;row++){
    str=''
    for(col=row;col<=5;col++){
        str = str + " *"
    }
    console.log(str);
}



