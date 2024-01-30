// text = "hai hello all hello world"
//print the word count in the text as object - {hai:1,hello:2,all:1,world:1}

text = "hai hello all hello world"
 words = text.split(' ')
 console.log(words);
 //create an empty object
 wc = {}
 for(let word of words){//hai//hello//all//hello//world
    if(word in wc){
        wc[word]++//{hai:1,hello:2,all:1}
        
    }
    else{
        wc[word]=1//{hai:1,hello:1,all:1}//{hai:1,hello:2,all:1,world:1}
    }
 }
console.log(wc);
console.log('---------------------------------------------------');


text.split('').forEach(word =>word in wc? wc[word]+=1:wc[word]=1); {
    console.log(wc);  
  }
//pattern:'ABCAABBCAABBCC' - 

pattern = 'ABCAABBCAABBCC'
characters = pattern.split('')
 console.log(characters);
 //create an empty object
 cc = {}
 for(let character of characters){
    if(character in cc){
        cc[character]++
        
    }
    else{
        cc[character]=1
    }
 }
console.log(cc);
console.log('---------------------------------------------------');

//using array Method
Array.from(pattern).forEach(character =>character in cc? cc[character]+=1:cc[character]=1); {
  console.log(cc);  
}



newArray = [10,20,30,40,30,20,50,30,60,70,10,40,80]
console.log(newArray);
num = {}
 for(let number of newArray){
    if(number  in cc){
        num[number]++
        
    }
    else{
        num[number]=1
    }
 }
console.log(num);
console.log('---------------------------------------------------');

newArray = [10,20,30,40,30,20,50,30,60,70,10,40,80]
newa={}
newArray.forEach(num=>num in newa? newa[num]+=1:newa[num]=1)
console.log(newa);



