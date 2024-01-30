class Bank{
    accountDetails = {
        1000:{acno:1000,username:"userone",password:"userone",balance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:1000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:6000}

    }


//method to validate the given account number
    validateAccount(acno){
        return acno in this.accountDetails?true:false
    }


//method to authenticate the account
authenticateAccount(acno,pswd){
    if(this.validateAccount(acno)){
        if(this.accountDetails[acno].password==pswd){
            console.log('Authentication Successful');
        }
        else{
            console.log('Invalid Password');
        }
    }
    else{
        console.log('Invalid Account Number');
    }
}

//method to check the balance
checkBalance(acno,pswd){
    if(this.validateAccount(acno)){
        if(this.accountDetails[acno].password==pswd){
            console.log(`Current balance of ${acno} is ${this.accountDetails[acno].balance}`);
    }
    else{
        console.log('Invalid password');
    }
}
else{
        console.log('Invalid Account Number');
    }
}



//method for fund transfer

fundTransfer(fromacno,fromacnopswd,toacno,amount){
    if(this.validateAccount(fromacno) && this.validateAccount(toacno)){
        if(this.accountDetails[fromacno].password==fromacnopswd){
            if(this.accountDetails[fromacno].balance>=amount){
                console.log(`current balance of ${fromacno} is ${this.accountDetails[fromacno].balance}`);
                console.log(`current balance of ${toacno} is ${this.accountDetails[toacno].balance}`);
                this.accountDetails[fromacno].balance-=amount
                this.accountDetails[toacno].balance+=amount
                console.log(`New balance of ${fromacno} is ${this.accountDetails[fromacno].balance}`);
                console.log(`New balance of ${toacno} is ${this.accountDetails[toacno].balance}`);
            }
            else{
                console.log('insufficient balance');
            }
        }
        else{
            console.log('Invalid Password');
        }
    }
    else{
        console.log('Invalid accounts');
    }
}

}

const obj = new Bank
console.log(obj.validateAccount(1001)?'Account Exist':'Account not Exist');

const obj1 = new Bank
obj1.authenticateAccount(1000,'userone');

obj1.checkBalance(1000,'userone')

obj1.fundTransfer(1000,'userone',1002,500)