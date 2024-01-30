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
console.log('Employees:');
console.log('----------');
employee.forEach(emp => {
    console.log(emp[1]);
});

//print total number of employee
console.log('------------------------------------------------------');
console.log(`total number of employees : ${employee.length}`);

//print developer employee details
console.log("------------------------------------------------------");
console.log('Developer employee  details:');
d = employee.filter(emp=>emp[2]=='developer')
console.log(d);
//or
console.log("------------------------------------------------------");
console.log('Developer employee  details:');
employee.filter(emp=>emp[2]=='developer').forEach(item=>console.log(item))



//print employee details whose salary is greter than 30000
console.log('--------------------------------------------------------');
console.log('employee details whose salary is greter than 30000:');
s = employee.filter(emp=>emp[4]>30000)
console.log(s);

//print details of employee laisha
console.log('------------------------------------------------------------');
console.log('details of employee Laisha:');
e = employee.find(emp=>emp[1]=='Laisha')
console.log(e);
//OR
console.log('------------------------------------------------------------');
console.log('details of employee Laisha:');
console.log(employee.find(emp=>emp[1]=='Laisha'));



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
console.log(employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1[1]:emp2[1]));

//print the lowest experience
console.log('--------------------------------------------------------------');
console.log('Lowest Experience:');
lowestexp = employee.reduce((emp3,emp4)=>emp3[5]<emp4[5]?emp3:emp4)
console.log(lowestexp[1]);

//print total of all salary
console.log('-------------------------------------------------------------');
console.log('Total of all salary');
total = employee.map(item=>item[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(total);
