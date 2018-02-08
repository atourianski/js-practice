var results = [];

window.onload = function(){

function day(D3, tumeric, bComplex, fish, Mag, vitC, vitE, iron, food, coffee, bottled, tap, alcohol, notes){
	
	//date
	this.xDay = "<h3 id = 'todaysDate'>" + new Date().toDateString() + "</h3>"
	//supplements
	this.D3 ="<p class = 'name'>Vitamin D3:</p>" + "<p class = 'value'>" + D3 +  "</p><br><br>"
	this.tumeric ="<p class = 'name'>Tumeric:</p>" +  "<p class = 'value'>" +  tumeric  +  "</p><br><br>"
	this.bComplex ="<p class = 'name'>B Complex:</p>" +  "<p class = 'value'>" + bComplex +  "</p><br><br>"
	this.fish ="<p class = 'name'>Fish Oil</p>" +  "<p class = 'value'>" + fish +  "</p><br><br>"
	this.Magnesium_x ="<p class = 'name'>Magnesium:</p>" +  "<p class = 'value'>" + Mag +  "</p><br><br>"
	this.vitC = "<p class = 'name'>Vitamin C:</p>" +  "<p class = 'value'>" + vitC +  "</p><br><br>"
	this.vitE = "<p class = 'name'>Vitamin E:</p>" +  "<p class = 'value'>" + vitE +  "</p><br><br>"
	this.iron = "<p class = 'name'>Iron:</p>" + "<p class = 'value'>" + iron + "</p><br><br>"
	//food
	this.food = "<p class = 'name'>Food:</p>" + "<p class = 'value'>" + food + "</p><br><br>"
	//coffee
	this.coffee = "<p class = 'name'>Coffee:</p>" + "<p class = 'value'>" + coffee + "</p><br><br>"
	//water	
	this.bottled = "<p class = 'name'>Bottled Water:</p>" +  "<p class = 'value'>" + bottled +  "</p><br><br>"
	this.tap = "<p class = 'name'>Tap Water:</p>" +  "<p class = 'value'>" + tap +  "</p><br><br>"
	//alcohol
	this.alcohol = "<p class = 'name'>Alcohol:</p>" +  "<p class = 'value'>" + alcohol +  "</p><br><br>"
	this.notes = "<p class = 'name'>Notes:</p>" +  "<p class = 'value'>" + notes + "</p><br><br>"
	//break
	this.x = "<br>"
}


document.getElementById("submit").addEventListener("click", getElements)

//get inputs from html file and put them into localStorage

function getElements(){

var a = document.getElementById("D3").value;
var b = document.getElementById("tumeric").value;
var c = document.getElementById("bComplex").value;
var d = document.getElementById("fish").value;
var e = document.getElementById("Mag").value;
var f = document.getElementById("vitC").value;
var g = document.getElementById("vitE").value;
var h = document.getElementById("iron").value;
var i = document.getElementById("food").value;
var j = document.getElementById("coffee").value;
var k = document.getElementById("bottled").value;
var l = document.getElementById("tap").value;
var m = document.getElementById("alcohol").value;
var n = document.getElementById("notes").value;
var today = new day(a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
