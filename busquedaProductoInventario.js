const prompt = require("prompt-sync")();

const inventario = [
    {nombre: "Camisa", precio: 20},
    {nombre: "Zapatos", precio: 50}
];

function buscarProducto(nombre, inventario) {
    nombre = String(nombre).charAt(0).toUpperCase() + String(nombre).slice(1);

    existeProducto = null;    
    let tamanioLista = inventario.length;

    for(i = 0; i < tamanioLista; i++) {
        if(inventario[i].nombre === nombre) {
            existeProducto = "El producto existe";
        }
    }
    return existeProducto;
}

let nombreProducto = prompt("Ingrese el nombre del producto: ");
console.log(buscarProducto(nombreProducto, inventario));
