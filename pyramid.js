var num = 50;
var space = (num / 2) - 2;
var k = 1;
var count = 1;
for(var i = (space + 1); i > 0; i -= 1){

	for(var j = 1; j < i; j += 1){
		if(k > num){
			break;
		}
		process.stdout.write(' ');
	}
	for(var m = 0 ; m < count ; m ++){
		if(k > num){
			break;
		}
		
		process.stdout.write(k++ + ' ');
	}
	console.log();
	if(k > num){
			break;
		}
	count++;
	
}
