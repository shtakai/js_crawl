var TARGET_URL = "http:/www.yahoo.com";

var casper = require('casper').create();
casper.start();

casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1');

casper.viewport(750, 1334);
casper.open(TARGET_URL);

casper.then(function () {
	this.capture('screenshot_i.png');
});

casper.run();
