function parent(){
    let parentvariable = "parent function"
    console.log(parentvariable);

    function child(){
        let childvariable = "child function"
        console.log(childvariable);
    }
    child()
}
parent()


//using arrow function
function parent1(){
    let parentvariable = "parent function using arrow function"
    console.log(parentvariable);

   const child1=()=>{
        let childvariable = "child function using arrow function"
        console.log(childvariable);
    }
    child1()
}
parent1()


