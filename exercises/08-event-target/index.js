window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
			alert (event.target.id);
			// let text = event.target.id;
			// alert (text);
		  
	});
};
