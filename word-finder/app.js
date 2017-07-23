//creating button that will trigger the event

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

function trigger(){					          //the function which will scan the page and create a window will all relevent info

//database of sjw buzzwords

var sjw = [/transphobic/gi,/transphobia/gi, /ableism/gi, /priviledge/gi, /colonialism/gi, /toxic masculinity/gi,/patriarchal/gi, /problematic/gi, /commodify/gi, /neoliberal/gi, /heteronormative/gi, /patriarchy/gi, /microagression/gi, /intersectional/gi, /misogyny/gi, /trigger/gi, /injustice/gi, /postmodern/gi, /inequality/gi, /inequity/gi, /Marx/gi, /diversity/gi, /multiculturalism/gi, /racism/gi, /sexism/gi, /cisgender/gi, /intercultural/gi, /queer/gi, /decontruct/gi, /limn/gi, /problematize/gi, /commodification/gi];

var rawPageData = []; 						  // contains all the text from all elements on a given page

var matchedWords = [];						  // contains all matched words 

var info = [];							  // contains html to be used for the popup window

var elements = document.body.getElementsByTagName("*"); 	  // grab all the elements from the page

for(i in elements){
	try{	
		rawPageData.push(elements[i].lastChild.data)	  // push the text data from all elements to an array
	}
	catch(err){
		rawPageData.push(elements[i].innerText)
		if(elements[i].innerText === undefined){
		}
	}

}

var joinedPageData = rawPageData.join();			  // join all elements in the array into one element
	for(x in sjw){						  // loop through buzzword database	
		var scan = joinedPageData.match(sjw[x]);	  // match the words from database with the words in the joinedPageData array
			if(scan != null){
				matchedWords.push(scan);	  // push matched words to new array
			}
	}

function totalCounter(){					  //count total of matched words
	var totalCount = 0;

		for (i in results){
			totalCount++
		}		
	info.push("<div class='container-fluid'><div class='row'><div class='col-md-4'><span class='text-center'><h3><b>" + totalCount + " occurences of SJW buzzwords on this page</b></h3></span><br></div></div>");				  //push html with # of total matched words to an array
	
}

function counter(word){						  //count occurence of each matched word
	var count = 0;
		for(i in results){
		if(results[i].toLowerCase() == word){
			count++
					}
	}
		
	if(count != 0){
		if(count == 1){
			info.push("<div class='container-fluid'><div class='text-center'><b><span style='color:red'>" + word + "</span></b> appears " + count + " time" + "</div></div>");							  //push html for 1 matched word to array
			info.push("<br>")
		}
		else{
			info.push("<div class='container-fluid'><div class='text-center'><b><span style='color:red'>" + word + "</span></b> appears " + count + " times" + "</div></div>");							  //push html for multiple matched words to array
			info.push("<br>")
		}
	}
	
}

var results = [].concat.apply([], matchedWords);		  // contains concatenated version of the array matchedWords

totalCounter()

for (y in sjw){							  //loop through word database again to input each word as a parameter in counter function
	counter(sjw[y].source)
}

var readyFormat = info.join("");				  //join elements in info to format them properly for the popup

var opened = window.open('', '_blank', 'toolbar=0,location=0,menubar=0,height=500px,width=500px'); //open popup window

opened.document.write("<html><head><title>SJW buzzwords</title><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css' integrity='sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp' crossorigin='anonymous'></head><body>" + 
readyFormat
 + "<div class='container-fluid'><div class='text-center'><button type='button' onclick='window.close()'> Close </button></div></div></body></html>");						  //install bootstrap on the page and write the data onto it

}





