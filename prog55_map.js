a = [10,11,12,13,14,15]
//write a pgm to print square of the given numbers in the array
for(let num of a){
    console.log(num**2);
}
console.log('--------------------------');
a.forEach(num => {
    console.log(num**2);
});

//using map
console.log('------------------------------');
sq = a.map((num)=>num**2)
console.log(sq);

//write a pgm to print cube of the given numbers in the array
console.log('-------------------------------');
cube = a.map((num)=>num**3)
console.log(cube);

//write a pgm to create new array with numbers<=13 then increment the number and  number>13 then decrement the number [11,12,13,14,13,14]
console.log('----------------------------------');
    c = a.map((num)=>num<=13?num+1:num-1)
    console.log(c);
    
    

