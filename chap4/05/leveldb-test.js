var levelup = require('level');
var db = levelup(__dirname +'/level');

db.put('Apple', 'red', function (err) {
	if(err){console.log('error' + err);return}
	testGet();
})

function testGet() {
	db.get('Apple', function (err, value) {
		if(err){console.log('error',err);return}
		console.log("Apple=" + value);
		testBatch();
	});
}

function testBatch() {
	db.batch()
	.put('Mango', 'yellow')
	.put('Banana', 'yellow')
	.put('Kiwi', 'green')
	.write(function (err, value) {
		console.log('Banana=' + value);
	});
}
