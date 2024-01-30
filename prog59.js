//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('1.Product Name:');
products.forEach(item => {
    console.log(item[1]);
});

//2. display product whose price < Rs.50
console.log('----------------------');
console.log('2. product whose price < Rs.50');
products.filter(item=>item[2]<50).forEach(pro=>console.log(pro[1]))

//3. print price of oreo
console.log('---------------------------');
console.log('3.price of Oreo:');
p = products.find(pro=>pro[1]=='oreo')
console.log(p[2]);

//4. print costly product name
console.log('---------------------------');
console.log('4.costly product name:');
costlypro = products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
console.log(costlypro[1]);

//5. display out of stock product
console.log('---------------------------');
console.log('5.out of stock product:');
products.filter(pro=>pro[3]==0).forEach(pro=>console.log(pro[1]))

//6. sort products based on stock in decsending order
console.log('---------------------------');
console.log('6.product stocks in ascending order:');
products.sort((pro1,pro2)=>pro2[3]-pro1[3]).forEach(pro=>console.log(pro[1]))


//7. print product having maximum available stock
console.log('---------------------------');
console.log('7.product having maximum available stock:');
console.log(products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1[1]:pro2[1]));

//8. is there any product can be purchased by Rs. 10
console.log('---------------------------');
console.log('8.is there any product can be purchased by Rs. 10:');
p = products.some(pro=>pro[2]<=10)
console.log(p?'Yes':'No');

//9. Is there any product in the range of 10 to 30
console.log('---------------------------');
console.log('9.Is there any product in the range of 10 to 30:');
p = products.some(pro=>pro[2]>=10 && pro[2]<=30)
console.log(p?'Yes':'No');

//10. print all products in the range of 10 to 30
console.log('---------------------------');
console.log('10.products in the range of 10 to 30:');
products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(item=>console.log(item[1]))
