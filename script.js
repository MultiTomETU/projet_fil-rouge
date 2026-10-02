console.log("Bonjour!") ;
console.log(2 + 3) ;

const courriel = 
	document.querySelector("#courriel") ;

console.log(courriel.value) ;

courriel.addEventListener("input", function() {
	console.log(courriel.value);
});