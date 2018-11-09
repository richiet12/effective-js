// js is very forgiving when it comes to type errors
console.log(3 + true)

// sometimes producing the wrong type produces an immediate error
// console.log('hello'(1)); // error: not a function
// console.log(null.x); //error: cannot read property 'x' of null

// But in many other cases JS coerces a value to the expected type
// by following various automatic conversion protocols.
// e.g arithmetic operators like -, *, /, and % all attempt to convert their arguments to numbers first
// the operator + is subtler because it is overloaded to perform either numeric addition or string concatenation

// what happens when you combine number with string
console.log(('2' + 3)) // '23'
console.log((2 + '3')) // '23'
// can be confusing because it's sensitive to their order
console.log((1 + 2 + '3')) // '33
console.log((1 + '2' + 3))


// This can be convenient in bitwise operators
// But coercions can also hide errors.
// null in arithmetic will convert to 0
// undefined will convert to the special floating point value NaN - the "not a number" number
// it is hard to test fro Nan because it is unequal with itself
const x = NaN;
console.log(x === NaN)
// also the isNaN library function is not reliable because it comes with it's own implicit coercion
// converting it's argument to a number before testing
// it should be called coercesToNaN
console.log(isNaN(NaN))
console.log(isNaN('foo'))
console.log(isNaN(undefined))
console.log(isNaN({}))
console.log(isNaN({valueOf: 'foo'}))

// There is an idiom to test for NaN
// Since NaN is the only js value that is treated as unequal to itself you can always test if a value is NaN by
const a = NaN;
console.log(a !== a)
const b = 'foo';
console.log(b !== b)

//Object can be coerced to primitives. This is most commonly used for converting things to strings
console.log('the math object: ' + Math)
// They are converted to strings by calling their toString method
console.log(JSON.toString())

// object can be converted to numbers via their valueOf method.
// You can control the type of conversion of objects by defining these methods
console.log('j' + {toString: function() { return 'S'; }})
console.log(2 * {valueOf: function() {return 3;}})
// with concatenation with an object the type is not known so js priortises valueOf
var obj = {
	toString: function() {
		return '[object My Object]';
	}, valueOf: function() {
		return 17;
	}
};
console.log('object: ' + obj);

// valueOf was only designed to be used for object that represent numeric values

// the last type of coercion is truthiness
// most js values are truthy
// There are seven falsy values: false, 0, -0, '', NaN, null and undefined


// Things to remember
//Type errors can be silently hidden by implicit coercions
// The + operator is overloaded to do addition and string concatenation depending on its arguments
// Objects are coerced to numbers via valueOf and to strings via toString
// Objects with valueOf methods should implement a toString method that provides a string representation of the number produced by valueOf
// Use typeof or comparison to undefined rather than truthiness to test for undefined values.






