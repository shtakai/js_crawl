var url_list = [
	"http://github.com",
	"https://twitter.com",
	"http://www.amazon.co.jp"
];

var COUNT_API = "http://api.b.st-hatena.com/entry.counts";

var request = require('request');

var params = [];
for(var i in url_list){
	params.push("url=" + escape(url_list[i]));
}

var url = COUNT_API + "?" +params.join("&");

request(url, function (err, res, body) {
	var obj = JSON.parse(body);
	for(var key in obj){
		console.log(key + " count: " + obj[key]);
	}
});
