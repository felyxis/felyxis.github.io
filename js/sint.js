var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".5"; 

//document.addEventListener("touchstart",speak);

var synth= window.speechSynthesis;

//-----------------------------
function on_get_voices()
{
	var voci= synth.getVoices();

	for(i=0;i<voci.length;i++)
	{
		document.getElementById("id_voices").innerHTML += voci[i] + " " + voci[i].name +"<br>";
	}
	
}

//--------------------------------------
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

//-----------