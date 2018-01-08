document.getElementById("id_business_version").innerHTML = "Business version = 2018.01.08.5";

navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

//---------------------------------
function on_position_success(e)
{
	 document.getElementById("id_lat").innerHTML ="Latitude="+ e.coords.latitude;
	 document.getElementById("id_long").innerHTML ="Longitude="+ e.coords.longitude;
	 document.getElementById("id_acc").innerHTML ="Accuracy="+ e.coords.accuracy + "m";
	 document.getElementById("id_alt").innerHTML ="Altitude="+ e.coords.altitude + "m";
	 
	 var map_str="https://maps.googleapis.com/maps/api/staticmap?"+
			"center="+ e.coords.latitude + "," + e.coords.longitude +
			"&zoom=18" +
			"&size=400x300" +
			"&key=AIzaSyBflsfrBYWXqLzpqKW1HGF7npiwqfVrCEM"
			"markers=color:blue|label:Apor|" + e.coords.latitude + "," + e.coords.longitude
			;
			
	 document.getElementById("id_img").src=map_str;
}
//-------------------------------
function on_position_failure(e)
{
	
	alert("M-sm pirtdut!");
	
}