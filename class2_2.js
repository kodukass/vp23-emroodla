const firstName = "Emma";
const lastName = "Roodla";
const dateInfo = require("./dateTime_et");
//lisame failisüsteemi moodul
const fs = require("fs");
let folkWisdom = [];

fs.readFile("txtfiles/vanasonad.txt", "utf8", (err, data)=>
{
	if(err)
	{
		console.log(err);
	}
	else 
	{
		//console.log(data);
		folkWisdom = data.split(";");
		//console.log(folkWisdom);
		//console.log("Vanasõnu on "+folkWisdom.length);
		onScreen();
	}
}); //readfile lõppeb

const onScreen = function()
{
	console.log(firstName + " " + lastName);
	console.log(dateInfo.dateNowET());
	//console.log("Tänane tarkus: "+folkWisdom[Math.floor(Math.random() * folkWisdom.length)]);
	for (let i = 0; i < folkWisdom.length; i++)
	{
		console.log((i+1)+") "+folkWisdom[i]);
	}
	console.log("Kell on: "+dateInfo.timeNowET());
	console.log("on "+dateInfo.timeOfDayET()+".");
	console.log(dateInfo.monthsET);
}