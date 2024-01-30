
// write a pgm to find the total number of items in the given array

weekdays = ['Monday','Tuesday','Wednesday',4]
console.log( `Total number of items in the given array is ${weekdays.length}`);

// write a pgm to find the total number of index positions in the given array

console.log( `Total number of index positions in the given array is ${weekdays.length-1}`);

// write a pgm to display the first item in the given array
//index - array[index]

console.log( `The first item in the given array is ${weekdays[0]}`);

//print wednesday
console.log(weekdays[2]);

//print the last item of the given array
console.log(weekdays[weekdays.length - 1]);

// write a pgm to add thursday into the array
 weekdays.push("Thursday")
 console.log(weekdays);
 
 // write a pgm to add friday into the array
 weekdays.push('friday')
 console.log(weekdays);
 
  // write a pgm to add sunday into the array as the first item
 weekdays.unshift('sunday')
 console.log(weekdays);

   weekdays.pop()
  console.log(weekdays);

  weekdays.shift()
  console.log(weekdays);  


//display each item in an array
   for(i=0;i<=weekdays.length-1;i++){
    console.log(weekdays[i]);
  }
 



