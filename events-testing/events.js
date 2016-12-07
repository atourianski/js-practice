window.onload = function(){
	document.getElementById("input").addEventListener("keyup", doStuff);

	function doStuff(){

		var x = document.getElementById('input').value;


		if(x==='a'){
			console.log('yaas')
		}
		else{
			console.log('ok')
		}
	}
}	
