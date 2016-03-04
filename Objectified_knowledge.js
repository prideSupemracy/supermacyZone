//Ways to create new objects in javascript
//Empty object
var obj = {};
var fun = function() {};
var empty_Object = new fun();
var anothe_empty_object = Object.create(fun);

//Non Empty Objects
obj = {
    "name": "Kumar Gaurav Mishra",
    "age": 26
}
console.log(JSON.stringify(obj));

//passing one object reference to anothe object
var obj2 = obj;
obj2.name = "Unknown";
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj2));
//var new_Obj = new obj(); doesn't work

//Create a new object with old objects with new memory location
var new_Obj = Object.create(obj);
new_Obj.name = "Kumar Gaurav Mishra";
console.log(JSON.stringify(new_Obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj2));

//Playing with object properties
new_Obj.occupation = "lap dog of hirepro consultings!! for time being";
//new_Obj[experiance] = "10 months"; Can't define object properties this way only
//defined properties can be accessed this way
new_Obj["age"] = "26";
console.log("=================new_Obj===================: ", JSON.stringify(new_Obj));

//Retrival of the properties of the object properties
console.log("=====================object Retrival=======================");
obj.profession = "lap dog";
console.log(new_Obj.profession);
new_Obj.date_of_death = "29-9-2099"; //this is a new property which only belongs to the new_Object and not it's parent object.
console.log(new_Obj["name"]);
console.log(obj.date_of_death);
console.log(new_Obj.age);
console.log(new_Obj.leg || "No leg found");//Can be fixed undefind problem this way.
//console.log(new_Obj.leg.finger); throws error because that property is not found

//Inheretense in objects by using internal prototyping
var inherit = Object.create(new_Obj);
console.log("================= cyclic object obj =====================" + JSON.stringify(obj));// This does not work because it has cyclic inheritance.
console.log("================= cyclic object obj2 =====================" + JSON.stringify(obj2));//This works becaus it has old referance of obj.
console.log("================= cyclic object new_Obj =====================" + JSON.stringify(new_Obj));
console.log("================= object multilevel inheritance check =====================" + JSON.stringify(inherit.date_of_death));//works

//Object.create have different benifit
var obj3 = Object.create(obj2, {
		"id" : {
			value : 29,
			enumerable: true
		},
		"empId" :{
			value : 5673,
			enumerable: true
		} ,
		"utils" : {
			value : {
				"hobby" :  "Music",
				"interests" :  "Coading and Computer"
			},
			enumerable: false // This will not show while stringifying the object in the console only enumerable true will show
		},
		obj,
		new_Obj
});
console.log("--------------Object.create benifits----------------------", JSON.stringify(obj3.utils));
console.log("--------------Object.create benifits----------------------", JSON.stringify(obj3.name));//The properties of obj2 also has enumerable : false value by default and also unchangable

// Deleting a property from an object
delete obj.name;
console.log("===========after Deleting name from obj expected false ========================" , ("name" in obj)); // This works for only simple objects and not prototyped objects.
delete obj3.empId;
console.log("===========after Deleting empId from obj3 expected true because delete doesn't work with prototyped object ========================" , ("empId" in obj3));