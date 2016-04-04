var RSS_URL = "http://b.hatena.ne.jp/hotentry?mode=rss";
var client = require('cheerio-httpcli');

client.fetch(RSS_URL, {}, function (err, $, res) {
	if(err){ console.log("error"); return;}
	$("item").each(function (idx, item) {
		var title	= $(this).children('title').text();
		var desc	= $(this).children('description').text();
		var count	= $(this).children('hatena\\:bookmarkcount').text();
		console.log(count +" count " + title);
		console.log(desc);
		console.log("--------");
	});
});
