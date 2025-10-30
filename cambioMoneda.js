const prompt = require("prompt-sync")();

function convertirMoneda(monto, monedaDestino) {
    let valorUSD = 3885.29;
    let valorEUR = 4531.80;

    if(monedaDestino === "USD"){
        console.log("Conversión a USD: " + (monto * valorUSD));

    } else if (monedaDestino === "EUR") {
        console.log("Conversión a EUR: " + (monto * valorEUR));
    } else {
        console.log("Divisa errónea");
    }
}

let monto = parseInt(prompt("Ingrese el valor en COP: "));
let monedaDestino = prompt("Ingrese la divisa (USD o EUR): ").toUpperCase();

convertirMoneda(monto, monedaDestino);