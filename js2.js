var o =
{
	"name" : "Michał",
	"surname" : "Niksa",
	"nik" : "Niksior"
};
function imie()
{
	var k;
	k = o.name + " " + o.nik + " " + o.surname + " "
	
	  document.getElementById("wys").innerHTML = k;
}

var a=0;

function lvl()
{
	a++;
	document.getElementById("wlvl").innerHTML = "Poziom tej strony jest równy poziomowi Twojego umusłu czyli " + a;
}

document.getElementById("findHover").onclick = function() {
	var hovered = document.querySelector("td:hover"); conlose.log("heveredd");
	if (hovered)
		document.getElementById("hoverResult").innerHTML = hovered.innerHTML;
}
