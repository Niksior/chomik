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
		console.log="kupa";
		d++;
	}
	while(d<5);
	
}

//troll

	//var l=0.1;
	//var s;
	//do
	//{
	//	s=0.1 + l;
	//	if(s==10) console.log="tan";
	//}
	//while(s!=100);


//jak dodac zdjecie

var ona = new Image();
ona.src = "/chomik/1.png";

var obraz = new Image();
obraz.src = "/chomik/jpg.jpg";

var gravel = new Image(); 
gravel.src = "/chomik/5.jpg";
