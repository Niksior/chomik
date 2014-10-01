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
	context.moveTo(-25, -60);
	context.lineTo(-10, -90);
	context.lineTo(-20, -90);
	context.lineTo(-5, -120);
	context.lineTo(-15, -120);
	context.lineTo(0, -150);

	context.lineTo(15, -120);
	context.lineTo(5, -120);
	context.lineTo(20, -90);
	context.lineTo(10, -90);
	context.lineTo(25, -60);

	context.closePath();
	
	
}

window.addEventListener("load", drawDiagonal, true);

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
	context.stroke();
	context.restore();
}

window.addEventListener("load", drawTrails, true);
