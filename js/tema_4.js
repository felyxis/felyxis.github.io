var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." 
+ (d.getMonth()+1) + "." + d.getDate() + ".3"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

var enunt = new SpeechSynthesisUtterance();
var lat ;
var lon ; 
 enunt.onresult = on_enunt_results;
 enunt.onend = on_enunt_end;
 enunt.lang="en-US";
 //------------

 function speak()
{
	if(enunt.start())
	{}
}
//---------
function on_enunt_end()
{
		enunt.stop();
	
}
//------------------
function on_enunt_results(e)
{
	document.getElementById("id_enunt").innerHTML=e.results[0][0].transcript;
	line(); // functia care traseaza linia
}


//-==================locatia utilizatorului----------
function on_position_success(e) 
{ 
	lat = e.coords.latitude;
	lon = e.coords.longitude;

	  var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  e.coords.latitude + "," + e.coords.longitude + "&zoom=15"+"&size=600x500"+
		"&key=AIzaSyBflsfrBYWXqLzpqKW1HGF7npiwqfVrCEM"+
			"&markers=color:red|label:F|"+
				e.coords.latitude  + "," + e.coords.longitude;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_exp").innerHTML = "Afisarea locatiei";
	
}
//------------------
function line(e)
{
		var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  lat + "," + lon + "&zoom=20"+"&size=600x500"+
		"key=AIzaSyBflsfrBYWXqLzpqKW1HGF7npiwqfVrCEM"+
			"&markers=color:red|label:F|"+ lat  + "," + lon + 
	  "&path=color:red|" + lat + "," + lon + "|" + document.getElementById("id_enunt").innerHTML;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_exp").innerHTML = "Trasarea liniei pozitia curenta si cea prezenta";
		
	
}

function on_position_failure(e)
{
	
	alert("I'm lost!");
	
}
//------------