// Ejercicio2: Solicite un código con formato "EST20260645". Extraiga los primeros 3 caracteres y los últimos 4.

import readline from "node:readline"

const digitosEx = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

digitosEx.question("Ingrese el código (ej: EST20260645): ", function(codigo){

    let primeros3 = codigo.slice(0, 3);
    let ultimos4 = codigo.slice(-4);

    console.log(`Primeros 3 caracteres: ${primeros3}`);
    console.log(`Últimos 4 caracteres: ${ultimos4}`);

    digitosEx.close();
});