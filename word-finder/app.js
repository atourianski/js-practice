
var sjw = [/neoliberal/gi, /heteronormative/gi, /patriarchy/gi, /microagression/gi, /intersectional/gi, /misogyny/gi, /trigger/gi, /injustice/gi, /postmodern/gi, /inequality/gi, /inequity/gi, /Marx/gi, /diversity/gi, /multiculturalism/gi, /patriarchy/gi, /racism/gi, /sexism/gi, /cisgender/gi];

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
	var count = 0;
		for(i in results2){
		if(results2[i].toLowerCase() == word){
			count++
					}
	}
		
	if(count != 0){
		if(count == 1){
			console.log(word + " appears " + count + " time");
		}
		else{
			console.log(word + " appears " + count + " times");
		}
	}
	
}

function totalCounter(){
	var totalCount = 0;

		for (i in results2){
			totalCount++
		}
	console.log("There are " + totalCount + " occurences of SJW buzzwords on this page");
}

var results2 = [].concat.apply([], results);

for (y in sjw){
	counter(sjw[y].source)
}

totalCounter()
