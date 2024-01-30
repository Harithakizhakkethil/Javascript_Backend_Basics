//multi level inheritance
//-----------------------

class A{
    methodA(){
        console.log('inside class A');
    }
}
class B extends A{
    methodB(){
        console.log('inside class B');
    }
}

class C extends B{
    methodC(){
        console.log('inside class C');
    }
}

const obj = new C

obj.methodC()
obj.methodB()
obj.methodA()