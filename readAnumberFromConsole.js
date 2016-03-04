/*
	File: readAnumberFromConsole.js
	--------------------------------
	This program users different ways to read the data from the user
	and then prints the data one the screen.
*/
var readLine = require('readline');
// One way to do this
var rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number ? ', (answer) => {
  console.log('You have entered :', answer);
  rl.close();
});

//Another way to do this
console.log("Please enter a number : ");
process.stdin.on('data', (chunk) =>{
	process.stdout.write("You have entered : " + +chunk + "\n");
	process.exit();
});