var sjw = [/injustice/gi, /postmodern/gi, /inequality/gi, /inequity/gi, /Marx/gi, /diversity/gi, /multiculturalism/gi, /patriarchy/gi, /racism/gi, /sexism/gi, /cisgender/gi];
var storage = [];
var elements = document.body.getElementsByTagName("*");
for(i in elements){
	try{	
		storage.push(elements[i].lastChild.data)
	}
	catch(err){
		storage.push(elements[i].innerText)
		if(elements[i].innerText === undefined){
			console.log("well shit")	
		}
	}

}



var readyToScan = storage.join();

for(x in sjw){
	var scan = readyToScan.match(sjw[x]);
		if(scan != null){
			console.log(scan)
		}
}


