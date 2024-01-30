//input of an array as [4,5,6]
//output of array is [11,10,9]

arr = [4,5,6]
sum = 0
op = []
for(let item of arr){
    sum = sum + item
    
}
for(let item of arr){
    op.push(sum - item)
    
} 

console.log(op);
console.log("-------------------------------");
console.log("-------------------------------");

// write a pgm to print duplicate element from the given array
//a=[10,20,30,20,30,40,50,60,10] =10, 20, 30

a=[10,20,30,20,30,40,50,60,10]
console.log('Duplicate elements of an array:');
for(i=0;i<=a.length;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]==a[j]){
            console.log(`${a[j]}`);
        }
    }

}


//numbers repeats more than one two times.
console.log("--------------------------");
a=[10,20,30,20,30,10,40,50,60,10] //here 10 repeats 3 times
b=[]
console.log('Duplicate elements of an array:');
for(i=0;i<=a.length;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]==a[j] && !b.includes(a[i])){
            b.push(a[i]);
            break
        }
    }

}
console.log(b);
