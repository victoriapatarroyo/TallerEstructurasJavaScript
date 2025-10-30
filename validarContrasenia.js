const prompt = require("prompt-sync")();

function validarContrasenia(contrasenia) {
    let respuesta = false;

    if(contrasenia.length >= 8) {
        if (/\d/.test(contrasenia)) {
            if(/[a-zA-Z]/.test(contrasenia)) {
                respuesta = true;
            }
        }
    }
    return respuesta;
}

let contraseniaUsuario = prompt("Ingrese la contraseña: ");
console.log("Estado validación contraseña: " + validarContrasenia(contraseniaUsuario));