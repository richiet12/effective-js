// unfortunately JS's variable assignment rules make it all too easy to create global variables accidentally.
// - Forgetting to declare a local variable silently turns it into a global variable.

// e.g. (no errors thrown)
function swap(a,i,j) {
	temp = a[i]; // temp is a global var
	a[i] = a[j];
	a[j] = temp;
}

// Lint tools can help catch this issue

// Things to remember
// Always declare new local variables with var
// Consider using lint tools 