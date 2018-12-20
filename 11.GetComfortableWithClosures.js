//  Learning closures only requires learning three essential facts.
//  1. Js allows you to refer to variables that were defined outside of the current function
function makeSandwich() {
	var magicIngredient = 'peanut butter';
	function make(filling) {
		return magicIngredient + ' and ' + filling;
	}
	return make('jelly');
}

console.log(makeSandwich());

//  2. functions can refer to variables defined in outer functions even after those outer functions have returned
//  Remember js functions are first-class objects. That means that you can return an inner function to be called sometime later on.
function sandwichMaker() {
	var magicIngredient = 'peanut butter';
	function make(filling) {
		return magicIngredient + ' and ' + filling;
	}
	return make;
}

var f = sandwichMaker();
console.log(f('jelly'))
console.log(f('banana'))

//  The way this works is that JS function values contain more information that just the code required to execute when they're called.
//  They also internally store any variables they may refer to that are defined in their enclosing scopes.
//  Functions that keep track of variables from their containing scopes are known as closures.

//  A function can refer to any variables in its scope, including the parameters and variables of outer functions.
//  We can use this to make a more general purpose sandwichMaker
function sandwichMaker2(magicIngredient) {
	function make (filling) {
		return magicIngredient + ' and ' + filling;
	}
	return make;
}

var hamAnd = sandwichMaker2('ham')
console.log(hamAnd('cheese'))

//  3. Closures can update the values of outer variables.
//  Closures actually store references to their outer variables, rather than copying their values.
//  So that updates are visible to any closures that have access to them.
function box() {
	var val = undefined;
	return {
		set: function(newVal){ val = newVal; },
		get: function() { return val },
		type: function() { return typeof val; }
	}
}

var b = box();
console.log(b.type())
b.set(99)
console.log(b.get())


//  Things to remember
//  Functions can refer to variables defined in outer scopes
//  Closures can outlive the function that creates them
//  Closures internally store references to their outer variables, and can both read and update their stored variables.