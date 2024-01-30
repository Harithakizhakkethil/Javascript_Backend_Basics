//[1000,'Neel','developer','kochi',25000,3],
employeeDetails = {
    id:1000,
    name:'Neel',
    desg:'developer',
    place:'kochi',
    sal:'25000',
    exp:3
}
console.log(employeeDetails);

//student details-['Zara',19,'Btech','CS','second']
studentDetails = {
    Name:'Zara',
    age:19,
    Course:'Btech',
    branch:'CS',
    semester:'Third'
    
}
console.log(studentDetails);
//display student name
console.log(studentDetails.Name);
//or
console.log(studentDetails['Name']);
console.log('---------------------');

for(let key in studentDetails){
    console.log(key);
}

console.log('-----------------------------');

//write a pgm to print yes if gender key is present else print no
console.log('gender' in studentDetails?'present':'not present');

console.log('-----------------------------------------------');

//how to add a key and value
//objectname['key'] = value
studentDetails['gender']='Female'
console.log(studentDetails);

console.log('-----------------------------------------------');
console.log('gender' in studentDetails?'present':studentDetails['gender']='Female')

 //update or Reassign
 studentDetails.semester='Fourth'
 console.log(studentDetails);

//add new value to the object using object.assign
 Object.assign(studentDetails,{isVaccinated:true});
 console.log(studentDetails);  
 
 //delete - delete method
 delete employeeDetails.isVaccinated
 
