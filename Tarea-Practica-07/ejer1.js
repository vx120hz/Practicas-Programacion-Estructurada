import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let secreto = Math.floor(Math.random() * 50) + 1;
    let intentos = 1;

    console.log("Adivine el número secreto entre 1 y 50");
    let respuesta = await rl.question("Ingrese su número: ");
    let numero = parseInt(respuesta);

    while (numero != secreto) {
        if (numero > secreto) {
            console.log("El número secreto es menor");
        } else if (numero < secreto) {
            console.log("El número secreto es mayor");
        } else {
            console.log("Debe ingresar un número");
        }

        respuesta = await rl.question("Ingrese su número: ");
        numero = parseInt(respuesta);
        intentos++;
    }

    console.log("Correcto, el número secreto era " + secreto);
    console.log("Cantidad de intentos: " + intentos);

    rl.close();
}

main();