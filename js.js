//alert("Ta strona NIE używa ciasteczek");
//setTimeout("alert(\"Weź coś kliknij\")", 5000);

try {
	document.createElement("canvas").getContext("2d");
	document.getElementById("support").innerHTML = "Wspiera.";
} catch (e) {
	document.getElementById("support").innerHTML = "Nie wspiera.";
}

