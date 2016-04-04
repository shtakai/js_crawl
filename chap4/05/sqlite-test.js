var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.sqlite');

db.serialize(function () {
	db.run('CREATE TABLE IF NOT EXISTS items(name, value)');

	var stmt = db.prepare('insert into items values(?,?)');
	stmt.run(["Banana", 300]);
	stmt.run(["Apple", 200]);
	stmt.run(["Orange", 100]);
	stmt.finalize();

	db.each("select * from items", function (err, row) {
		console.log(row.name + ":" + row.value);
	});
});

db.close();
