const prompt = require("prompt-sync")();

function contarPalabras(texto) {
    let numeroPalabras = 0;
    let palabras = texto.split(" ");
    numeroPalabras = palabras.length;
    console.log("El número de palabras contenidas en el texto es: " + numeroPalabras);
}

let texto = prompt("Ingrese una oración o un texto: ");
contarPalabras(texto);