import readline from "node:readline"

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer1.question("Ingrese un numero de lados de una figura Ej(3-6): ", function (lados) {
    lados = parseInt(lados);

    switch (lados) {
        case 3:
            console.log("Tu figura es un Triangulo");
            break;

        case 4:
            console.log("Tu figura es un Cuadrilatero");
            break;
        case 5:
            console.log("Tu figura es un Pentagono");
            break;
        case 6:
            console.log("Tu figura es un Hexagono");
            break;
        default:
            console.log("Ingresa un numero de lados valido");
    }

    ejer1.close();

});