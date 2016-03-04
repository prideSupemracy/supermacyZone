/*
	File: prototype.js
	-------------------
	This program show that how the main constructor and prototyped constructor,
	does not have the access to the same this object.
	Also the arrow functions can not be prototyped in any case.
*/

/*
//arrow functioncs can not be prototyped

var myFun = () => {
	this.state = "below";
};

*/ 
var MY_FUN = function(string){
	this.state = string;
};
MY_FUN.prototype.getStatus = function(){return this.state};
var fun = new MY_FUN("Kumar");
console.log("Prototyped function called : " ,fun.getStatus());
console.log("main state of the function accessed : " , fun.state);
// apply() method and it's invocation
var add = function (a, b) {
return a + b;
};
var ob = {
	state : "EveryThing is ok"
};
var arr = [10, 29.99];
var sum = add.apply(null,arr);
console.log("Sum of the array : " , sum);
var status = MY_FUN.prototype.getStatus.apply(ob);
console.log(status);