var expArray = [];
expArray[10000] = true;
expArray[10] = "Kumar";
console.log(expArray.length);
console.log(expArray[10]);
expArray.push("Gaurav");
console.log(expArray.length);
console.log(expArray[10001]);
/*delete expArray[10000];
console.log(expArray);*/
expArray.splice(11,10000,"Hello", "Kumar");
console.log(expArray);

console.log("Is Array really an array in javascript ?  typeof Array : " , typeof expArray);