// Write a function that takes 3 parameters: greeting, firstName,
// and lastName. Set the default values to 'hello' and your first
// and last name, if no input is provided.

const greeting = function(greeting = "hello", firstName ="lauren", lastName ="perez") => {
  return `${greeting} ${firstName} ${lastName}`;
}  // DONE!

console.log(greeting());

console.log(greeting('hi', 'harry', 'hedger'));


// Solution : function(greeting = "hello", firstName ="lauren", lastName ="perez")
