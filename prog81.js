console.log('Evaluation of given expression');
try {
    expr = '%10*2-2'
    const result = eval(expr)
    console.log(`result is : ${result}`);
} catch  {
    console.log('invalid expression');
}
finally{
    console.log('Task completed');
}
