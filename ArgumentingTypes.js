/*
	File: ArgumentingTypes.js
	---------------------------
	JavaScript allows basic functions like Number, string, boolean etc
	to be prototyped. which means we are free to extend the functanalities
	of that perticular method.
*/
//Main argumented function
Function.prototype.method = function (name, func) {
this.prototype[name] = func;
return this;
};

Number.method("Integer", function(){
	//return this < 0 ? Math.ceil(this) : Math.floor(this);
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log("Without Integer method : ", -10 / 3);
console.log("With Integer method : " , (-10 / 3).Integer());


String.method('trim', function ( ) {
return this.replace(/^\s+|\s+$/g, '');
});
console.log('"' + "     neat     ".trim( ) + '"');