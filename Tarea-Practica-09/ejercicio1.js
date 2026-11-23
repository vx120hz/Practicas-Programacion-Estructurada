import readline from "node:readline";

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

ejer1.question("Ingrese un numero para calcular su factorial: ", function (numero) {
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        console.log("Ingresa un numero entero positivo");
    } else {
        console.log("El factorial de " + numero + " es: " + factorial(numero));
    }

    ejer1.close();
});