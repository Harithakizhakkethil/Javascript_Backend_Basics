employee =[ 
    /* id,name,designation,location,salary,experience */
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//print all employee name
console.log('------------------------------------------------------');
console.log('Employees:');
console.log('----------');
for(let emp of employee){
    console.log(emp[1]);
}

//print total number of employee
console.log('------------------------------------------------------');
console.log(`total number of employees : ${employee.length}`);

//print developer employee details
console.log("------------------------------------------------------");
console.log('Developer employee  details:');
for(let emp of employee){
    if(emp[2]=='developer'){
        console.log(emp);
    }
}

//print employee details whose salary is greter than 30000
console.log('--------------------------------------------------------');
console.log('employee details whose salary is greter than 30000:');
for(let emp of employee){
    if(emp[4]>30000){
        console.log(emp);
    }
}

//print details of employee laisha
console.log('------------------------------------------------------------');
console.log('details of employee Laisha:');
for(let emp of employee){
    if(emp[1]=='Laisha'){
        console.log(emp);
    }
}

//sort employee on the bases of their salary in descending order
console.log('-------------------------------------------------------------');
console.log('Bases of their salary in descending order'); 
employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee);

//sort employee on the bases of their experience in ascending order
console.log('------------------------------------------------------------------');
console.log('Bases of their experience in ascending order'); 
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employee);

//print the employee whose salary is the highest
console.log("---------------------------------------------------------------");
console.log('Highest salary employee:');
highestSalary = employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(highestSalary[0][1]);

