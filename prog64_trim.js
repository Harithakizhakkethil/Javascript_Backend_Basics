 str = '  Morning   '
 console.log(str);
 str1 = str.trim()
 console.log(str1);

 //startswith
 str2 = "hello world"
 console.log(str2.startsWith('hello'));
 console.log(str2.startsWith('Hello'));
 console.log(str2.endsWith("D"));


 //write a pgm to print whether a given mail id is email or not
console.log('print whether a given mail id is email or not :');
console.log("---------------------------------------------");
 
 //using arrow function
 const mail = (email1) => {
   return email1.endsWith('@gmail.com')?`${email1} is a gmail`:`${email1} is not a gmail`
 }
 console.log(mail('abc@gmail.com'));

  
 //write a pgm to print a given word starts with q or not
 
 console.log('print a given word starts with q or not:');
 console.log('----------------------------------------');
 const word = (string) => {
    return string.startsWith('q')||string.startsWith('Q')?`${string} starts with q`:`${string} not starts with q letter `
 }
 console.log(word('queen'));

 //substring 
 str = 'luminar'
 console.log(str.substring(0,3));

 
 

