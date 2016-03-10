/*
	File: pseudoClassical1.js
	--------------------------
	This program clearifies the problems with the pseudoClassical apporach of inheritance
	used in javascript. And where it falls apart.
*/

//Defining a constructor and argument its prototype
var Mammal = function(name){
	this.name = name;
};

Mammal.prototype.get_name = function(){
	return this.name;
};

Mammal.prototype.says = function(){
	return this.saying || '';
};

//Creating the instance

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();
console.info('Name of the mammal is : ', name);

//Creating  another pseudoclass that inherits Mammal

var Cat = function(name){
	this.name = name;
	this.saying = 'meow';
};

//Replace Cat.prototype with instance of Mammal

Cat.prototype = new Mammal();

//Argument the new prototype with purr and get_name methods.

Cat.prototype.purr = function(n){
	var i, s = '';
	for(i = 0; i < n; i += 1){
		if(s){
			s += '-';
		}
		s += 'r';
	}
	return s;
};

Cat.prototype.get_name = function(){
	return this.says() + ' ' + this.name + ' ' + this.says();
};

// Crating new instance of Cat

var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr = myCat.purr(5);
name = myCat.get_name();

console.info(name + ' ' + says + ' ' + purr);