// ejercicio4.js - Invertir una cadena
import readline from "node:readline";

const ejer4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function invertir(texto) {
    if (texto === "") {
        return "";
    }
    return invertir(texto.slice(1)) + texto[0];
}

ejer4.question("Ingrese una palabra o texto: ", function (texto) {
    console.log("Texto invertido: " + invertir(texto));

    ejer4.close();
});