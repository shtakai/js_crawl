var dotenv = require('dotenv').config();
// process.env.AWS_ID,

var keys = {
	api_key:	process.env.API_KEY
};

var Flickr = require('node-flickr');
var flickr = new Flickr(keys);

flickr.get("photos.search", {
  "text": "sushi",
  "sort": "interestingness-desc",
  "per_page": 5
}, function (err,result) {
	if(err){console.log("error"+err); return}
  // 写真数の情報 ----- (※4)
  var page = result.photos.page;
  var pages = result.photos.pages;
  var perpage = result.photos.perpage;
  var total = result.photos.total;
  console.log("total:", total);
  // 各写真の詳細情報を取得する
  var photo_list = result.photos.photo;
  for (var i in photo_list) {
    var p = photo_list[i];
    // URLを生成 ---- (※5)
    var url = "https://farm" + p.farm + ".staticflickr.com/" +
      p.server + "/" + p.id + "_" + p.secret + ".jpg";
    console.log(p);
    console.log("URL:" + url);
  }
});
