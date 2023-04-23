window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
const element = document.getElementById("theGreen");
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("wuju");
}