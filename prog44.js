expense = [12000,23000,40000,55000,34000,24000,10000,14000]
// write a pgm to find the lowest expense
lowest = expense[0]
for(let item of expense){
    if(item<=lowest){
        lowest = item
    }
    
}
console.log(`the lowest expense is ${lowest}`);


// write a pgm to find the highest expense

highest = expense[0]
for(let item of expense){
    if(item>=highest){
        highest = item
    }
    
}
console.log(`the highest expense is ${highest}`);

// write a pgm to find the total expense
total = 0
for(let item of expense){
    total = total + item
}
console.log(`Total expense is ${total}`);