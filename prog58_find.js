fruits = ['mango','apple','orange']
//print mango if mango is present in the given array
x = fruits.find((fruit)=>fruit=='mango')
console.log(x);

//**indexOf method**
z = fruits.indexOf('mango')
console.log(z);

//write a pgm to print numbers greater than 12
a = [10,11,12,13,14,15]
n = a.find(num=>num>12)
console.log(n);//by using find it will print only the first item.so it will print only 13

//**includes method**
//find whether mango is present or not- includes method
y = fruits.includes('mango')
console.log(y);
//or
y = fruits.includes('mango')
console.log(y?'yes':'no');

