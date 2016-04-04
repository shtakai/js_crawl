var FB = require('fb');
var dotenv = require('dotenv').config();
FB.setAccessToken(process.env.FB_ACCESS_TOKEN);

var msg = "test dayo ka.";
FB.api('me/feed', 'post', {message: msg}, function (res) {
	if(!res){console.log("error"); return;}
	console.log(res);
});
