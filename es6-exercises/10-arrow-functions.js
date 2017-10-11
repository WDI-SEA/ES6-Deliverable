// Write an expression using array iterator methods (like filter and reduce)
// to compute the total value of the machines in the inventory array.
// Use arrow functions.

const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

var invIt = inventory[Symbol.iterator]();
let totalMachineValue = 0;
for (let inst of invIt) {
   totalMachineValue +=inst.value;
}

console.log(totalMachineValue);

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Accounting
