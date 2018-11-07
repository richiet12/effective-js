// JS was formalized in 1997 as an international standard known as ECMAScript

// ES3 finalized in 1999 is the most widely adopted

// ES5 in 2009 was the next major advancement
// ES5 introduced 'strict mode' which allowed you to opt in to a restricted version of js
// that disallows some of the more problematic or error-prone features
// It is backwards compatible because you are just adding a string.
// e.g. redefining the arguments variable is disallowed in strict mode
// One pitfall of using strict mode is that "use strict" directive is only recognized at the top of a script
// need to be careful when concatenating scripts. 
// either keep strict and no strict files separate or wrap scripts in IIFEs which adds separate scopes for each file.

// Things to remember
// Decide which versions of JS your application supports
// Be sure that any js features you use are supported by all; environments in which your application runs
// Always test strict code in environments that perform strict-mode checks.
// Beware of concatenating scripts that differ in their expectations about strict mode.