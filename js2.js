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

var obraz = new Image();
obraz.src = "png.png";

function drawTrails() {
	var canvas = document.getElementById('trails');
	var context = canvas.getContext('2d');

	context.save();
	context.translate(130, 250);

	createCanopyPath(context);

	context.lineWidth = 5;
	context.lineJoin = 'round';
	context.fillStyle = '#00695c';
	context.fill();
	context.strokeStyle = '#80cbc4';
	context.fillStyle = '#663300';
	context.fillRect(-5, -100, 10, 50);
	context.stroke();
	

	context.restore();

	

	context.save();

	context.translate(-10, 300);
	context.beginPath();

	context.moveTo(0, 0);
	context.quadraticCurveTo(170, -50, 260, -240);
	context.quadraticCurveTo(310, -250, 410, -290);
	
	context.strokeStyle = '#663300';
	context.lineWidth = 20;
	context.stroke();

	context.restore();	
}

window.addEventListener("load", drawTrails, true);
