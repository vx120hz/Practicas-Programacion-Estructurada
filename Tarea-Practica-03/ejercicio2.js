import readline from "node:readline"

const ejer2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer2.question("Ingrese la primera nota: ", function (nota1) {
    ejer2.question("Ingrese la segunda nota: ", function (nota2) {

        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);

        if (nota1 > nota2) {
            console.log(`La primera nota es mayor a la segunda nota`);
        } else if (nota2 > nota1) {
            console.log(`La segunda nota es mayor a la primera nota`);
        } else {
            console.log(`Ambas notas son iguales`);
        }

        ejer2.close();

    });
});