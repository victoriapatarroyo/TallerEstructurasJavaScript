const prompt = require("prompt-sync")();

function retirarDinero(saldo, monto) {
    if(monto <= saldo) {
        console.log("Nuevo saldo: " + (saldo - monto));
    } else {
        console.log("Fondos insuficientes");
    }
}

let saldo = parseInt(prompt("Ingrese su saldo actual: "));
let monto = parseInt(prompt("Ingrese el monto a retirar: "))

retirarDinero(saldo, monto);