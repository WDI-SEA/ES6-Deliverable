// Our cash register has a few serious problems

var register = {
    bal: 0,
    get balance() {
        return this.bal;
    },
    set deposit(dep) {
        let startBal = this.bal;
        let newBal = startBal + dep;

        if (typeof dep === 'number') {
            if (newBal >= 0) {
                this.bal = newBal;
            } else {
                console.log('This is a deposit, not a withdrawal');
            }
        } else {
            console.log('That aint money');
        }
    },
    set withdraw(wdr) {
        let startBal = this.bal;
        let newBal = startBal - wdr;

        if (typeof wdr === 'number') {
            if (newBal >= 0 && wdr >= 0) {
                this.bal = newBal;
            } else {
                console.log('Please withdraw a valid amount');
            }
        } else {
            console.log('That aint money');
        }
    }

}

// Anyone can directly update their balance without a withdraw/ deposit:

register.bal = 100000;
Object.freeze(register);
// The balance can be manipulated with unsanitized input:

// register.deposit = -1200000;
// register.withdraw = -1200000;
register.deposit = 50;
console.log(register.balance);

// update the register object to use getters and setters. Throw an error
// if the user sets a value that is not a positive integer