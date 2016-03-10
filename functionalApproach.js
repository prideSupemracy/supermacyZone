/*
	File: functionalApproach.js
	----------------------------
	This approach solves the privacy of the veriables which exists in the
	prototypalApproach.
*/
//Super function
var mammal = function(spec) {
    var that = {};
    that.get_name = function() {
        return spec.name;
    };
    that.says = function() {
        return spec.saying || '';
    }
    return that;
};
//Inherited to cat
var cat = function(spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function(n) {
        var i, s = '';
        for (i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    };
    that.get_name = function() {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    }
    return that;
};
//Instantiating cat
var myCat = cat({
    name: 'Henrietta'
});
//checking the results
console.log(myCat.get_name(), ' ', myCat.says(), ' ', myCat.purr(5));

//Lets desing cool-cat now
Object.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

Object.method('superior', function(name) {
    var that = this;
    method = that[name];
    return function() {
        return method.apply(that, arguments);
    };
});

var coolCat = function(spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');
    that.get_name = function(n) {
        return 'like ' + super_get_name() + ' baby ' /*+ purr(5)*/;
    }
    return that;
};

var myCoolCat = coolCat({
    name: 'Bix'
});
console.log("what is this ? : ",myCoolCat.get_name());