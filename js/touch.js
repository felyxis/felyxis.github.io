document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.14.5"

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

canvas.addEventListener("touchstart", on_start_touch);
canvas.addEventListener("touchmove", on_move_touch);


var lista_culori = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#FFFFFF"];
//---------------------------------------
function on_start_touch(e)
{
	var touches = e.touches; 
	for (var i = 0; i < touches.length; i++){
		context.beginPath();
		context.arc(touches.item(i).pageX, touches.item(i).pageY, 20, 0, 2 * Math.PI);
		context.strokeStyle = lista_culori[i];
		context.fillStyle = lista_culori[i];
		context.fill();
		context.stroke();
	}
}
//---------------------------------------
function on_move_touch(e)
{
	var touches = e.touches; 
	for (var i = 0; i < touches.length; i++){
		context.beginPath();
		context.arc(touches.item(i).pageX, touches.item(i).pageY, 20, 0, 2 * Math.PI);
		context.strokeStyle = lista_culori[i];
		context.fillStyle = lista_culori[i];
		context.fill();
		context.stroke();
	}
}