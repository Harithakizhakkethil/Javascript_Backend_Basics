// write a pgm to find the sum of three numbers using arrow function

const add = (n1,n2,n3)=> n1+n2+n3

console.log(`sum of three numbers is ${add(2,3,6)}`);

//another
const addition = (n1,n2,n3)=> {
    sum = n1+n2+n3
    return sum
}
console.log(`sum of three numbers is ${add(2,3,6)}`);
console.log("---------------------------------------");

//write a pgm to find the cube of a given number using arrow function

const cube = n => n*n*n // or n=>n**3
console.log(`cube of the given number is ${cube(3)}`);
