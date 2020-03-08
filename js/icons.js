let a = 1;
 
function zmien() {
	let ile = obrazki.length;
	document.getElementById("change").src = obrazki[a];	
	a++;
	if(ile==a) {
		a=1;
	} 
 
}

setInterval("zmien()", 1000);

const obrazki = new Array("img/adobreAi.png", "img/adobrePS.png", "img/css3.png", "img/html5.png", "img/java.png", "img/bootstrap.png");