
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

function drawTree(context) {
	var trunkGradient = context.createLinearGradient (-5, -50, 5, -50);
	trunkGradient.addColorStop (0, '#663300');
	trunkGradient.addColorStop (0.4, '#996600');
	trunkGradient.addColorStop (1, '#552200');
	context.fillStyle = trunkGradient;
	context.fillRect (-5, -50, 10, 0);

	var canopyShadow = context.createLinearGradient ( 0, -50, 0, 0);
	canopyShadow.addColorStop (0, 'rgba(0, 0, 0, 0.5)');
	canopyShadow.addColorStop (0.2, 'rgba(0, 0, 0, 0.0)');
	context.dillStyle = canopyShadow;
	context.fillRect (-5, -50, 10, 0);

	createCanopyPath(context);

	context.lineWidth = 4;
	context.lineJoin = 'round';
	context.strokeStyle = '#663300';
	context.stroke();
	context.fillStyle = '#339900';
	context.fill();
}

function drawDiagonal() {
	var canvas = document.getElementById('diagonal');
	var context = canvas.getContext('2d');

	context.save();

	context.translate(70, 140);

	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(70, -70);
	context.stroke();

	context.restore();
	}

function createCanopyPath(context) {
	context.beginPath();
	context.moveTo(-25, -100);
	context.lineTo(-10, -130);
	context.lineTo(-20, -130);
	context.lineTo(-5, -160);
	context.lineTo(-15, -160);
	context.lineTo(0, -190);

	context.lineTo(15, -160);
	context.lineTo(5, -160);
	context.lineTo(20, -130);
	context.lineTo(10, -130);
	context.lineTo(25, -100);

	context.closePath();
	
	
}

window.addEventListener("load", drawDiagonal, true);


var ona = new Image();
ona.src = "/chomik/1.png";

var obraz = new Image();
obraz.src = "/chomik/jpg.jpg";

var gravel = new Image(); 
gravel.src = "/chomik/5.jpg";


function drawTrails() {
	var canvas = document.getElementById('trails');
	var context = canvas.getContext('2d');

	/*context.save();
	context.translate(130, 250);

	createCanopyPath(context);

	context.lineWidth = 5;
	context.lineJoin = 'round';
	context.fillStyle = '#00695c';
	context.fill();
	context.strokeStyle = '#80cbc4';
	context.fillStyle = '#663300';
	context.fillRect(-5, -100, 10, 50);
	context.drawImage(obraz, -5, -100, 10 ,50);
	context.stroke();
	

	context.restore(); */

	

	context.save();

	context.translate(-10, 300);
	context.beginPath();

	context.moveTo(0, 0);
	context.quadraticCurveTo(170, -100, 260, -220);
	context.quadraticCurveTo(310, -300, 530, -290);
	
	context.strokeStyle = context.createPattern(gravel, 'repeat');
	context.lineWidth = 20;
	context.stroke();

	context.restore();



	context.save();

	context.translate(130, 250);
	drawTree(context);

	context.restore();



	context.save();
	
	context.translate(260, 500);
	context.scale(2, 2);
	drawTree(context);

	context.restore();
}

window.addEventListener("load", drawTrails, true);


obraz.onload = function () {
	drawTrails();
}	

gravel.onload = function () {
	drawTrails();
}
