function querySubmit() {
	var query = document.forms["query-form"]["query-input"].value;

	if (query == "") {
		CustomAlert.render("Image query can't be empty. Please enter a query containing only alphanumeric characters.");
		return false;
	}

	if (!query.match("^[ a-zA-Z0-9]*$")) {
		CustomAlert.render("Special characters are not allowed. Please enter a query containing only alphanumeric characters.");
		return false;
	} else {

		var ajax = ajaxObj("GET", "https://www.googleapis.com/customsearch/v1?key=AIzaSyAetqmg_37I_bmtIoLSKoZl-6onjzhP5fs&cx=012015028700958926860:cft8ol-tsua&searchType=image&q=cars+glamour+shot");

		ajax.onreadystatechange = function() {
			if (ajaxReturn(ajax) == true) {
				if (ajax.responseText != "") {	
					var result = JSON.parse(ajax.responseText);				
					//CustomAlert.render(ajax.responseText);
					var item = result.items[0];
					document.getElementById("image-result").src = item.image.thumbnailLink;	
					
					for(){
						
					}								
				}
			}
		};

		ajax.send();
		return false;
	}

}

var CustomAlert = new CustomAlert();
function CustomAlert() {
	this.render = function(dialog) {

		var dialogoverlay = document.getElementById('dialogoverlay');
		var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
		dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "RETREAVER MESSAGE";
		document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="CustomAlert.ok()">OK</button>';
	};
	this.ok = function() {
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	};
}