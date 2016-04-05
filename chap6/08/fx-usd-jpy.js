var client = require('cheerio-httpcli');

var code = 'USDJPY';
var url = "http://info.finance.yahoo.co.jp/fx/detail/";

client.fetch(url, {"code": code}, function (err, $, res) {
	if(err){console.log(err); return;}

	var bid = $("#USDJPY_detail_bid").text();
	var ask = $("#USDJPY_detail_ask").text();

	console.log("Bid = " + bid);
	console.log("Ask = " + ask);
});
