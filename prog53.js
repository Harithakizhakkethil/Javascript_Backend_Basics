//write a prgm to print all numbers greater than 25 - 87,30,41,50 - and sort in ascending order the result
b = [[13,87],[25,30],[11,41],[50,23]]
c = b.flat()
d=[]
for(let item of c){
    if(item>25){
      d.push(item)  
     
    }
}
console.log(d);
d.sort((a,b)=>a-b)
console.log(d);


array = [[13,87],[[3,4],25,30],[11,41],[50,23]]
arr = array.flat(2)
console.log(arr);
