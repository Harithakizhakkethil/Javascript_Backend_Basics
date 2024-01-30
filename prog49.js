
//BINARY SEARCH
//-------------
//algorithm

// 1) sort the array
// 2) find the mid => (lower index + upper index)/2
// 3) check whether the search item is equal  to the middle value
      // print search item foun d
// 4) if search item is greater than mid value -
      // increment the lower index
// 5) if search item is less than mid value -
      // decrement the upper index by one
// 6) repeat these steps untill the value is found or the upper index and lower index coincides.


arr = [2,3,4,10,11,12]
searchitem = 11
low = 0
up = arr.length-1
isPresent = false
count = 0
// 1) sort the array
arr.sort((a,b)=>a-b)
console.log(arr);
// 6) repeat these steps untill the value is found or the upper index and lower index coincides.
    while(low<=up){
        count ++
// 2) find the mid => (lower index + upper index)/2
        mid = Math.floor((low + up)/2)
// 3) check whether the search item is equal  to the middle value
if(arr[mid]==searchitem){
      // print search item found
    isPresent = true
    break
}
// 4) if search item is greater than mid value -
else if(arr[mid]<searchitem){
      // increment the lower index
      low = mid + 1
}
// 5) if search item is less than mid value -
else{
      // decrement the upper index by one
    up= mid - 1
    }
}
console.log(count);
console.log(isPresent?'found':'not found');



