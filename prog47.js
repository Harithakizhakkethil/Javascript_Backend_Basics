//write a pgm to find common numbers in the given two arrays
// p = [10,11,12,20,30]
// q = [11,20,25,30,33]
//op - 11,20,30

p = [10,11,12,20,30]
q = [11,20,25,30,33]
isPresent = false
for(let i of p){
    for(let j of q){
        if(i==j){
            isPresent = true
            console.log(i);
            break
        }
    }
}
!isPresent && console.log('no common numbers');

