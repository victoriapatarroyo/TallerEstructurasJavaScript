const prompt = require("prompt-sync")();

usuarios = [
    {nombre: "Ana", edad: 27},
    {nombre: "Victoria", edad: 37},
    {nombre: "Luis", edad: 14},
    {nombre: "Jaime", edad: 17},
    {nombre: "Daniel", edad: 6},
    {nombre: "Antonia", edad: 8},
    {nombre: "German", edad: 60},
    {nombre: "Laura", edad: 79},
    {nombre: "Maria", edad: 57},
    {nombre: "Yolanda", edad: 20},
];

function filtrarUsuarios(usuarios, edadMinima) {
    let listaUsuarios = [];
    let tamanioLista = usuarios.length;

    for(i = 0; i < tamanioLista; i++) {
        if(usuarios[i].edad >= edadMinima) {
            listaUsuarios.push(usuarios[i].nombre)
        }
    }
    return listaUsuarios;
}

let edadMinima = parseInt(prompt("Ingrese la edad mínima a consultar: "))
let nombreUsuarios = filtrarUsuarios(usuarios, edadMinima);

for(i = 0; i < nombreUsuarios.length; i++) {
    console.log(nombreUsuarios[i]);
}