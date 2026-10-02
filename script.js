console.log("Bonjour!") ;

const courriel = 
	document.querySelector("#courriel") ;

const courrielMessage =
	document.querySelector("#courriel-message");

console.log(courriel.value) ;

courriel.addEventListener("input", function(event) {
	const valeur = courriel.value;
	console.log("Courriel :", valeur);

	courrielMessage.textContent = value;

if (valeur === "") {
	courrielMessage,textContent = 
		"Le courriel est obligatoire"
}

});

