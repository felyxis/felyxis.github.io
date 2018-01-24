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
	enunt.lang = "ru-RU"
	enunt.text = document.getElementById("id_text").value;
	enunt.onend = on_end_synth;
	document.getElementById("id_speak_button").disabled=true;
	synth.speak(enunt);
}
//-----------------

function on_end_synth()
{
	
}