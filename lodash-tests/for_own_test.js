'use strict';
var _ = require('lodash'),
	bunyan = require('bunyan'),
	logger = bunyan.createLogger({
		name : 'prideSupermacy',
		streams : [{
			level : 'info',
			stream : process.stdout
		},{
			level : 'info',
			path : './temp/prideS.log'
		}]
	});
var obj = {
	"first-name" : "Kumar",
	"middle-name": "Gaurav",
	"last-name" : "Mishra",
	"age" : 26,
	"possessions" : "1st Level lust and 2nd Level greed",
	"address" : "Kaluyuga or Hell"
};
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 /*_.forOwn(obj,function(value,key){
 	logger.info(key ," : " , value);
 });*/

logger.info(_.chunk(arr,2));