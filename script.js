
//Member Variables
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randButton = document.querySelector(".button1");


//Show CSS text for color on start up
css.onload() = function() {
	css.textContent = 
	"linear-gradient(to right, " 
	+ color1.value 
	+", " 
	+ color2.value 
	+ ")" 
	+ ";";
};

// Changes Background to chosen input values
function updateBackground(){

	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

}


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Updates Background with random Colors
function setRandomBackground(){

	color1.value = getRandomColor(); 
	color2.value = getRandomColor(); 

	updateBackground();

}



//Gets user input for Color choice
color1.addEventListener("input", updateBackground());
color2.addEventListener("input", updateBackground());
randButton.addEventListener("click", setRandomBackground());