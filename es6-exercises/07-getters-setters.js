// Our cash register has a few serious problems

var register = {
  balance: 0,
  get bal() { return this.balance },
  set deposit(value) {
    this.balance += value
  },
  set withdraw(value) {
    this.balance -= value
  }
}

Object.freeze(register);

// Anyone can directly update their balance without a withdraw/ deposit:

register.balance = 100000

// The balance can be manipulated with unsanitized input:

register.deposit = 0
// register.deposit("0")
// register.deposit("00000")
// register.balance

// update the register object to use getters and setters. Throw an error
// if the user sets a value that is not a positive integer


console.log(register.bal); // "bar"
