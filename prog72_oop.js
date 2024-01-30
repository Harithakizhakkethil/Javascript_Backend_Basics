class employeeDetails{
    //property
    empName=""
    empSal=""
    empDesgn=""

    //constructors
    constructor(name,salary,designation){
        this.empName=name
        this.empSal=salary
        this.empDesgn=designation
    }
    //method
    display(){
        console.log(`employee name is : ${this.empName}, employee salary is : ${this.empSal},employee designation is : ${this.empDesgn}`);
    }
}

const obj = new employeeDetails("Max","2000","designer")
obj.display()

const obj1 = new employeeDetails("Neel","3000","Frontend Developer")
obj.display()