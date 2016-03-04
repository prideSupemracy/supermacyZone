var _ = require('lodash');
var i = 10;
i: console.log(i);

var sum = function() {
    console.log(_.isArray(arguments)); // This give false because the given arguments is not an array so it misses all the array properties but length.
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
console.info(sum(4, 8, 15, 16, 23, 42)); // 108
