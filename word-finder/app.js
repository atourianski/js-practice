var sjw = [/injustice/g, /postmodern/g, /inequality/g, /inequity/g, /Marx/g, /diversity/g, /multiculturalism/g, /patriarchy/g, /racism/g, /sexism/g, /cisgender/g];


var elements =  document.body.getElementsByTagName("*");
	for(i=0;i<elements.length;i++){
		for(x in sjw){
			var scan = elements[i].innerText.match(sjw[x])
				if(scan != null){
					console.log(scan)
				}
		}
	}
	
