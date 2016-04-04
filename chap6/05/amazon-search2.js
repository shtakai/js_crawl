var dotenv = require('dotenv').config();
var OperationHelper = require('apac').OperationHelper;
var cheerio = require('cheerio');

var opHelper = new OperationHelper({
	awsId:		process.env.AWS_ID,
	awsSecret:	process.env.AWS_SECRET,
	assocId:	process.env.ASSOC_ID,
	endPoint:	process.env.END_POINT
});

opHelper.execute('ItemSearch',{
	'SearchIndex':		'Books',
	'BrowseNode':			465610,
	'Keywords':				'香港',
	'ResponseGroup':	'Small,OfferSummary',
	'Sort':						'salesrank',
	'MinimumPrice':		10,
	'MaximumPrice':		8000
}, function (err, results, xml) {
	if(err){console.log("error"); return;}
	var $ = cheerio.load(xml);
  // 商品情報を抽出する ----- (※3)
  $("Items > Item").each(function(idx, item) {
    var ASIN = $(item).children("ASIN").text();
    var author = $(item).find("Author").text();
    var title = $(item).find("Title").text();
    console.log(title + " - "+ author + " : " + ASIN);
  });
});
