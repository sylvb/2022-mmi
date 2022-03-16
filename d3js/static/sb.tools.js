

function showScript() {
	var newDiv = document.createElement("div");
	newDiv.setAttribute('class', 'showScript');
	newDiv.innerHTML = document.getElementById("script-example").innerHTML;
	
	document.getElementsByTagName('body')[0].appendChild(newDiv);
}

showScript();