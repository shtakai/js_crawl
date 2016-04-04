var FB = require('fb');
var dotenv = require('dotenv').config();

FB.setAccessToken(process.env.FB_ACCESS_TOKEN);

FB.api('me/feed', 'get', {}, function (feed) {
	if(!feed){
		console.log('error');
		return;
	}
	var data = feed.data;
	for(var i in data){
		var row = data[i];
		console.log(row);
		console.log("==========");
	}
});
