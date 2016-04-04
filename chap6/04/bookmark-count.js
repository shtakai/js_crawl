var targetURL = "http://github.com";
var COUNT_API = "http://api.b.st-hatena.com/entry.count?url=";

var request = require('request');
var url = COUNT_API + escape(targetURL);

request(url, function (err, res, body) {
	console.log("count:" + body);
});
