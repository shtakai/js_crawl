var xml2js = require('xml2js');
var parseString = xml2js.parseString;
var util = require('util');

var parser = new xml2js.Parser();


var xml = "<fruits shop='AAA'>" +
	"<item price='140'>Banana</item>" +
	"<item price='200'>Apple</item>" +
	"</fruits>";

parseString(xml, function (err,result) {
	console.log(JSON.stringify(result));
	console.log("-----");
	parseString(xml,{trim:false},function (err,r) {
		console.log(r);
	});
	console.log("-----");
});

parser.parseString(xml,function (err,r)	 {
	console.log(util.inspect(r, false, null));
});
