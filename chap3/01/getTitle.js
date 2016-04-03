var TARGET_URL = "http://kujirahand.com";
var casper = require('casper').create();

casper.start(TARGET_URL, function () {
	console.log(this);
	this.echo(casper.getTitle());
	console.log(casper.getTitle());
});

casper.run();
