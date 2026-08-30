//Ejercicio3: Solicite un número de referencia de 8 dígitos. Conviértalo a texto y extraiga los primeros 4 dígitos.

import readline from "node:readline"

const conversion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

conversion.question("Ingrese el número de referencia (8 dígitos): ", function (numero) {

    let numeroTexto = String(numero);

    let primeros4 = numeroTexto.slice(0, 4);

    console.log(`Número como texto: ${numeroTexto}`);
    console.log(`Primeros 4 dígitos: ${primeros4}`);

    conversion.close();
});