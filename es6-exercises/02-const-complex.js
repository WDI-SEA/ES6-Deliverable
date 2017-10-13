// Make a prediction: does the fact that the account object is constant mean
// that we can't update the password inside?  Why or why not?
// Try it out!
// If it turns out we *can* change the password, try to make it so that we
// can't.  Hint: the thing to google is object freeze

const account = {
  username: "marijn",
  password: "xyzzy"
}

Object.freeze( account ); //now we cannot change the password

account.password = "s3cret"

console.log(account.password)



// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Constant_non-constance


// ******Solution - yes const will allow us to change the value for password, you can
// change the values just not the object itself.
// If we want to make it so that we cannot change the vaules in the object we use an object freeze.
// this makes It makes an object immutable, i.e. you cannot change its properties.   *********
