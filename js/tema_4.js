var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." 
+ (d.getMonth()+1) + "." + d.getDate() + ".1"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

var synth= window.speechSynthesis;
var lat ;
var lon ;  


function speak()
{
	var enunt = new SpeechSynthesisUtterance();
	enunt.lang = "en-US"
	enunt.text = document.getElementById("id_text").value;
	enunt.onend = on_end_synth;
	document.getElementById("id_speak_button").disabled=true;
	synth.speak(enunt);
}
//-----------------

function on_end_synth()
{
	
}
//-==================locatia utilizatorului----------
function on_position_success(e) 
{ 
	lat = e.coords.latitude;
	lon = e.coords.longitude;

	  var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  e.coords.latitude + "," + e.coords.longitude + "&zoom=15"+"&size=600x500"+
		"&key=AIzaSyBflsfrBYWXqLzpqKW1HGF7npiwqfVrCEM"+
			"&markers=color:blue|label:F|"+
				e.coords.latitude  + "," + e.coords.longitude;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_explicatie").innerHTML = "Afisarea locatiei";
	
}
//------------------
function line(e)
{
		var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  lat + "," + lon + "&zoom=15"+"&size=600x500"+
		"key=AIzaSyBflsfrBYWXqLzpqKW1HGF7npiwqfVrCEM"+
			"&markers=color:blue|label:Z|"+ lat  + "," + lon + 
	  "&path=color:red|" + lat + "," + lon + "|" + document.getElementById("id_speech").innerHTML;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_explicatie").innerHTML = "Trasarea liniei de conectare intre pozitia curentare si cea recunoscuta";
		
	
}

function on_position_failure(e)
{
	
	alert("I'm lost!");
	
}
//------------