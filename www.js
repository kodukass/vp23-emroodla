const http = require("http");
const dateInfo = require("./dateTime_et");


http.createServer(function(req, res)
{
	//määrame tagastavate andmete päise. et on veebileht
	res.writeHead(200, {"Content-Type":"text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Emma Mae Roodla, veebiprogrammeerimine</title></head><body>');
	res.write('<h1>Emma Mae Roodla</h1><p>See leht on loodud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudis õppetöö raames :D okei nii aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p><hr><p>Jumal hoia lõpuks sain ka ligi</p><hr><p>Kursus mille raames leht tehti on veebiprogrammeerimine</p></body></html>');
	//et see valmis ja saadetaks
	return res.end();
	
	//res.write('<script type="module" src="/src/main.js"></script>');
	//res.write('dateInfo')
}
,dateInfo.midagimidagi(function(req,res)
	{
		res.write('dateInfo')
	})
).listen(5208);
//http://greeny.cs.tlu.ee:5208/