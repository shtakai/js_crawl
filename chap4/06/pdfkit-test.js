var PDFDocument = require('pdfkit');
var fs = require('fs');

var doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));
doc.font('sazanami-gothic.ttf');

doc.fontSize(30)
	.text('今日の格言 ', 90, 100);
doc.fontSize(20)
	.text("テスト・テスト/n/n"+
				"test",
				100,180);


doc.save()
		.moveTo(80, 80)
		.lineTo(250, 80)
		.lineTo(250, 150)
		.lineTo(80, 150)
		.lineTo(80, 80)
		.stroke("#0000FF");

doc.addPage();

doc.save()
	.moveTo(100, 150)
	.lineTo(100, 250)
	.lineTo(200, 250)
	.fill('#FF0000');

doc.end();
