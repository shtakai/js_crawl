var dotenv = require('dotenv').config();
var Youtube = require('youtube-node');
var youtube = new Youtube();

youtube.setKey(process.env.YOUTUBE_KEY);

var keyword = "street india food";
var limit = 5;

youtube.addParam('order', 'rating');
youtube.addParam('type', 'video');
youtube.addParam('videoLicense', 'creativeCommon');
// youtube.addParam();

youtube.search(keyword, limit, function (err, result) {
	if(err){console.log("error "+err); return;}
	// console.log(JSON.stringify(result, null, 2));
	var items = result["items"];
	for(var i in items){
		var it = items[i];
		var title = it["snippet"]["title"];
		var video_id = it["id"]["videoId"];
		var url = "https://www.youtube.com/watch?v=" + video_id;
		console.log("+ " + title);
		console.log("| " + url);
		console.log("------");
	}
});
