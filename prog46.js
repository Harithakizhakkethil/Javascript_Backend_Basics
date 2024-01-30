//write a pgm to print whose pairsum is 6
//a=[2,3,4,5]  //op =(2,4)

a=[2,3,4,5]
for(i=0;i<=a.length;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]+a[j]==6){
            console.log(`${a[i]},${a[j]}`);
        }
    }
}


console.log("------------------------");
pairsum = 9
isPresent = false
a=[2,3,4,5]
for(i=0;i<=a.length;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]+a[j]==pairsum){
            isPresent = true
            console.log(`${a[i]},${a[j]}`);
        }
    }
}
!isPresent && console.log('no pair');