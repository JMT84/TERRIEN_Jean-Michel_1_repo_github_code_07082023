const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

// Ecoute du click flèche gauche, droite et différencation de l'action sur la fonction "ChangeSlide"

const flecheLeft = document.querySelector(".arrow_left");
flecheLeft.addEventListener("click", function () { ChangeSlide(-1);
    console.log(flecheLeft);
});

const flecheRight = document.querySelector(".arrow_right");
flecheRight.addEventListener("click", function () { ChangeSlide(1);
    console.log(flecheRight);
});

// Contage du nombre de slides dans le tableau 

console.log(slides.length);

// Création des bullet points sur le slider en fonction du nombre de slides

const codeDot = document.querySelector(".dots").innerHTML = '<p class="dot"></p>'.repeat(slides.length);
console.log(codeDot);

// Récupération des noeuds des différents bullet points sous forme de "NodListe"

const tableauDot = document.querySelectorAll(".dot");

// Ajout de la class "dot_selected" sur le premier bullet points

tableauDot[0].classList.add("dot_selected");
console.log(tableauDot);

// Création d'une variable numero

let numero = 0;

// Création de la fonction "ChangeSlide" qui renvoie un "numero"

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero > slides.length -1)
		numero = 0;
	if (numero < 0)
		numero = slides.length -1;
	{console.log(numero)};

// Actions sur le DOM au niveau de l'image, du texte en fonction et des bullet points en fonction du "numéro"
	
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numero]['image'];
	document.getElementById("text").innerHTML = slides[numero]['tagLine'];
	
	tableauDot.forEach(function(dot, index) {
		if (index === numero) {
			tableauDot[index].classList.add("dot_selected");
		}
		else {
			tableauDot[index].classList.remove("dot_selected");
		}

	{console.log(index)};
	{console.log(tableauDot)};

	});
}

