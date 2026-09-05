import readline from "node:readline"

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer1.question("Ingrese un numero: ", function (numero) {

    numero = parseFloat(numero);

    if (numero > 0) {
        console.log(`El numero ${numero} es positivo`);
    } else if (numero < 0) {
        console.log(`El numero ${numero} es negativo`);
    } else {
        console.log(`El numero ingresado es 0`);
    }

    ejer1.close();

});

