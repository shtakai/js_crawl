var casper = require('casper').create();

casper.start();

casper.open('http://google.co.jp');

casper.then(function () {
	casper.capture("screenshot.png");
});

casper.run();
