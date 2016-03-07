/*
	File: fibonacci.js
	-------------------
	This program uses different ways to generate fibonacci sequence,
	and then conclude that which is the best way to generate it and
	it justify the concluson on the basis of the function call of
	the fibonacci function.
*/

// 1st way to generate fibonacci sequence, in this way the fibonacci called 454 times.
var count  = 1;
var fibonacci1 = function(n){
	console.info("fibonacci1 Called : " , count += 1);
	return n < 2 ? n : fibonacci1(n - 1) + fibonacci1(n - 2);
}

console.info(" ==============1st result=============");
for(var i = 0; i <= 10; i += 1){
	console.info(i , " : " , fibonacci1(i));
}
count = 1;
//=============== In above case we can reduce the function calls if we memorize the previous results======================


// 2nd way to generate the fibonacci sequence,in this way the fibonacci called 30 times.

var fibonacci2 = function(){
	var memo = [0, 1];
	var fib = function(n){
		console.info("fibonacci2 Called : " , count += 1);
		var result = memo[n];
		if(typeof result !== 'number'){
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();

console.info(" ==============2nd result=============");
for(var i = 0; i <= 10; i += 1){
	console.info(i , " : " , fibonacci2(i));
}
count = 1;

//============== In above function only load distrubution is missing which we will do in the next one ================================

// 3rd way to generate the fibonacci sequence, fibonacci function is getting called 10 times only.

//======= creating a function which will do memorization for us =======
var memorizer = function(memo, fundamental){
	var shell = function(n){
		var result = memo[n];
		if(typeof result !== 'number'){
			result = fundamental(shell, n);
			memo[n] = result;
		}
		return result;
	};
	return shell;
}

// ========== Actual fibonacci function ==========

var fibonacci = memorizer([0, 1], function(shell, n){
	console.info("fibonacci Called : " , count += 1);
	return shell(n - 1) + shell(n - 2);
});

console.info(" ==============3rd result=============");
for(var i = 0; i <= 10; i += 1){
	console.info(i , " : " , fibonacci(i));
}


// Bonus program to calculate factorials
var factorial = memorizer([1, 1], function(shell, n){
	return n * shell(n - 1);
});
console.info(" ==============factorial result=============");
for(var i = 0; i <= 10; i += 1){
	console.info(i , " : " , factorial(i));
}
