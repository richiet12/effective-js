// Things to remember

// JS strings consist of 16-bit code units, not Unicode points.
// Unicode code points 2^16 and above are represented in JS by two code units, known as a surrogate pair
// Surrogate pairs throw off string elements counts, affecting length, charAt, charCodeAt, and regular expression patterns such as"."
// Use third-party libraries for writing code point-aware string manipulation
// Whenever you are using a library that works with strings, consult the documentation to see how it handles the full range of code points