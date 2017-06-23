var p = document.getElementsByTagName("p");

for(i=0;i<p.length;i++){
	console.log(p[i].innerText);
	var scan = p[i].innerText.match(/the/g);
	console.log(scan)
}

	
