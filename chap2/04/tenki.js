var RSS = "http://rss.weather.yahoo.co.jp/rss/days/4410.xml";
var parseString = require('xml2js').parseString;
var request = require('request');

request(RSS, function (err,r,body) {
	if(!err && r.statusCode == 200){
		analyzeRSS(body);
	}
});

function analyzeRSS(xml) {
	parseString(xml,function (err,obj) {
		if(err){console.log(err);return;}
		console.log(JSON.stringify(obj));
		console.log("-----");
		var items = obj.rss.channel[0].item;
		for(var i in items){
			var item = items[i];
			console.log(item.title[0]);
		}
	});
}
