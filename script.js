console.log("Bonjour!") ;

const courriel = 
	document.querySelector("#courriel") ;

console.log(courriel.value) ;

courriel.addEventListener("input", function() {
	console.log(courriel.value);
});