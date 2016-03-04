/*
	File: global_abatement.js
	--------------------------
	This program is the workaround for fixing the global schope of the veriable in javascript,
	It can be fixed if you use strict mode but if you love to work in the normal mode then 
	This is the work around for that problem, We can use one veriable to contain all other 
	veriables in it which have a global schope and then we can use that one veriable to access
	all other veriables throughout the program.
*/

var app = {};
app.name = "Kumar";
app.age = 26;
app.occupation = "lap dog";

function myFun() {
    app.aim = "strict";
    console.log("==============Consoling all the veriables inside the function=====================");
    console.log(app.name);
    console.log(app.age);
    console.log(app.occupation);
    console.log(app.aim);
}
myFun();
console.log("==========================outside the myFun function=====================");
console.log(app.name);
console.log(app.age);
console.log(app.occupation);
console.log(app.aim);

console.log("=========================================In this way we can make all the veriables same schope resolve the headach to find the schope of a veriable================================");
