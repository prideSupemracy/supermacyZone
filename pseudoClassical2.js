/*
	File: pseudoClassical2.js
	--------------------------
	The ugliness of the pseudoClassical1.js can be hidden, which is shown in this 
	program. But as you will see that it is not the optimal solution.
*/

//Preparation before you start
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('inherits', function(Parent) {
    this.prototype = new Parent();
    return this;
});

//Now let's write the same program
var Mammal = function(name) {
    this.name = name;
};

Mammal.prototype.get_name = function() {
    return this.name;
};

Mammal.prototype.says = function() {
    return this.saying || '';
};


var Cat = function(name) {
    this.name = name;
    this.saying = 'meow';
}.inherits(Mammal).method('purr', function(n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
}).method('get_name', function() {
    return this.says() + ' ' + this.name + this.says();
});

// Crating new instance of Cat

var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr = myCat.purr(5);
name = myCat.get_name();

console.info(name + ' ' + says + ' ' + purr);