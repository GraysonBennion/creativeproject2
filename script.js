$(document).ready(function() {
    var myurl = "https://dog.ceo/api/breeds/list/all"
    $.ajax({
	url : myurl,
	dataType : "json",
	success : function(json) {
	    var doggos = Object.keys(json.message);
	    var list = document.getElementById("dropdown");
	    
	    for(var i=0;i<doggos.length;i++){
		var newdoggo = document.createElement("option");
		newdoggo.value = doggos[i];
		newdoggo.appendChild(document.createTextNode(doggos[i]));
		list.appendChild(newdoggo);
	    }   
	}
    });

    $("#select").click(function(e){
	e.preventDefault();
	var value = document.getElementById("dropdown").value
	myurl = "https://dog.ceo/api/breed/" + value + "/images/random";
	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		
		var photodiv = document.getElementById("image");
		var photo = document.createElement("img");
		while(photodiv.hasChildNodes()){
		    photodiv.removeChild(photodiv.firstChild);
		}


		photo.src = json.message;
		photodiv.appendChild(photo);
	    }

	});

    });

});
