var d=new Date();
document.getElementById("id_business_version").innerHTML = "Business version = "+
 d.getFullYear()+"." + (d.getMonth()+ 1) + "." +d.getDate()+ ".0" ;
 
 var synt= window.speechSynthesis;
 //-------------------
function on_get_voices()
{
	var voci= synt.getVoices();
	for (var i=0; i<voci.length; i++)  {
		document.getElementById("id_voices").innerHTML +=voci[i].lang+ " " +voci[i].name + "<br>";
		
	
		
	}
	
	
	
	
}