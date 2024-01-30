class A{
    methoda(){
        console.log(`inside parent class`);
    }
}

class B extends A{
    methoda(){
        console.log(`inside child class`);
    }
    methodb(){
        console.log(`second function is child class`);
    }
}

const obj = new B
obj.methoda()