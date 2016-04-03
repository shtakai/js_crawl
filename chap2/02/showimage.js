var client = require('cheerio-httpcli');
var URL = require('url');


var url = encodeURI("http://ja.wikipedia.org/wiki/イヌ");
var param = {};
client.fetch(url, param, function(err, $, res) {
  if (err) { console.log("error"); return; }
  $("img").each(function(idx) {
    var src = $(this).attr('src');
    src = URL.resolve(url, src);
    console.log(src);
  });
});
