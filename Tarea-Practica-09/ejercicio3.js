// ejercicio3.js - Suma de digitos
import readline from "node:readline";

const ejer3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumaDigitos(n) {
    if (n < 10) {
        return n;
    }
    return (n % 10) + sumaDigitos(Math.floor(n / 10));
}

ejer3.question("Ingrese un numero entero: ", function (numero) {
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        console.log("Ingresa un numero entero positivo");
    } else {
        console.log("La suma de los digitos de " + numero + " es: " + sumaDigitos(numero));
    }

    ejer3.close();
});