// var arr = [10,11,12,3,2,4,56]
//check whether 2 is present in the array or not


searchitem = 2
ispresent = false
var arr = [10,11,12,3,2,4,56]
for(let item of arr){
    
    if(item==searchitem){
        ispresent = true
        break;
    }

}
console.log(ispresent?`${searchitem} is present`:`${searchitem} is not present`);
        
    