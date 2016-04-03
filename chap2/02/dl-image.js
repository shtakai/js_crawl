var client = require('cheerio-httpcli');
var URL = require('url');
var request = require('request');
var fs = require('fs');

var savedir = __dirname + "/img"
if(!fs.existsSync(savedir)){
	fs.mkdirSync(savedir);
}

var url = encodeURI("http://ja.wikipedia.org/wiki/イヌ");
var param = {};
client.fetch(url, param, function(err, $, res) {
  if (err) { console.log("error"); return; }
  $("img").each(function(idx) {
    var src = $(this).attr('src');
    src = URL.resolve(url, src);
		var fname = URL.parse(src).pathname;
		fname= savedir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');
		request(src).pipe(fs.createWriteStream(fname));
		console.log(src);
  });
});
