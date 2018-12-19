//  Whatever conveniences it may offer, it more than makes up for them in unreliability and inefficiency

// the motivation behind with is that programs often need to call a number of methods in a sequence on a single object. and it is convenient to avoid repeated references to the object.

// Problems come with variables inside a with block, some are meant to be from the with object, while others are meant to be from the outside lexical scope, but you cannot which is which.
// Also we cannot be sure which properties are actually in the with object.
//  The conflict between variable scope and object namespaces makes with blocks extremely brittle.

//  Because a with block requires searching an objects prototype chain for all variables in its body, it will typically run much more slowly than an ordinary block.


// Things to remember
// Avoid using with statements
// Use short variable names for repeated access to an object
// Explicitly bind local variables to object properties instead of implicitly binding them with a with statement
