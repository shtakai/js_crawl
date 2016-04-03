var client = require('cheerio-httpcli');

var url = "http://www.aozora.gr.jp/index_pages/person81.html";
var param = {};

client.fetch(url, param, function (err, $, res) {
	if (err) {
		console.log("error:",err);
		return;
	}
  $("a").each(function (ifx) {
    var text = $(this).text();
    var href = $(this).attr('href');
    console.log(text + ":" + href);
  });

});
