document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.04.2";

var canvas= document.getElementById("id_canvas");
var context=canvas.getContext("2d");

canvas.addEventListener("touchstart", on_start_touch);

//-----------------------

function on_start_touch(e)
{
	e.changedTouches;
	
	var touches=e.changedTouches;
	for (var i=0; i< touches.length; i++) {
		context.beginPath();
		context.arc(touches.item(i).pageX, touches.item(i).pageY,20, 0, 2*Math.PI);
		context.strokeStyle=["#FF0000", "#00FF00", "#0000FF", "#FFF000", "#FFFFFF"]
		context.stroke();
		
		
	}
	
}
//-----------------------
