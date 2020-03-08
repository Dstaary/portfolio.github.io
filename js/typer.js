(function($) {
	var aiMsg = ["Front-end Developerem", "DTP Designerem", "Freelancerem"];

	$(document).ready(function() {
		var inputAI = $("#typer");
		
		aiMSGLoop(aiMsg);
		function aiMSGLoop(wordArray) {
			// store new element so AI knows where to write
			var newElement = $("<h3></h3>").appendTo(inputAI);
			var rand = Math.round(Math.random() * (wordArray.length-1)+ 0);
			//my type writer uses object function so no need to code 
			//long function every time
			newElement.writeText(wordArray[rand]).then(function() {
				setTimeout(function(){ 
					newElement
					.removeText(wordArray[rand])
					.then(function() {
					aiMSGLoop(wordArray);
						
				});
					 }, 2500);
			});
		}
	});
	//AI Text typer
	$.fn.writeText = function(content) {
		var elem = this;
		elem.addClass("typewriter");
		return new Promise(function(resolve, reject) {
			var contentArray = content.split(""),
				current = 0;
			var rand = 90;
			setInterval(function() {
				rand = Math.round(Math.random() * (300 + 1050));
				if (current < contentArray.length) {
					elem.text(elem.text() + contentArray[current++]);
				} else {
					resolve();
				}
			}, rand);
		});
	};
	//AI Text Typer backspace
	$.fn.removeText = function(content) {
		var elem = this;
		return new Promise(function(resolve, reject) {
			var contentArray = content.split("");
			var current = 0;
			setInterval(function() {
				if (current < contentArray.length) {
					elem.text(elem.text().slice(0, -1));
					current++;
				} else {
					elem.remove();
					resolve();
				}
			}, 70);
		});
	};
})(jQuery);
