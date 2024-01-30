fruits = ['kiwi','pineapple','mango','orange','grapes','strawberry']

//display array
console.log(fruits);

//display total n umber of items in the array
console.log(`total number of items in the array ${fruits.length}`);

//print mango
console.log(fruits[2]);

//print the last fruit in the array
console.log(fruits[fruits.length-1]);

//remove kiwi from the array
fruits.shift()
console.log(fruits);

//add watermelon into the array
fruits.push('watermelon')
console.log(fruits);

//display all fruits present in the array
for(i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}
console.log('----------------------------');

//display each item in an array using for of loop
for(let item of fruits){
    console.log(item);
}

console.log('----------------------------');

//display each item in an array using for in loop
for(let index in fruits){
    console.log(fruits[index]);
}