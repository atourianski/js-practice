
function makeRequest(url){
	httpRequest = new XMLHttpRequest();

	if (!httpRequest){
		alert("could not create instance");
		return false
	}

	httpRequest.onreadystatechange = alertContents;
	httpRequest.open('GET', 'https://bitpay.com/rates/cad');
	httpRequest.send()
}

function alertContents(){
	if (httpRequest.readyState === XMLHttpRequest.DONE){
		if (httpRequest.status === 200){
			document.getElementById("text").innerHTML = (httpRequest.responseText);
				var t = JSON.parse(httpRequest.responseText);
				console.log(t.data.rate)
					if(t.data.rate > 1017){
						document.getElementById("div").style.background = "green"
					}
					else{

						document.getElementById("div").style.background = "red"
					}
		}
		else{
			alert("Something went wrong")
		}
	}
}
makeRequest("https://bitpay.com/rates/cad")
