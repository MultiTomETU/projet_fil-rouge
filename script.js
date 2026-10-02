console.log("Bonjour!") ;

const courriel = 
	document.querySelector("#courriel") ;

console.log(courriel.value) ;

courriel.addEventListener("input", function(event) {
	console.log(event.target.value);
});