//alert("Ta strona NIE używa ciasteczek");
//setTimeout("alert(\"Weź coś kliknij\")", 5000);

if (Modernizr.canvas) {
  //Najs
} else {
  alert("Your browes does not support canvas. Please update it.");
}

if (Modernizr.geolocation) {
  //Najs
} else {
  alert("Your browes does not support GPS. Please update it.");
}



var d=100;


function dead(){
	var k='HA';
	var a;
	do
	{
		a='HA ' + k;
		document.getElementById('death').innerHTML = a;
		d++
	}
	while(d==0);
	
} 