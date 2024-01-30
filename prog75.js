
// classical inheritance - single level

//parent / super / base
class parent{
    bike(){
        console.log('my bike name is duke');
    }
}

//child / derived / sub class
class child extends parent{
 
}
const ch = new child
ch.bike()