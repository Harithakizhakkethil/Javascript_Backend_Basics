function greet(x,y){
    console.log(`my name is ${x}`);
    y()
}

function call(){
    console.log(`hello`);
}
greet('peter', call)


console.log("----------------------")

setTimeout(() => {   // setTimeout is a predefined function
    console.log('inside setTimeout function');    
}, 2000); // will print 'inside setTimeout function' after 2 seconds

