var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." 
+ (d.getMonth()+1) + "." + d.getDate() + ".9"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);
//------------------------------
var lat ;
var lon ; 
//------------------
function apasa()
{
	document.getElementById("id_enunt").innerHTML =  document.getElementById("id_text").value;
	line(); // functia ce traseaza linia
}
//--locatia utilizator----------
function on_position_success(e) 
{ 
	lat = e.coords.latitude;
	lon = e.coords.longitude;

	var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  e.coords.latitude + "," + e.coords.longitude + "&zoom=15"+"&size=600x500"+
		"&key=AIzaSyCN-okwBNTQY_M0PZ-fEHnsQCHMsLIfY7U"+
			"&markers=color:red|label:F|"+
				e.coords.latitude  + "," + e.coords.longitude;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_exp").innerHTML = "	Locatie afisata";
	
}
//------------------
function line(e)
{
	var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  lat + "," + lon + "&zoom=8"+"&size=600x500"+
		"&key=AIzaSyCN-okwBNTQY_M0PZ-fEHnsQCHMsLIfY7U"+
			"&markers=color:blue|label:Z|"+
				lat  + "," + lon + "&path=color:red|" + 
					lat + "," + lon + "|" + document.getElementById("id_enunt").innerHTML;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_exp").innerHTML = "Trasarea liniei pozitia curenta si cea prezenta";
}
//----------------------
function on_position_failure(e)
{
	
	alert("M-am pierdut!");
	
}
//------end----