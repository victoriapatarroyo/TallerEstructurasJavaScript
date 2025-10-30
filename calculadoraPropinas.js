const prompt = require("prompt-sync")();

function calcularPropina(total, porcentaje){
    valorPagar = total + ((total * porcentaje) / 100);
    console.log("El valor total a pagar es: " + valorPagar);
};

let total = parseInt(prompt("Ingrese el total de la factura: "));
let porcentaje = parseInt(prompt("Ingrese el porcentaje de propina: "));
calcularPropina(total, porcentaje);

