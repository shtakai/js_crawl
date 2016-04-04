var dotenv = require('dotenv').config();
var Youtube = require('youtube-node');
var youtube = new Youtube();

youtube.setKey(process.env.YOUTUBE_KEY);

var keyword = "street india food";
var limit = 3;

youtube.search(keyword, limit, function (err, result) {
	if(err){console.log("error "+err); return;}
	console.log(JSON.stringify(result, null, 2));
})
