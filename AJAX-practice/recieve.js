function makeRequest(url){
	httpRequest = new XMLHttpRequest();

	if (!httpRequest){
		alert("could not create instance");
		return false
	}

	httpRequest.onreadystatechange = alertContents;
	httpRequest.open('GET', url);
	httpRequest.send()
}

function alertContents(){
	if (httpRequest.readyState === XMLHttpRequest.DONE){
		if (httpRequest.status === 200){
			alert(httpRequest.responseText)
		}
		else{
			alert("Something went wrong")
		}
	}
}
makeRequest("send.js")
