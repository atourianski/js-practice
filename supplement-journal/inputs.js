var results = [];

window.onload = function(){

function day(D3_1000iu, K2_100mcg, B6_B12_Folic, DHA_280mcg_EPA_420mcg, Magnesium_x, bottled, tap, alcohol, notes){
	
	//date
	this.xDay = "<h3 id = 'todaysDate'>" + new Date() + "</h3>"
	//supplements
	this.D3_1000iu ="<p class = 'name'>D3_1000iu:</p>" + "<p class = 'value'>" + D3_1000iu +  "</p><br>"
	this.K2_100mcg ="<p class = 'name'>K2_100mcg:</p>" +  "<p class = 'value'>" +  K2_100mcg +  "</p><br>"
	this.B6_B12_Folic ="<p class = 'name'>B6_B12_Folic:</p>" +  "<p class = 'value'>" + B6_B12_Folic +  "</p><br>"
	this.DHA_280mcg_EPA_420mcg ="<p class = 'name'>DHA_280mcg_EPA_420mcg:</p>" +  "<p class = 'value'>" + DHA_280mcg_EPA_420mcg +  "</p><br>"
	this.Magnesium_x ="<p class = 'name'>Cal_333mg_Mag_167mg:</p>" +  "<p class = 'value'>" + Magnesium_x +  "</p><br>"
	//water
	this.bottled = "<p class = 'name'>bottled water:</p>" +  "<p class = 'value'>" + bottled +  "</p><br>"
	this.tap = "<p class = 'name'>tap water:</p>" +  "<p class = 'value'>" + tap +  "</p><br>"
	//alcohol
	this.alcohol = "<p class = 'name'>alcohol:</p>" +  "<p class = 'value'>" + alcohol +  "</p><br>"
	this.notes = "<p class = 'name'>notes:</p>" +  "<p class = 'value'>" + notes + "</p><br>"
	//break
	this.x = "<br>"
}


document.getElementById("submit").addEventListener("click", getElements)

//get inputs from html file and put them into localStorage

function getElements(){

var a = document.getElementById("D3_1000iu").value;
var b = document.getElementById("K2_100mcg").value;
var c = document.getElementById("B6_B12_Folic").value;
var d = document.getElementById("DHA_280mcg_EPA_420mcg").value;
var e = document.getElementById("Magnesium_x").value;
var f = document.getElementById("bottled").value;
var g = document.getElementById("tap").value;
var h = document.getElementById("alcohol").value;
var i = document.getElementById("notes").value;
var today = new day(a,b,c,d,e,f,g,h,i);
results.push(today);
console.log(results);
	function storeDay(key, value){
	var values = [localStorage.getItem(key)];
		if (values === null){
			values = [];
			alert("There are no journal entries");
		};
	values.push(value);
	localStorage.setItem(key, values);
	};
var join = Object.values(results[results.length -1]).join("");
storeDay("day", join);
}
}
