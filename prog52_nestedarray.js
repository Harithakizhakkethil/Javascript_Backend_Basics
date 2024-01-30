
//write a pgm to print all numbers less than 10 -2,4,7,9

a = [[10,23],[34,50],[2,4],[57,89],[7,9]]
for(let subarray of a){
/*     console.log(subarray);  */ 
    for(let item of subarray){
        if(item<10){
        console.log(item);
        }
    }
}

//flat() - convert into one dimensional array
//using flat array method
b= [[10,23],[34,50],[2,4],[57,89],[7,9]]
c=b.flat()
console.log(c);
for(let item of c){
    if(item<10){
        console.log(item);
    }
}