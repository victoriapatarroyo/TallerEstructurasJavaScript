const prompt = require("prompt-sync")();

function calcularPromedio(arrayNotas) {
    let tamanioArrayNotas = arrayNotas.length;
    let i = 0;
    let sumaNotas = 0;

    while(i < tamanioArrayNotas) {
        sumaNotas += arrayNotas[i];
        i++;
    }

    let promedio = sumaNotas / tamanioArrayNotas;
    console.log("El promedio de notas es: " + promedio);
}

let numeroNotas = parseInt(prompt("Ingrese el número de notas: "));
let arrayNotas = [];

for(i = 0; i < numeroNotas; i++) {
    let nota = parseInt(prompt("Ingrese la nota " + (i + 1) + " :"));
    arrayNotas.push(nota);
}

calcularPromedio(arrayNotas);