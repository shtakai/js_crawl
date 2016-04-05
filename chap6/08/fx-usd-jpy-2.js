var client = require('cheerio-httpcli');

var baseCode = "JPY";
var codeList = [
	"JPY", "USD", "EUR", "AUD", "GBP",
	"NZD", "CAD", "CHF", "ZAR", "CNH", "HKD"
];

var url = "http://info.finance.yahoo.co.jp/fx/detail/";

for(var i in codeList){
	var a = codeList[i];
	if(a == baseCode) continue;
	var code = a + baseCode;
	getFx(code);
}

function getFx(code) {
	client.fetch(url, {"code": code}, function (err, $, res) {
		if(err){console.log(err); return;}

		var bid = $("#" + code +"_detail_bid").text();
		var ask = $("#" + code +"_detail_ask").text();

		console.log("+ " + code);
		console.log("|  Bid = " + bid);
		console.log("|  Ask = " + ask);
		console.log("--------");
	});
}
