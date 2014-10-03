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



var d;


function death(){
	var k=HA;
	var a;
	d=0;
	do
	{
		a='HA ' + k;
		documeny.getElementById('death') = a;
	}
	while(d==0);
} 