// Write a function that takes 3 parameters: greeting, firstName,
// and lastName. Set the default values to 'hello' and your first
// and last name, if no input is provided.

//const greeting = function(){}  // fill this in!
const greeting = (greeting = 'hello', firstName = 'Elena', lastName = 'Olekh') => (greeting +" "+ firstName +" "+ lastName);

// fill this in!


console.log(greeting());

console.log(greeting('hi', 'harry', 'hedger'));
