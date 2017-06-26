
var sjw = [/injustice/gi, /postmodern/gi, /inequality/gi, /inequity/gi, /Marx/gi, /diversity/gi, /multiculturalism/gi, /patriarchy/gi, /racism/gi, /sexism/gi, /cisgender/gi];

var storage = [];

var results = [];

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

var storage2 = storage.join();

	for(x in sjw){
		var scan = storage2.match(sjw[x]);
			if(scan != null){
				results.push(scan);	
			}
	}

function counter(word){
	var countTotal = 0;
	var count = 0;
	for(i in results2){
		countTotal++;
		if(results2[i] == word){
			count++
		}
	}
	console.log("There are " + countTotal + " occurences of SJW buzzwords on this page");
	
	if(count != 0){
	console.log(count + " occurences of " + word + " on this page");
	}
	
}


var results2 = [].concat.apply([], results);
console.log(results2);
counter("postmodern")
