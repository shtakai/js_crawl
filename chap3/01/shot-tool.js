var casper = require('casper').create();
var utils = require('utils');

var url = casper.cli.args[0];
var savepath = casper.cli.args[1];

casper.start();
casper.viewport(1024, 768);
casper.open(url);
casper.then(function () {
	this.capture(savepath,{
		top:0, left:0, width:1024, height:768
	});
});
casper.run();
