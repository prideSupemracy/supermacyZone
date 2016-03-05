/*
	File: factorialByRecursion.js
	------------------------------
	This program calculates the factorial of the given number using
	recursion principle.
*/
'use strict';
const SENTINAL = 0;
var factorial = (i, a) => {
	a = a || 1;
	if(i < 2)
		return a;
	return  factorial(i - 1,  a * i);
}
console.info("============This program calculates the factorial of the given number ============");
console.log("++++++++You can enter 0 any time to exit+++++++++");
console.log("Please enter a number : ");
process.stdin.on('data',(chunk) => {
	if(Number.isNaN(+chunk) === true || +chunk === SENTINAL){
		console.info("Sorry you have not entered a number or you have entered zero exiting.")
		process.exit();
	}
	process.stdout.write("The factorial of " + chunk + " is : " + factorial(+chunk) + "\n");
	
});
