import readline from "node:readline";

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function preguntar(texto) {
    return new Promise(function (resolve) {
        ejer1.question(texto, resolve);
    });
}

async function jugar() {
    const secreto = Math.floor(Math.random() * 50) + 1;
    let intentos = 0;
    let adivinado = false;

    console.log("Adivine el número secreto entre 1 y 50");

    while (!adivinado) {
        let numero = parseInt(await preguntar("Ingrese su número: "));
        intentos++;

        if (numero > secreto) {
            console.log("El número secreto es menor");
        } else if (numero < secreto) {
            console.log("El número secreto es mayor");
        } else {
            adivinado = true;
            console.log(`¡Correcto! El número secreto era ${secreto}`);
            console.log(`Cantidad de intentos: ${intentos}`);
        }
    }

    ejer1.close();
}

jugar();