// Ejercicio1: Solicite al usuario su nombre. Muestre el nombre en mayúsculas y en minúsculas.


import readline from "node:readline"

const nombreUsuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

nombreUsuario.question("Ingrese su nombre en el sistema: ", function(nombre){
    console.log(`El nombre en mayúscula es ${nombre.toLocaleUpperCase()}`)
    console.log(`El nombre en minúscula es ${nombre.toLowerCase()}`)
    nombreUsuario.close();
});