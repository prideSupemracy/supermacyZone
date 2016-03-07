/*
	File: serialMaker.js
	---------------------
	This program produces a string which has two parts: prefix 
	and sequence number. The object has methods for setting
	prefix and sequence number and a gensSym method to produce
	a unique string.
*/
var serial_maker = function(){
	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function(p){
			prefix = String(p);
		},
		set_seq : function(s){
			seq = s;
		},
		gensSym: function(){
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensSym();
console.info(unique);