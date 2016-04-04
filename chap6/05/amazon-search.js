var dotenv = require('dotenv').config();
var OperationHelper = require('apac').OperationHelper;
// process.env.

var opHelper = new OperationHelper({
	awsId:		process.env.AWS_ID,
	awsSecret:	process.env.AWS_SECRET,
	assocId:	process.env.ASSOC_ID,
	endPoint:	process.env.END_POINT
});

opHelper.execute('ItemSearch',{
	'SearchIndex':		'Books',
	'BrowseNode':			465610,
	'Keywords':				'宮沢賢治',
	'ResponseGroup':	'Small,OfferSummary',
	'Sort':						'saalesrank',
	'MinimumPrice':		10,
	'MaximumPrice':		8000
}, function (err, results, xml) {
	if(err){console.log("error"); return;}
	var Items = results.ItemSearchResponse.Items;
	console.log(Items);
	console.log(xml);
});
