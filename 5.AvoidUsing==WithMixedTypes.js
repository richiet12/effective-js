console.log('1.0e0' == {valueOf: function() { return true; }})
// the above is actually considered equivalent by the == operator because they are both converted to numbers before being compared.
// the string '1.0e0' parses as the number 1.
// and the object is converted to a number by calling its valueOf method and converting the result to a number. true -> 1

// you can convert values to numbers explicitly by using the Number fn or the unary + operator

// When two arguments are of the same type, there is no difference in behavior between == and ===

// the coercion rules for == are not at all obvious.
// The rules are symmetric e.g. null == undefined and undefined == null
// most of the time the conversions attempt to produce numbers.

// Coercion rules for the == operator
// null == undefined : true
// null or undefined == anything other than null or undefined : false
// string/number/bool == Date Object : convert string/number/bool to number and compare to Date toString then valueOf
// string/number/bool == non Date Object : convert string/number/bool to number and compare to Object toValue then toString
// string/number/bool == string/number/bool : convert to number

// example compare a string containing a date to a date Object
const date = new Date('1999/12/31');
console.log(date == '1999/12/31')

// This fails because converting a date object to a string produces a different format than the one in the example
console.log(date.toString())

// This ia a wider problem that the == operator does not infer and unify arbitrary data formats.
// you can make coercion explicit by using a formatting method.

// Things to remember
// The == operator applies a confusing set of implicit coercions when its arguments are of different types.
// Use === to make it clear to your readers that your comparison does not involve any implicit coercions.
// Use your own explicit coercions when comparing values of different types to make your programs behavior.