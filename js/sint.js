var d=new Date();
document.getElementById("id_business_version").innerHTML = "Business version = "+
 d.getFullYear()+"." + (d.getMonth()+ 1) + "." +d.getDate()+ ".0" ;
 
 document.addEventListener("touchstart", speak);
 
 
 var synt= window.speechSynthesis;
 //-------------------
function on_get_voices()
{
	var voci= synt.getVoices();
	for (var i=0; i<voci.length; i++)  {
		document.getElementById("id_voices").innerHTML +=voci[i].lang+ " " +voci[i].name + "<br>";
		
	
		
	}
	
	
	
	
}
//-------------
function speak()
{
	var enunt= new SpeechSynthesisUterance();
	enunt.lang="en-US";
	enunt.text= document.getElementById("id_text").value;
	
	synt.speak(enunt);
	
}
//-------------------