const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

const timeNowET = function()
{
	let timeNow = new Date();
	return timeNow.getHours()+":"+timeNow.getMinutes()+":"+timeNow.getSeconds();
}

const dateNowET=function()
{
	let timeNow = new Date();
	return timeNow.getDate()+". "+monthNamesET[timeNow.getMonth()]+" "+timeNow.getFullYear();
}

const timeOfDayET=function()
{
	let dayPart = "suvaline aeg";
	const hourNow=new Date().getHours();
	if (hourNow > 6 && hourNow <= 11)
	{
		dayPart="hommik";
	}
	else if (hourNow >= 12 && hourNow <= 14)
	{
		dayPart="keskpäev";
	}
	else if (hourNow > 14 && hourNow < 18)
	{
		dayPart="pärastlõuna";
	}
	else if (hourNow >= 18)
	{
		dayPart = "õhtu";
	}
	return dayPart;
}
//moodul ekspordib need asjad
module.exports = {dateNowET: dateNowET, timeNowET: timeNowET, monthsET: monthNamesET, timeOfDayET: timeOfDayET};