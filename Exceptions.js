/*
	File: Exceptions.js
	---------------------
	This file explains that how to deal with exceptions.
*/
var argMethod = (arg1, arg2) => {
	if(typeof arg1 !== 'number' || typeof arg2 !== 'number'){
		throw {
			name : 'TypeError',
			message : 'For addition we need numbers'
		}
	}
	return arg1 + arg2;
}

//var sum = argMethod(10, "kumar"); // Throws TypeError because arg2 is not a number
var sum = argMethod(10, 20);
console.log(sum);
//Error handling using try catch

try{
	sum = argMethod(10, 'kumar');
}catch(ex){
	console.log(ex);
}