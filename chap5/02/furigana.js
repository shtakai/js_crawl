var fs = require('fs');
var Mecab = require('./mecab-mod.js');
var mecab = new Mecab();

var args = process.argv;
args.shift();
args.shift();

if(args.length <= 0){
	console.log("furigana.js text");
	process.exit();
}

var inputfile = args.shift();
var txt = fs.readFileSync(inputfile,  "utf-8");

mecab.parse(txt, function (err, items) {
	var res = "";
	for(var i in items){
		var k = items[i];
		var word = k[0];
		var kana = k[8];
		if(k == "EOS") continue;
		if(word == kana || isHiragana(word)){
			res += word;
		}else{
			res += word + "(" + kana + ")";
		}
	}
	console.log(res);
});

function isHiragana(s) {
	return (s.match(/^[あ-ん]+$/));
}
