// var config = require('config');
var casper = require('casper').create({
	// verbose:	true,
	// logLevel:	'debug'
});
var system = require('system');
var utils = require('utils');
casper.start();
var BBS_USER = casper.cli.get(0);
var BBS_PASS = casper.cli.get(1);

casper.open("http://uta.pw/sakusibbs/users.php?action=login");
casper.then(function () {
	this.fill("form", {
		username_mmlbbs6:	BBS_USER,
		password_mmlbbs6:	BBS_PASS
	}, true);
});


casper.then(function () {
	this.open("http://uta.pw/sakusibbs/index.php");
	var getLink = function () {
		var q = document.querySelector('#header_menu_linkbar');
		return q.href;
	};
	var mypage_url = this.evaluate(getLink);
	this.echo("mypage url=" + mypage_url);
	this.open(mypage_url);

});

casper.then(function(){
  var pickupFav = function () {
    var res = [];
    var q = document.querySelectorAll('#favlist li > a');
    for (var i = 0; i < q.length; i++) {
      var text = q[i].textContent;
      var href = q[i].href;
      res.push(text);
    }
    return res;
  };
  var res = this.evaluate(pickupFav);
  this.echo("--- favlist ---");
  for (var i = 0; i < res.length; i++) {
    this.echo("- " + res[i]);
  }
});

casper.run();
