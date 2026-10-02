console.log("Bonjour!") ;

const courriel = 
	document.querySelector("#courriel") ;

console.log(courriel.value) ;

courriel.addEventListener("input", function(event) {
	const valeur = courriel.value;
	console.log("Courriel :", valeur);
});