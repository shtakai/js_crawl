var dotenv = require('dotenv').config();
var fs = require('fs');
var request = require('request');

var keys = {
	api_key:	process.env.API_KEY
};

var KEYWORD = "sushi";
var PHOTO_DIR = __dirname + "/photo";

var Flickr = require('node-flickr');
var flickr = new Flickr(keys);

if(!fs.existsSync(PHOTO_DIR)) fs.mkdirSync(PHOTO_DIR);


flickr.get("photos.search", {
  "text": 		encodeURIComponent(KEYWORD),
  "sort": 		"interestingness-desc",
  "per_page": 20,
	"license":	4
}, function (err,result) {
	if(err){console.log("error"+err); return}
  var photo_list = result.photos.photo;
  for (var i in photo_list) {
    var p = photo_list[i];
    var url = "https://farm" + p.farm + ".staticflickr.com/" +
      p.server + "/" + p.id + "_" + p.secret + ".jpg";
		var fname = PHOTO_DIR + "/" + p.id + ".jpg";
		console.log("+ " + p.title);
		console.log("| URL:" + p.url);
		request(url).pipe(fs.createWriteStream(fname));
  }
});
