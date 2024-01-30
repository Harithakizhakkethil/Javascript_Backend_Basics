// * 
// * *
// * * *
// * * * *



for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=row;col++){
        str=str+" *"
    }
    console.log(str);
}

// 1
// 1 2
// 1 2 3 
// 1 2 3 4
console.log("----------------");
for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=row;col++){
        str=str+` ${col}`
    }
    console.log(str);
}

// 1 
// 2 2
// 3 3 3
// 4 4 4 4

console.log("----------------");
for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=row;col++){
        str=str+` ${row}`
    }
    console.log(str);
}

