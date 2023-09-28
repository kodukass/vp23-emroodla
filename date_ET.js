exports.dateNowET = function()
{
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	
	//Ülesandeks jäi meie tunnis tehtule lisada uus moodul ka kellaaja jaoks Eesti moodi.

	//Ehk siis tooge nähtavale ka kellaaeg kujul tunnid:minutid:sekundid

	//Kasutada saab Date funktsioone getHours(), getMinutes() ja getSeconds().

	//Kohendage nii kellaaja kui ka tunnis tehtud kuupäeva moodulit nii, et oleks võimalikult vähe muutujaid ehk siis kuupäeva 
	//või kellaaja õigel kujul esitava muutuja väärtuse määramisel võiks eespool kasutusele võetud muutujad asendada otse kasutatud 
	//funktsioonidega.
	let timeNow = new Date();
	//let dateNow = timeNow.getDate();
	//let monthNow = timeNow.getMonth();
	//let yearNow = timeNow.getFullYear();
	//let completeDate = dateNow + "." + (monthNow+1) + "." + yearNow;
	//return timeNow.getDate()+"."+(timeNow.getMonth()+1)+"."+timeNow.getFullYear();
	return timeNow.getDate()+". "+monthNamesET[timeNow.getMonth()]+" "+timeNow.getFullYear();
	//let hourNow = timeNow.getHours();
	//let minuteNow = timeNow.getMinutes();
	//let secNow = timeNow.getSeconds();
	//let completeTime = hourNow + ":" + minuteNow + ":" + secNow;
	return timeNow.getHours()+":"+timeNow.getMinutes()+":"+timeNow.getSeconds();
	//return completeDate;
	return completeTime;
}
//monthNamesET[0]
//monthNamesET[timeNow.getMonth()]

//console.log(Date());
//console.log(yearNow);
//console.log("Täna on: " + dateNow + "." + (monthNow+1) + "." + yearNow);