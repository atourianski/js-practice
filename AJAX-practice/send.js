

var Obj = {
	key: "value"
}

	var x = JSON.stringify(Obj);
	console.log(x)
	makeRequest("recieve.js", usrName)

	function makeRequest(url, usrName){			
		httpRequest = new XMLHttpRequest();
		
		if (!httpRequest) {					
		alert("Cannot create XMLHttp instance");
		return false
		}

		httpRequest.onreadystatechange = alertContents;
		httpRequest.open('POST', url); 
		httpRequest.setRequestHeader('JSON', "/root/practice-js/AJAX-practice/recieve.js")
		httpRequest.send("usrName=" + encodeURIComponent(usrName));
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



