// In js there are 5 types of primitive values: booleans, numbers, strings, null and undefined
// the standard library provides constructors for wrapping booleans numbers and strings as objects.
// You can create a string object that wraps a string values:
var s = new String('hello')
// In some ways a string object behaves similarly to the string value it wraps.
// You can concatenate
console.log(s + 'world')
// You can extract its indexed substrings
console.log(s[4])
// But unlike primitive strings, a String object is a true object
console.log(typeof s)
console.log(typeof 'hello')
// This means you cannot compare the contents 
var s2 = new String('hello')
console.log(s === s2)
console.log(s == s2)
// Since each String object is a separate object, it is only ever equal to itself.

// Since these wrapper don't behave quite right, they don't serve much of a purpose.

// The main reason for their existence it the utility methods e.g. .toUpperCase()
// js makes these easy to use with another implicit coercion
// - you can extract properties and call methods of a primitive value and it acts as though you had wrapped the value with the primitive object type.

// A consequence of this implicit wrapping is that you can set properties on primitives
// but they have no effect
'hello'.someProp = 17; // no errors thrown
console.log('hello'.someProp)
// Since the implicit wrapping produces a new string each time, there is no lasting effect
// There is no use in this behaviour but it is important to remember because it can hide type errors.
// e.g. if you think you are dealing with an object then there will be no errors, harder to debug.

//Things to remember
// Object wrappers for primitive types do not have the same behaviour as their primitive values when compared for equality.
// Getting and setting properties on primitives implicitly creates object wrappers

