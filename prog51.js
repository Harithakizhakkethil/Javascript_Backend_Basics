p = [10,11,12,20,30]
q = [11,20,25,30,33]
lowP = 0
lowQ = 0
isPresent = false
 while(lowP<p.length && lowQ<q.length){  //0<5 //1<5 //2<5 && 1<5
    if(p[lowP]==q[lowQ]){ //10==11? 11==11 //12==20
        console.log(p[lowP]);//11
        isPresent = true
        lowP++ //2
        lowQ++ //1
    }
    else if(p[lowP]<q[lowQ]){//10<11 //12<11
        lowP++//1
    }

    else {
        lowQ++//2
    }

}
!isPresent && console.log('no common numbers');
