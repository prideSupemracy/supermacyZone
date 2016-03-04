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
var MY_FUN = function(){
	this.state = "below";
};
MY_FUN.prototype.getStatus = () => this.state = "above";
var fun = new MY_FUN();
console.log("Prototyped function called : " ,fun.getStatus());
console.log("main state of the function accessed : " , fun.state);
