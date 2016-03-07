/*
	File: someWearedconditionsInJScript.js
	---------------------------------------
	This program is the experimentations on closure.
*/

'use strict';
//In case the lifetime of the inner function is more then outer function,
// Still inner function has the access to the outer function veriables.
let myObject = function(){
	let value = 0;

	return {
		increment: function(inc){
			value += typeof inc === 'number' ? inc : 1; //Value can be returned from here also so there is no point in having getValue function
		},
		getValue : function(){
			return value;
		}
	};
}();
myObject.increment(100);
myObject.increment(500);
console.info(myObject.getValue());

//In some cases the value can not be returned directly then we must need getValue function.

let obj = function(status){

	return {
		getValue : function(){
			return status;
		}
	};
}("Amazed");

console.info(obj.getValue())