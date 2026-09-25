import readline from "node:readline";

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer1.question("Ingrese un numero para ver la tabla de multiplicar (1-10): ", function (num) {

    num = parseFloat(num);

    for (let tabla = 1; tabla <= 10; tabla++) {
        let resultado = num * tabla;
        console.log(`${num} x ${tabla} = ${resultado}`);
    }

    ejer1.close();

});