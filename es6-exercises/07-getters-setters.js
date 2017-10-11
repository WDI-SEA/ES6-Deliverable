// Our cash register has a few serious problems

var register = {
  balance: 0,
  deposit: function(value){
    this.balance += value
  },
  withdraw: function(value){
    this.balance -= value
  }
}

// Anyone can directly update their balance without a withdraw/ deposit:

register.balance = 100000

// The balance can be manipulated with unsanitized input:

register.deposit(1)
register.deposit("0")
register.deposit("00000")
register.balance

// update the register object to use getters and setters. Throw an error
// if the user sets a value that is not a positive integer


class Register {
  
  constructor(balance){
    if(Number.isInteger(balance) && balance > 0){
      this._balance = balance;
    }  
  }
  
  
  deposit(value){
    if(Number.isInteger(value) && value > 0){
      this._balance += value
    }
  }
  
  withdraw(value){
    if(Number.isInteger(value) && value > 0) this._balance -= value
  }
  
  get balance() {
        return this._balance;
  }
}

// Anyone can directly update their balance without a withdraw/ deposit:
let register = new Register(100000);
console.log(register.balance); 


// The balance can be manipulated with unsanitized input:

register.deposit(1)
console.log(register.balance);
register.deposit("1")
console.log(register.balance);
register.deposit("00000")
console.log(register.balance);
register.balance

// update the register object to use getters and setters. Throw an error
// if the user sets a value that is not a positive integer

console.log(register.balance);