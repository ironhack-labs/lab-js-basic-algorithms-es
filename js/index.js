console.log("Estoy listo!");

// Iteration 1: Names and Input

// 1.1 Cree una variable hacker1 con el nombre del controlador.
// 1.2 Imprimir "El nombre del conductor es XXXX".
// 1.3 Cree una variable hacker2 con el nombre del navegador.
// 1.4 Imprimir "El nombre del navegante es YYYY".

const hacker1 = "David";
const hacker2 = "Alvaro";

console.log(`El nombre del conductor es ${hacker1}`);
console.log(`El nombre del navegante es ${hacker2}`);

// Iteration 2: Conditionals

// 2.1. Dependiendo de qué nombre es más largo, imprima:
// El conductor tiene el nombre más largo, tiene XX caracteres. o
// Parece que el navegante tiene el nombre más largo, tiene XX caracteres. o
// ¡Vaya, ambos tienen nombres igual de largos, XX caracteres!.

if (hacker1.length > hacker2.length) {
    console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);
} else {
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`);
}

// Iteration 3: Loops

// 3.1 Imprime todos los caracteres del nombre del conductor, separados por un espacio y en mayúsculas, por ejemplo "J O H N" 

let hacker1letters = "David";
let hacker1space = " ";
for (let i = 0; i < hacker1letters.length; i++) {
    hacker1space += hacker1letters[i].toUpperCase() + " ";
    
}  
console.log(hacker1space);

// 3.2 Imprima todos los caracteres del nombre del navegador, en orden inverso. Es decir, " nhoJ" 
 
let reverse = hacker2.split("").reverse().join(" ")
console.log(reverse);

// 3.3 Según el orden lexicográfico de las cadenas, imprime:
        // El nombre del conductor va primero.
        // Yo, el navegador va primero definitivamente.
        // ¿Qué? ¿Los dos tienen el mismo nombre

let ordenLexico = [hacker1, hacker2];

ordenLexico.sort((a, b) => {
    if (a === b) {
      return console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
    } else if (a > b) {
      return console.log("El nombre del conductor va primero.");
    } else {
        return console.log("Yo, el navegador va primero definitivamente.");
    }
  });



// Bonus 1:
// Generar 3 párrafos. Guarda el texto en una variable de tipo cadena.

let loremIpsum = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam exercitationem esse ipsum, tempore cupiditate minima totam amet nam perspiciatis, tempora repellat veniam accusamus soluta animi nobis aspernatur alias pariatur in!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sit nobis ea autem officia excepturi explicabo animi ducimus. Officia debitis ad vitae beatae iure odit sit numquam facilis rerum ex., Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, impedit odio? Distinctio aliquid eveniet optio, doloribus tenetur quod, perspiciatis maiores aliquam, animi quas architecto. Nulla quasi minus voluptatum rerum? Mollitia?";

// Haz que tu programa cuente el número de palabras de la cadena.

let loremPalabras = loremIpsum.split(" ");
let numeroLorem = loremPalabras.length;

console.log(`LoremIpsum tiene ${numeroLorem} palabras.`);

// Haz que tu programa cuente el número de veces que aparece la palabra latina et.

let contador = 0;

for (let i = 0; i < loremPalabras.length; i++) {
    if (loremPalabras[i] === 'et') {
        contador++;
    }
}

console.log(`El texto loremipsum tiene ${contador} palabras "et" `);

// Bonus 2
// Crea una nueva variable phraseToCheck y haz que contenga algún valor de cadena. Escribe un código que compruebe si el valor que asignamos a esta variable es un palíndromo.

let phrasesToCheck = [
  "Un hombre, un plan, un canal, ¡anamá!",
  "Amor, roma",
  "Coche de carreras",
  "Apilar gatos",
  "Pisar no mascotas",
  "Race car",
  "Ponlo",
  "¿Era un coche o un gato lo que vi?",
  "No hay 'x' en Nixon",
];

for (phrase of phrasesToCheck) {
  let phraseLowerCase = phrase.toLowerCase().replace(",", "").replace(" ", "");
  let reversePhrase = phraseLowerCase.split("").reverse().join("");
  if (phraseLowerCase == reversePhrase) {
    console.log(`${phrase} es un palindromo`);
  }
}