//synchronous and asynchronous functions

console.log("function1");

setTimeout(() => {
    console.log('function2');
}, 5000);

console.log("function3");  // fuction1 and fuction3 are examples of syncronous functions. function2 is an example of asynchronous function