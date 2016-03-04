/*
	File: functions.js
	-------------------
	This program deals with functions as it's name says, It deals with different way of defining a 
	function and different way of invocation of the same.
*/

//These kind of functions are called methods
var fun = {
	value : 0,
	increment : function(inc){
		this.value += typeof inc === "number" ? inc : 1;
		console.log("before",this.value);
		//this is not bound to the second function so this.value is undefined in this case.
		(function(){
			console.log(this.value);
		})();
		console.log("after",this.value);
	} 
}
fun.increment();
console.log(fun.value);
// The above this problem can be solved in the following way as it was ,
// the mistake of the language so this can only be a workround for it.

var run = {
	value : 0,
	increment : function(inc){
		var that = this; // workaround
		that.value += typeof inc === "number" ? inc : 1;
		console.log("before", that.value);
		(function(){
			that.value += 100;
		})();
		console.log("after", that.value);
	}
}
run.increment();
console.log(run.value);