var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." 
+ (d.getMonth()+1) + "." + d.getDate() + ".3"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

	//document.getElementById("id_enunt").innerHTML = "Alba Iulia";
var lat ;
var lon ; 
 
 
//------------------
function apasa()
{
	document.getElementById("id_enunt").innerHTML =  document.getElementById("id_text").value;
	//navigator.geolocation.getCurrentPosition(line,on_position_failure);
	line(); // functia care traseaza linia
}


//-==================locatia utilizatorului----------
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
	document.getElementById("id_exp").innerHTML = "Afisarea locatiei";
	
}
//------------------
function line(e)
{
		var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  lat + "," + lon + "&zoom=8"+"&size=600x500"+
"&key=AIzaSyDvoY0i_x0wXeE7vAOztYvmCzDIfEtzAR0"+
"&markers=color:blue|label:Z|"+
	  lat  + "," + lon + 
	  "&path=color:red|" + lat + "," + lon + "|" + document.getElementById("id_enunt").innerHTML
	  ;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_exp").innerHTML = "Trasarea liniei pozitia curenta si cea prezenta";
		
	
}

function on_position_failure(e)
{
	
	alert("M-am pierdut!");
	
}
//------------