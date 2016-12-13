window.onload = function(){


	function alertDate(){
		var x = new Date();
		var days = ["Sun","Mon","Tues","Wed","Thurs","Fri", "Sat"];
		var months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
		var dm = [];
				for (d = 0; d < days.length; d++){
			if(x.getDay() === d){
			dm.push(days[d])
			}
		}

		for (m = 0; m < months.length; m++){
			if(x.getMonth() === m){
			dm.push(months[m])
			}
		}

	document.getElementById("date").innerHTML = dm[0] + " " + dm[1] + " " + x.getDate() + " " + x.getFullYear();

	}

	function alertBitcoin(){
		if (httpRequest.readyState === XMLHttpRequest.DONE){
			if (httpRequest.status === 200){
				bc = JSON.parse((httpRequest.responseText));
							
			document.getElementById("bitcoin").innerHTML = bc.data.rate + " " + bc.data.code;

			}

			else{
				alert("Something went wrong")
			}
		}
	}
		
	function makeRequest(url){
		httpRequest = new XMLHttpRequest();
		if (!httpRequest){
			alert("could not create instance");
			return false
		}
		httpRequest.onreadystatechange = alertBitcoin;
		httpRequest.open('GET', url);
		httpRequest.send()
	}

	makeRequest('https://bitpay.com/rates/cad', alertBitcoin);
	alertDate()
}
