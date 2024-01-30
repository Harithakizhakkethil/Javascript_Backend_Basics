var car={
    name:'Boleno',
    model:'Hatch Back',
    manufacturer:'Maruti',
    price:'10Lakh'
}
// 1) display the car name and manufacturer name.

console.log(`car name is ${car.name} and manufacturer name is ${car.manufacturer}`);
console.log('---------------------------------------------');

// 2) check 'model key is available in car . if yes display  its value.

console.log('model'in car?`car model is ${car.model}`:'no model key present');
console.log('------------------------------------');
 


// 3) add 'varient' key to the object car with value as 'manuel'
car.varient=['manuel']
console.log(car);
console.log('-------------------------------');

// 4)insert another value to 'varient' key with value as 'automatic'
car.varient.push('automatic')
console.log(car);
console.log('-------------------------------');


// 5)add 'color' key to car object with values as 'red', 'white', and 'black'
car.color=['red','white','black']
console.log(car);



