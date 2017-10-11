// Write a function that takes 3 parameters: greeting, firstName,
// and lastName. Set the default values to 'hello' and your first
// and last name, if no input is provided.

const greeting = function(greet = 'hello', firstName = 'Justen', LastName = 'Cracraft') {
        return ` ${greet}, ${firstName} ${LastName} `
    } // fill this in!

console.log(greeting());

console.log(greeting('hi', 'harry', 'hedger'));