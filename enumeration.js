var stooge = {
"first-name": "Kumar",
"last-name": "Mishra",
"midle-name" : "Gaurav"
};
var another_stooge = Object.create(stooge);
stooge.profession = "lap dog";
console.log(JSON.stringify(another_stooge.profession));// got from the prototyped value of stooge
var i ;
var properties = ["first-name", "last-name", "midle-name", "profession"];
for(i = 0; i < properties.length; i += 1){
	console.log(properties[i], " : ", another_stooge[properties[i]]);
}