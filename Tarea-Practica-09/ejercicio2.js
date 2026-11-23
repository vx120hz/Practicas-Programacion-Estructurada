// ejercicio2.js - Fibonacci
import readline from "node:readline";

const ejer2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

ejer2.question("Ingrese la posicion n de la serie de Fibonacci: ", function (n) {
    n = parseInt(n);

    if (isNaN(n) || n < 0) {
        console.log("Ingresa un numero entero positivo");
    } else {
        console.log("El termino " + n + " de Fibonacci es: " + fibonacci(n));
    }

    ejer2.close();
});