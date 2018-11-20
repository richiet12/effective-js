//  js has automatic semicolon insertion

// however it has its pitfalls so you need to learn the rules

// first rule
// Semicolons are only ever inserted before a } token, after one or more newlines, or at the end of the program input.
// meaning you can only leave out semicolons at the end of a line, block or program.

// second rule
// semicolons are only ever inserted when the next input token cannot be parsed.
// in other words, semicolon insertion is an error corrections mechanism.

// third rule
// Semicolons are never inserted as separators in the head of a for loop or as empty statements.

//  Things to remember 
// NEver omit a semicolon before a statement beginning with (,[,+,- or /
// When concatenating scripts, insert semicolons explicitly between scripts
// Never put a new line before the argument to return, throw, break, continue, ++ or --.
