// js has just one type of numerical data, other languages have several
// integers and floating point numbers are both numbers
// all numbers in js are double-precision floating-point numbers known as 'doubles' 
// https://en.wikipedia.org/wiki/Double-precision_floating-point_format

// most arithmetic operators work with integers, real numbers, or a combination of the two.
console.log(0.1 * 1.9);
console.log(-99 + 100);
console.log(21 - 12.3);
console.log(2.5 / 5);
console.log(21 % 8);

// The bitwise operators are special
// Rather than operating on their arguments directly as floating-point numbers, they implicitly convert them to 32-bit integers.
console.log(8 | 1); // bitwise OR
//As a 32-bit integer the number 8 looks like 00000000000000000000000000001000
// e.g.
console.log((8).toString(2)) // 2 here is the radix indicating a bas 2

// The bitwise OR expression combines the two bit sequences by keeping any 1 bits found in either input,
// resulting in the bit pattern 1001
console.log(parseInt('1001', 2))

// other bitwise operators
// AND a & b
// Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
console.log(8 & 1) // 1000 & 0001 = 0000
console.log(5 & 1) // 0101 & 0001 = 0001

// OR a | b
// Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.

// XOR a ^ b
// Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
console.log(8 ^ 1) // 1000 ^ 0001 = 1001
console.log(5 ^ 1) // 0101 ^ 0001 = 0100

// NOT 	~ a
// Inverts the bits of its operand.
console.log(~8) // ~ 1000 = ...0111

// Left Shift a << b
// Shifts a in binary representation b (< 32) bits to the left, shifting in 0s from the right.
console.log(8 << 1) // 1000 << 1 = 10000
console.log(2 << 4) // 0010 << 4 = 100000

// Sign-propagating right shift a >> b
// Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.
console.log(8 >> 1) // 1000 >> 1 = 0100
console.log(1 >> 2) // 0001 >> 1 = 0000

// Zero-fill right shift a >>> b
//Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in 0s from the left.
console.log(8 >>> 1) // 1000 >> 1 = 0100

// Al bitwise operators work the same way, converting their inputs to integers, doing the operation, then converting back to floating point
// In general these conversions require extra work

// Floating point numbers should make you nervous!
// they look deceptively familiar but they are notoriously inaccurate
// e.g.
console.log(0.1 + 0.2)
// doubles can only represent a finite set of numbers, rather than the infinite set of real numbers
// Floating point arithmetic can only produce approximate results, rounding to the nearest real number
// floating point numbers are not associative (x + y) + z === x + (y + z)
console.log((0.1 + 0.2) + 0.3);
console.log(0.1 + (0.2 + 0.3));
// Floating point numbers offer a trade-off between accuracy and performance.

// One workaround is to try to always work with integer values

// Things to remember
// js numbers are double-precision floating-point numbers
// Integers in JS are just a subset of doubles rather than a separate datatype
// Bitwise operators treat numbers as if they were 32-bit signed integers
// be aware of limitations of precision in floating-point arithmetic.

