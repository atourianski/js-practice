makeRequest"(send.js")

function makeRequest(url){			
		httpRequest = new XMLHttpRequest();	//creating instance of the class XMLHttpRequest

			if (!httpRequest) {					
						alert("Cannot create XMLHttp instance");  //error message in case the request fails
								return false
										}

				httpRequest.onreadystatechange = alertContents;	//alertContents will be invoked once a response is recieved
					httpRequest.open('GET', url); // 1st param is the request method ('GET'), 2nd param is the url of the file I am getting data from 
						httpRequest.send()
}

function alertContents(){						//the function that processes the recieved response
		if (httpRequest.readyState === XMLHttpRequest.DONE){
					if (httpRequest.status === 200){		//200 is the status when all is well
									alert(httpRequest.responseText)	// returns the server response as a string of text
												}
							else{
											alert("Something went wrong")	//error msg in case of other statuses like 404 or 500
														}
								}
}
