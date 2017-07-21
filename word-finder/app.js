
var sjw = [/neoliberal/gi, /heteronormative/gi, /patriarchy/gi, /microagression/gi, /intersectional/gi, /misogyny/gi, /trigger/gi, /injustice/gi, /postmodern/gi, /inequality/gi, /inequity/gi, /Marx/gi, /diversity/gi, /multiculturalism/gi, /patriarchy/gi, /racism/gi, /sexism/gi, /cisgender/gi, /decontruct/gi, /limn/gi, /problematize/gi, /commodification/gi];

var storage = [];

var results = [];

var info = [];

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

function totalCounter(){
	var totalCount = 0;

		for (i in results2){
			totalCount++
		}
	info.push("<b>There are " + totalCount + " occurences of SJW buzzwords on this page</b><br>");
	
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
			info.push(word + " appears " + count + " time");
			info.push("<br>")
		}
		else{
			info.push(word + " appears " + count + " times");
			info.push("<br>")
		}
	}
	
}


var results2 = [].concat.apply([], results);

totalCounter()

for (y in sjw){
	counter(sjw[y].source)
}

var readyFormat = info.join("");

var opened = window.open('', '_blank', 'toolbar=0,location=0,menubar=0,height=500px,width=500px');
opened.document.write("<html><head><title>MyTitle</title></head><body>" + 
readyFormat
 + "</body></html>");

 







