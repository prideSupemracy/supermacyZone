(function(){
	var pageNo = 3;
	var shownCount = 0;
	var response = {
		count : 21
	};

	shownCount = (pageNo > 0)? ((response.count < (10 + (pageNo) * 10)) ? (shownCount = response.count) : (shownCount = (10 + (pageNo) * 10))) : 10;
	console.log(shownCount);
})();