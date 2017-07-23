var btn = document.createElement("BUTTON");        
btn.onclick = trigger;
btn.style.background = 'yellow';
btn.style.zIndex = '1000';
btn.style.fontSize = 'large';
btn.style.fontWeight = 'bolder';
btn.style.height = '50px';
btn.style.width = '300px';
var t = document.createTextNode("Scan for Buzzwords");       
btn.appendChild(t);                               

function prependChild(parent, newFirstChild) {

	var head = document.getElementsByTagName('head');
	parent.insertBefore(newFirstChild, parent.firstChild)
};

prependChild(document.body, btn)

function trigger(){


var sjw = [/patriarchal/gi, /problematic/gi, /commodify/gi, /neoliberal/gi, /heteronormative/gi, /patriarchy/gi, /microagression/gi, /intersectional/gi, /misogyny/gi, /trigger/gi, /injustice/gi, /postmodern/gi, /inequality/gi, /inequity/gi, /Marx/gi, /diversity/gi, /multiculturalism/gi, /racism/gi, /sexism/gi, /cisgender/gi, /decontruct/gi, /limn/gi, /problematize/gi, /commodification/gi];

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
	info.push("<div class='container-fluid'><div class='row'><div class='col-md-4'><span class='text-center'><h3><b>" + totalCount + " occurences of SJW buzzwords on this page</b></h3></span><br></div></div>");
	
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
			info.push("<div class='container-fluid'><div class='text-center'><b><span style='color:red'>" + word + "</span></b> appears " + count + " time" + "</div></div>");
			info.push("<br>")
		}
		else{
			info.push("<div class='container-fluid'><div class='text-center'><b><span style='color:red'>" + word + "</span></b> appears " + count + " times" + "</div></div>");
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

opened.document.write("<html><head><title>SJW buzzwords</title><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css' integrity='sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp' crossorigin='anonymous'></head><body>" + 
readyFormat
 + "</body></html>");

}





