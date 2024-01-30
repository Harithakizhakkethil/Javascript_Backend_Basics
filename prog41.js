//write a pgm to find a given number is mobile number or not


//using array function
const validateMobileNumber = (mobilenumber)=>{
   return  mobilenumber.length == 10?`${mobilenumber} is a valid mobile number`: `${mobilenumber} is not a valid mobile number`
}
console.log(validateMobileNumber('987456123'));
