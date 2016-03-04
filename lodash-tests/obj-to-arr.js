'use strict';
var _ = require('lodash');

var obj = {
    "id": [249, 250, 251],
    "capacity": [6, 10, 4, 13],
    "typeId": [2, 3, 129],
    "buildingId": 11,
    "floorId": [17, 18, 19],
    "floorPartId": [14, 16, 17, 18],
    "tenantId": 1,
    "from": "2016-01-22 T10:10:00:000Z",
    "to": "2016-02-10 12:40:00.000Z"
};

function jsonToArray(object) {
    let arr = [],
        ob = {};
    _.forOwn(obj, function(value, key) {
        ob[key] = value;
        arr.push(ob);
        ob = {};
    });
    return arr;
}
console.log("====================================");
console.log(JSON.stringify(jsonToArray(obj)));
