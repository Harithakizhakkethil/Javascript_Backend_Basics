class studentDetails{
    //property
    stdntName=""
    stdntRollno=""
    stdntSubject=""
    stdntGender=""

    //constructors
    constructor(name,rollno,subject,gender){
        this.stdntName=name
        this.stdntRollno=rollno
        this.stdntSubject=subject
        this.stdntGender=gender
    }
    //method
    display(){
        console.log(`Student Name is : ${this.stdntName}, Student RollNumber is : ${this.stdntRollno}, Student Subject is : ${this.stdntSubject}, Student Gender is : ${this.stdntGender}`);
    }

}

const obj = new studentDetails("Manu",12,"Biology","Male")
obj.display()
const obj1 = new studentDetails("Zara",14,"computer science","Female")
obj1.display()
const obj2 = new studentDetails("Adil",8,"commerce","Male")
obj2.display()
const obj3 = new studentDetails("Vaiga",13,"Biology","Female")
obj3.display()
const obj4 = new studentDetails("Alan",6,"Humanities","Male")
obj4.display()

//another method

class student{


    constructor(id,sname,grade,mark){
        this.stid = id
        this.stname = sname
        this.stgrade = grade
        this.stmark = mark
        this.studentdisplay()

    }
    studentdisplay(){
        console.log(`Student Name is : ${this.stname}, Student id is : ${this.stid}, Student grade is : ${this.stgrade}, Student mark is : ${this.stmark}`);

    }
}

const st1 = new student(1,'zara','VII',200)

const st2 = new student(2,'max','VIII',250)