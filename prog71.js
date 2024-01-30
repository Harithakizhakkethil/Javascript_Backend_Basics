accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('1. total number of accounts : ',accounts.length);
console.log('----------------------------------------------');


//2. print account number whose ac_type is savings
console.log('2. print account number whose ac_type is savings');
accounts.filter(data=>data.ac_type=='savings').forEach(item =>console.log(item.acno) ) 
console.log('-----------------------------------------------------------');   

//3.print the balance of acnount number 1000
console.log('3.print the balance of acnount number 1000 : ');
b = accounts.find(data=>data.acno==1000)
console.log(b.balance);
console.log('-----------------------------------------------------------');


//4. print all gpay transactions
console.log('4. print all gpay transactions : ');
gpay = accounts.map(data=>data.transaction).flat().filter(d=>d.mode=='gpay')
console.log(gpay);
console.log('----------------------------------------------------------');

//5. print all transaction whose amount > 5000
console.log('5. print all transaction whose amount > 5000');
amt = accounts.map(data=>data.transaction).flat().filter(d=>d.amount>5000)
console.log(amt);
console.log('----------------------------------------------------------');


//6. print credit transaction of account 1002
console.log('6. print credit transaction of account 1002');
Credit = accounts.map(data=>data.transaction).flat().filter(d=>d.to==1002)
console.log(Credit);
console.log('------------------------------------------------------------');



//7. print debit transaction of account 1002
console.log('7. print debit transaction of account 1002');
debit = accounts.find(data=>data.acno==1002).transaction
console.log(debit); 
console.log('-----------------------------------------------------------');


//8. print transaction history of 1002
console.log('8. print transaction history of 1002');
transHist = {
    credit:Credit,
    debit:debit
}
console.log(transHist);


//print as array
transHist1 = [...Credit,...debit] 
console.log(transHist1);
console.log('----------------------------------------------------------');


//9. print highest balance account details
console.log('9. print highest balance account details');
highest = accounts.reduce((data1,data2)=>data1.balance>data2.balance?data1:data2)
console.log(highest);
