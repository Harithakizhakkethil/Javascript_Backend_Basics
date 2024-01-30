a = [10,11,12,13,14,15]
//display all even numbers from the given array
even = a.filter(num=>num%2==0)
console.log(even);

//write a pgm to print numbers greater than 12
n = a.filter(num=>num>12)
console.log(n);

//is there any numbers greater than 12. if exist print yes else print no
y = a.some(num=>num>12)
console.log(y?'yes':'no');
