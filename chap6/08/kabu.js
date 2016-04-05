var client = require('cheerio-httpcli');

var code = "8411";
var url = "http://stocks.finance.yahoo.co.jp/stocks/detail/";

client.fetch(url, {"code": code}, function (err, $, res) {
	if(err){console.log(err); return;}

	var price = $("td.stoksPrice").text().replace(/\s/g, "");
	// var price = $("td.stoksPrice").text().replace(/\s/g, "");

	var name	= $("th.symbol > h1").text();

	console.log("+ " + code);
	console.log("|  name  = " + name);
	console.log("|  price = " + price);
});
