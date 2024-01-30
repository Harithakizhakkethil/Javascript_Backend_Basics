//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
//   0      1          2            3            4                  5              6          
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case
console.log('1.District having Highest +ve case :');
highest = covid_data.reduce((dis1,dis2)=>dis1[2]>dis2[2]?dis1:dis2)
console.log(highest[1]); 

//2. district having Highest 1st dose vaccine
console.log('--------------------------------------');
console.log('2.District having Highest 1st dose vaccine :');
high_1st = covid_data.reduce((dis1,dis2)=>dis1[5]>dis2[5]?dis1:dis2)
console.log(high_1st[1]);

//3. district having lowest death rate
console.log('--------------------------------------');
console.log('3.District having lowest death rate : ');
low_death = covid_data.reduce((dis1,dis2)=>dis1[3]<dis2[3]?dis1:dis2)
console.log(low_death[1]);

//4. sort data(district) with +ve case in descending order
console.log('-----------------------------------------');
console.log('4.District with +ve case in descending order : ');
covid_data.sort((pos1,pos2)=>pos2[2]-pos1[2]).forEach(dis => {console.log(dis[1])});

//5. is district with +ve cases > 15000
console.log('-----------------------------------------');
console.log('5.is district with +ve cases > 15000 : ');
pos = covid_data.some(dis=>dis[2]>=15000)
console.log(pos?'Yes':'No');


//6. sort data with 1st dose vaccine ascending order
console.log('-----------------------------------------');
console.log('6. District with 1st dose vaccine ascending order:');
covid_data.sort((dis1,dis2)=>dis1[5]-dis2[5]).forEach(dis=>console.log(dis[1]));

//7. Print Thrissur details
console.log('-------------------------------------------');
console.log('7.Thrissur details : ');
T = covid_data.find(dis=>dis[1] == 'Thrissur')
console.log(T);

//8. Print total number of positive cases
console.log('------------------------------------------');
console.log('8.Total number of positive cases :');
total = covid_data.map(pc=>pc[2]).reduce((case1,case2)=>case1 + case2)
console.log(total);

//9. Print total number of curred cases
console.log('---------------------------------------------');
console.log('9.Total number of curred cases : ');
total = covid_data.map(cc=>cc[4]).reduce((c1,c2)=>c1+c2)
console.log(total);

//10. Print curred cases in Idukki
console.log('---------------------------------------------');
console.log('10.curred cases in Idukki : ');
c_cases = covid_data.find(dis=>dis[1] == 'Idukki')
console.log(c_cases[4]);
