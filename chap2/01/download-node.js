var url,
    savepath,
    http,
    fs,
    outfile;

url   = "http://kujirahand.com/";
savepath  = "test.html";
http  = require('http');
fs    = require('fs');

outfile = fs.createWriteStream(savepath);

http.get(url, function (res)  {
  res.pipe(outfile);
  res.on('end', function () {
    outfile.close();
    console.log("ok");
  });
});
