obj = {
    "name": "Kumar Gaurav Mishra",
    "age": 26
};
var obj2 = obj;
obj2.goal = "Google";
var new_Obj = Object.create(obj);
new_Obj.name = "Kumar Gaurav Mishra";
new_Obj.occupation = "lap dog of hirepro consultings!! for time being";
new_Obj["age"] = "26";

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


console.log("Type of entity find in objects ",JSON.stringify({
	"id" : typeof obj3.id,
	"name": typeof obj.name,
	"goal": typeof obj2.goal,
	"utils" : typeof obj3.utils,
	"obj" : typeof obj3.obj, // Undefined because its properties are saved not the whole object
	"new_Obj" : typeof obj3.new_Obj// same goes in this case also
}));

console.log("using hasOwnProperty() function",obj3.hasOwnProperty("id"),"  ",obj3.hasOwnProperty("empId"));