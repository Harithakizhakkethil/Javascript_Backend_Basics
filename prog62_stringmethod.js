str = 'Good morning all'
//write a pgm to print all the vowels in the given string.
vowels = ['a','e','i','o','u','A','E','I','O','U']
characters = str.split('')
console.log(characters);

for(let char of characters){
    if(vowels.includes(char)){
        console.log(char);
    }
}


Array.from(str).filter(item=>vowels.includes(item)).forEach(char=>console.log(char))