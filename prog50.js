b=[2,3,4,5]

low = 0
up = b.length-1
pairsum = 6
isPresent = false
while(low<up){//0<3 //0<2 
    currentsum = b[low]+b[up] //2+5=7 //2+4=6 
    if(currentsum == pairsum){ // 7==6 //6=6 
        console.log(`(${b[low]},${b[up]})`);//2,4
        isPresent = true
        low++//1
    }
    else if (currentsum>pairsum){//7>6 
        up--//2 
    }
    else{
        low++
    }
}
!isPresent && console.log('pair not found');