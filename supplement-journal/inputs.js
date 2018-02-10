var results = [];

window.onload = function(){

function day(D3, tumeric, bComplex, fish, Mag, vitC, vitE, iron, food, coffee, bottled, tap, alcohol, notes){
	
	//date
	this.xDay = "<h3 id = 'todaysDate'>" + new Date().toDateString() + "</h3>"
	//supplements
	this.D3 ="<li class = 'list-group-item'><b>Vitamin D3:</b> &nbsp&nbsp " + D3 + "</li>"
	this.tumeric ="<li class = 'list-group-item'><b>Tumeric:</b> &nbsp&nbsp" + tumeric  +  "</li>"
	this.bComplex ="<li class = 'list-group-item'><b>B Complex:</b> &nbsp&nbsp" + bComplex +  "</li>"
	this.fish ="<li class = 'list-group-item'><b>Fish Oil:</b> &nbsp &nbsp" + fish +  "</li>"
	this.Magnesium_x ="<li class = 'list-group-item'><b>Magnesium:</b> &nbsp &nbsp" + Mag +  "</li>"
	this.vitC = "<li class = 'list-group-item'><b>Vitamin C:</b> &nbsp&nbsp" + vitC +  "</li>"
	this.vitE = "<li class = 'list-group-item'><b>Vitamin E:</b> &nbsp&nbsp" + vitE +  "</li>"
	this.iron = "<li class = 'list-group-item'><b>Iron:</b> &nbsp&nbsp" + iron + "</li>"
	//food
	this.food = "<li class = 'list-group-item'><b>Food:</b> &nbsp&nbsp" + food + "</li>"
	//coffee
	this.coffee = "<li class = 'list-group-item'><b>Coffee:</b>&nbsp&nbsp" + coffee + "</li>"
	//water	
	this.bottled = "<li class = 'list-group-item'><b>Bottled Water:</b>&nbsp&nbsp" + bottled +  "</li>"
	this.tap = "<li class = 'list-group-item'><b>Tap Water:</b>&nbsp&nbsp" + tap +  "</li>"
	//alcohol
	this.alcohol = "<li class = 'list-group-item'><b>Alcohol:</b>&nbsp&nbsp" +  alcohol +  "</li>"
	//notes
	this.notes = "<li class = 'list-group-item'><b>Notes:</b>&nbsp&nbsp" +  notes + "</li>"
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
