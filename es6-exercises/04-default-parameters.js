// Write a function that takes 3 parameters: greeting, firstName,
// and lastName. Set the default values to 'hello' and your first
// and last name, if no input is provided.

const greeting = (greeting = 'Hello', firstName = 'Brian', lastName = 'Connor') => {
	return `${greeting} ${firstName} ${lastName}`;
}

console.log(greeting());

console.log(greeting('hi', 'harry', 'hedger'));