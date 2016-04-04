var url = "http://www.aozora.gr.jp/cards/000081/files/46605_31178.html";
var savepath = "test.pdf";

var casper = require('casper').create();
casper.start();

casper.page.paperSize = {
	width:	'8.15in',
	height:	'11in',
	orientation:	"portrait",
	margin:	'1cm'
};
casper.open(url);
// casper.then(function () {
// 	var els = $('h4');
// 	casper.echo(els);
// 	for(var i = 0; i < els.length; i++){
// 		var e = els[i];
// 		e.style.backgroundColor = "red";
// 		e.style.color = "white";
// 	}
// });

casper.then(function () {
	casper.capture(savepath);
});

casper.run();
