/*
	File: test.js
	==============
	This file is written for all sorts of experiments and testings. 
	So, you will see the divercity in the codes which are written
	in this file.
*/
'use strict';
var _ = require('lodash');
//if operator testing
var i = 10;
i: console.log(i);
//Argument testing
var sum = function() {
    console.log(_.isArray(arguments)); // This give false because the given arguments is not an array so it misses all the array properties but length.
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
console.info(sum(4, 8, 15, 16, 23, 42)); // 108

//Date in milli sectonds testing
console.log(Date.now());
var years = 1457201847769 / (1000 * 3600 * 24 * 365);
var days = (years - 46 ) * 365;
console.log("years : ", years , "  days : ", days);

//Let's block scope testing
(function letTest() {
  let x = 31;
  if (true) {
  	//console.log(x); //Veriable x is not defined
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
})();

//Named immediate function call testing
//letTest(); //Undefined because it is an immidated function so no benifit in declearing named immediate function